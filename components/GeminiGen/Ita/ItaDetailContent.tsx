// 💡 แนวทาง: ใช้ 'use client' เฉพาะใน Component ที่ต้องคลิก
"use client";
import { useState } from 'react';

export default function ItaDetailContent({ group }: { group: any }) {
  // เก็บสถานะไฟล์ที่เลือกดู (เริ่มต้นที่ไฟล์แรก)
  const [selectedFile, setSelectedFile] = useState(group.files[0]);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* ฝั่งซ้าย: เมนูเลือกไฟล์ (รวดเร็วมากเพราะเป็น Client State) */}
      <div className="lg:w-1/3 space-y-3">
        {group.files.reverse().map((file: any, index: number) => (
          <button 
            key={"fpreview_" + index + file.name}
            onClick={() => setSelectedFile(file)}
            className={`w-full text-left p-3 rounded-2xl border transition-all ${
              selectedFile.file_name === file.file_name 
              ? "bg-orange-600 text-white shadow-lg" 
              : "bg-white hover:bg-orange-50"
            }`}
          >
            <p className="font-bold text-sm">{file.file_name}</p>
          </button>
        ))}
      </div>

      {/* ฝั่งขวา: จอ Preview */}
      <div className="lg:w-2/3 bg-white p-4 rounded-[2.5rem] shadow-xl border border-stone-100">
        <div className="aspect-[1/1.4] rounded-2xl overflow-hidden bg-stone-100">
          <iframe 
            src={selectedFile.url.replace('/view', '/preview')} 
            className="w-full h-full"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}