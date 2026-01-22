"use client";
import React, { useState, useMemo } from 'react';
import { ImageIcon, FolderOpen, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import { getDisplayUrl } from '@/libs/utils';

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
            <div
              key={idx}
              onClick={() => setSelectedImage({ ...file, index: idx })}
              className="group relative aspect-square bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-white"
            >
              <Image
                src={getDisplayUrl(file.url)}
                alt={file.file_name}
                width={300}
                height={300}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-sm truncate">{file.file_name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  
      {/* Lightbox (ขยายภาพใหญ่) */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <X size={40} />
          </button>
  
          <Image
            src={getDisplayUrl(selectedImage.url)}
            alt={selectedImage.file_name}
            width={2048}
            height={1080}
            
            referrerPolicy="no-referrer"
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
          />
  
          <div className="absolute bottom-10 text-center text-white">
            <h3 className="text-xl font-semibold">{selectedImage.file_name}</h3>
            <p className="text-white/60">หมวดหมู่: {activeFolder}</p>
          </div>
        </div>
      )}
    </div>
  )
}
