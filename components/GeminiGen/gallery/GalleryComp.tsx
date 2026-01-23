"use client";
import React, { useState, useMemo } from 'react';
import { ImageIcon, FolderOpen, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import { getDisplayUrl } from '@/libs/utils';
import ImageCard from '@/components/GeminiGen/ImageCard';

interface GalleryFile {
  file_name: string;
  folder_name: string;
  url: string;
}

interface ITAGroup {
  folder_name: string;
  files: GalleryFile[];
}

// 2. กำหนด Interface สำหรับ Props ของ Component
interface GalleryProps {
  folderData: ITAGroup[];
}

interface SelectedImage extends GalleryFile {
  index: number;
}

export default function GalleryComp({ folderData }: GalleryProps) {
  
  
  if (!folderData || folderData.length === 0) {
    return <div>No data available</div>;
  }
  
  const [activeFolder, setActiveFolder] = useState(folderData[0].folder_name);
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);
  
  // กรองไฟล์ตามโฟลเดอร์ที่เลือก
  const currentFiles = useMemo(() => {
    const folder = folderData.find(f => f.folder_name === activeFolder);
    return folder ? folder.files : [];
  }, [activeFolder]);
  
  
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-600 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4 font-kanit">ภาพกิจกรรมโรงเรียน</h1>
        <p className="text-orange-50 opacity-90">บันทึกความทรงจำและกิจกรรมต่างๆ ของชาวบ้านสามแยก</p>
      </section>
  
      <div className="max-w-7xl mx-auto px-6 -mt-8">
        {/* ส่วนเลือกโฟลเดอร์ (Tabs) */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {folderData.map((folder) => (
            <button
              key={folder.folder_name}
              onClick={() => setActiveFolder(folder.folder_name)}
              className={`px-6 py-3 rounded-full font-semibold transition-all shadow-sm flex items-center gap-2 ${
                activeFolder === folder.folder_name
                  ? "bg-orange-600 text-white shadow-orange-200 shadow-lg scale-105"
                  : "bg-white text-gray-600 hover:bg-orange-50"
              }`}
            >
              <FolderOpen size={18} />
              {folder.folder_name}
            </button>
          ))}
        </div>
  
        {/* แสดงจำนวนภาพ */}
        <div className="mb-6 flex items-center gap-2 text-gray-500 font-medium">
          <ImageIcon size={20} className="text-orange-500" />
          <span>แสดง {currentFiles.length} รูปภาพ ในหมวด {activeFolder}</span>
        </div>
  
        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentFiles.map((file, idx: number) => (
            <ImageCard 
                  key={idx}
                  src={getDisplayUrl(file.url)}
                  alt={file.file_name}
                  onClick={() => setSelectedImage({ ...file, index: idx })}
                />
          ))}
        </div>
      </div>
  
      {/* Lightbox (ขยายภาพใหญ่) */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 select-none">
          
          {/* ปุ่มปิด */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
          >
            <X size={40} />
          </button>
      
          {/* ปุ่มภาพก่อนหน้า (Previous) */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              const newIndex = (selectedImage.index - 1 + currentFiles.length) % currentFiles.length;
              setSelectedImage({ ...currentFiles[newIndex], index: newIndex });
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all backdrop-blur-md z-[110] border border-white/10"
          >
            <ChevronLeft size={32} />
          </button>
      
          {/* รูปภาพหลัก */}
          <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12">
            <Image
              key={selectedImage.url} // ใส่ key เพื่อให้เกิด animation ตอนเปลี่ยนรูป
              src={getDisplayUrl(selectedImage.url)}
              alt={selectedImage.file_name}
              width={1920}
              height={1080}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in fade-in zoom-in-95 duration-300"
            />
          </div>
      
          {/* ปุ่มภาพถัดไป (Next) */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              const newIndex = (selectedImage.index + 1) % currentFiles.length;
              setSelectedImage({ ...currentFiles[newIndex], index: newIndex });
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all backdrop-blur-md z-[110] border border-white/10"
          >
            <ChevronRight size={32} />
          </button>
      
          {/* ข้อมูลรูปภาพด้านล่าง */}
          <div className="absolute bottom-8 text-center text-white bg-black/40 px-6 py-3 rounded-2xl backdrop-blur-md border border-white/10">
            <h3 className="text-lg font-bold font-kanit">{selectedImage.file_name}</h3>
            <p className="text-white/50 text-sm">
              ภาพที่ {selectedImage.index + 1} จาก {currentFiles.length} ในหมวด {activeFolder}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
