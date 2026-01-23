"use client";
import { useEffect, useRef } from 'react';

export default function FlashPlayerPage({ path } : {path: string}) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // 1. โหลด Ruffle Script จาก CDN
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@ruffle-rs/ruffle";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // 2. เมื่อโหลดเสร็จ ให้สั่งให้ Ruffle สร้าง Player
      const ruffle = (window as any).RufflePlayer.newest();
      const player = ruffle.createPlayer();
      
      if (containerRef.current) {
        containerRef.current.appendChild(player);
        // 3. ใส่ Path ของไฟล์ .swf ของคุณ
        player.load(path); 
        
        // ปรับขนาด Player
        player.style.width = "100%";
        player.style.height = "600px";
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#FDFBF7] pb-24">
      <header className="bg-white border-b border-orange-100 py-20 shadow-sm text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-orange-600 font-black tracking-widest uppercase text-sm">Online Learning</span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mt-4 font-kanit">คลังบทเรียนออนไลน์</h1>
          <p className="text-gray-500 mt-6 text-lg font-light">เรียนรู้ได้ทุกที่ ทุกเวลา กับคุณครูโรงเรียนบ้านสามแยก</p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 font-kanit px-4 pt-4">นวัตกรรมเรื่อง FlowChart</h1>
        
        <div className="bg-white p-4 rounded-3xl shadow-xl overflow-hidden border-4 border-white">
          {/* Container สำหรับรัน Flash */}
          <div ref={containerRef} id="flash-container"></div>
        </div>

      </div>
    </main>
  );
}