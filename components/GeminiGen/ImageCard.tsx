"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function ImageCard({ src, alt, onClick }: { src: string; alt: string; onClick: () => void }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div 
      onClick={onClick}
      className="group relative aspect-square bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-white"
    >
      {/* --- Skeleton Loader --- */}
      {isLoading && (
        <div className="absolute inset-0 z-10 animate-pulse bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 flex items-center justify-center">
            {/* ใส่ Icon หรือ Logo โรงเรียนจางๆ ไว้ตรงกลาง Skeleton ก็ดูพรีเมียมครับ */}
            <div className="w-12 h-12 bg-slate-300 rounded-full opacity-20"></div>
        </div>
      )}

      {/* --- Actual Image --- */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        referrerPolicy="no-referrer"
        quality={75}
        className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${isLoading ? 'scale-110 blur-xl grayscale' : 'scale-100 blur-0 grayscale-0'}`}
        onLoad={() => setLoading(false)} // เมื่อรูปโหลดเสร็จจะปิด Skeleton
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 z-20">
        <p className="text-white text-sm truncate">{alt}</p>
      </div>
    </div>
  );
};