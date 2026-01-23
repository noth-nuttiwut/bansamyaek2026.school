
"use client";
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Monitor } from 'lucide-react';
import Link from 'next/link';


interface Window {
  RufflePlayer: any;
}


export default function FlashPlayerPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState("กำลังเตรียมการถอดรหัส Flash...");

  useEffect(() => {
    // 1. โหลด Ruffle Script จาก CDN
    let player: any = null;
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@ruffle-rs/ruffle";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      try {
        const ruffle = window.RufflePlayer.newest();
        player = ruffle.createPlayer();
        
        if (containerRef.current) {
          containerRef.current.innerHTML = ""; // ล้างข้อมูลเก่า
          containerRef.current.appendChild(player);
          
          // 2. โหลดไฟล์จากโฟลเดอร์ public
          player.load("/flash-player/ตัวเปิด.swf").then(() => {
            setStatus("โหลดสื่อการสอนสำเร็จ");
          }).catch((err: any) => {
            setStatus("เกิดข้อผิดพลาดในการโหลดไฟล์ .swf");
            console.error(err);
          });

          // ปรับแต่งขนาด Player
          player.style.width = "100%";
          player.style.height = "100%";
          player.style.aspectRatio = "4/3"; // สัดส่วนปกติของไฟล์ Flash เก่า
        }
      } catch (e: any) {
        setStatus("Browser ของคุณไม่รองรับการจำลอง Flash");
      }
    };

    return () => {
      if (player) {
        // พยายามหยุดเสียงภายใน player ก่อนลบ
        try { player.pause(); } catch(e) {} 
        player.remove();
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <main className="min-h-[80vh] bg-slate-50 pb-12">
      {/* ส่วนหัว */}
      <div className="bg-white border-b border-slate-200 py-8 shadow-sm">
        <div className="max-w-5xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-orange-600 font-bold text-sm mb-4">
            <ArrowLeft size={16} /> กลับหน้าหลัก
          </Link>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-orange-100 text-orange-600 rounded-2xl">
              <Monitor size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800 font-kanit">นวัตกรรมเรื่อง FlowChart</h1>
              <p className="text-slate-500 text-sm">{status}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-10">
        {/* กรอบรันไฟล์ Flash */}
        <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden aspect-[4/3] flex items-center justify-center relative">
          <div ref={containerRef} className="w-full h-full rounded-[2rem] overflow-hidden bg-slate-900">
             {/* Ruffle Player จะถูกแทรกที่นี่ */}
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-100 p-6 rounded-2xl">
          <h3 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
            💡 คำแนะนำการใช้งาน
          </h3>
          <ul className="text-sm text-blue-700 space-y-2 list-disc list-inside font-light">
            <li>สื่อการสอนนี้ใช้เทคโนโลยี Ruffle เพื่อจำลองการทำงานของ Flash</li>
            <li>หากภาพไม่แสดงผล ให้ลองรีเฟรชหน้าจออีกครั้ง</li>
            <li>รองรับการใช้งานบนคอมพิวเตอร์และแท็บเล็ตได้ดีที่สุด</li>
          </ul>
        </div>
      </div>
    </main>
  );
}