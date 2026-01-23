
"use client";
import React, { useState } from 'react';
import { Play, ChevronRight, BookOpen, Clock, ArrowLeft, Info } from 'lucide-react';
import { ElearningSubject } from '@/types/ita';
import { getEmbedUrl } from '@/libs/utils';
import Link from 'next/link';



export interface subjectVideoProps {
  subjectData: ElearningSubject;
}

export default function MultiVideoPlayer({ subjectData }: subjectVideoProps) {

  if (!subjectData) return <div className="p-20 text-center">ไม่พบวิชาที่ต้องการ</div>;
  
  // State สำหรับเก็บวิดีโอที่กำลังเล่นอยู่ (เริ่มต้นที่วิดีโอแรก)
  const [currentVideo, setCurrentVideo] = useState<ElearningSubject['videos'][0]>(subjectData?.videos[0]);
  
  if (!currentVideo) return <div className="p-20 text-center">ไม่พบวิดีโอที่ต้องการ</div>;
  
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* 🔝 Top Navigation Bar */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <Link href="/e-learning" className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h2 className="text-lg font-bold text-slate-800 font-kanit leading-tight">{subjectData.subject}</h2>
            <p className="text-xs text-slate-400">บทเรียนทั้งหมด {subjectData.videos.length} ตอน</p>
          </div>
        </div>
        <div className="hidden md:block">
           <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100">
             โรงเรียนบ้านสามแยก E-Learning
           </span>
        </div>
      </nav>
  
      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
        
        {/* 📺 Left Side: Video Player & Info */}
        <div className="flex-1 overflow-y-auto bg-slate-100">
          <div className="max-w-5xl mx-auto p-4 md:p-8">
            {/* Video Box */}
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-black shadow-2xl border border-white">
              <iframe
                key={currentVideo.id} // ใส่ key เพื่อให้ iframe โหลดใหม่เมื่อเปลี่ยนวิดีโอ
                src={getEmbedUrl(currentVideo.url)}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
  
            {/* Video Details */}
            <div className="mt-8 bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-black text-slate-800 font-kanit">
                    {currentVideo.name}
                  </h1>
                  <div className="flex items-center gap-4 mt-3 text-slate-500 text-sm font-medium">
                    <span className="flex items-center gap-1.5"><BookOpen size={16} className="text-orange-500" /> {subjectData.subject}</span>
                    <span className="flex items-center gap-1.5"><Info size={16} className="text-orange-500" /> บทเรียนที่ {currentVideo.id + 1}</span>
                  </div>
                </div>
              </div>
              <hr className="my-8 border-slate-100" />
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-orange-500">
                <p className="text-slate-600 leading-relaxed whitespace-pre-wrap font-light italic">
                  {currentVideo.description}
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* 📜 Right Side: Sidebar Playlist */}
        <div className="w-full lg:w-[400px] bg-white border-l border-slate-200 overflow-y-auto h-[500px] lg:h-auto">
          <div className="p-6 border-b border-slate-100 sticky top-0 bg-white z-10">
            <h3 className="text-lg font-bold text-slate-800 font-kanit flex items-center gap-2">
              <Play size={18} className="fill-orange-600 text-orange-600" /> รายการบทเรียน
            </h3>
          </div>
          
          <div className="divide-y divide-slate-50">
            {subjectData.videos.map((vid, index) => (
              <button
                key={vid.id}
                onClick={() => {
                  setCurrentVideo(vid);
                  window.scrollTo({ top: 0, behavior: 'smooth' }); // เลื่อนขึ้นบนมือถือ
                }}
                className={`w-full text-left p-5 flex gap-4 transition-all hover:bg-slate-50 group ${
                  currentVideo.id === vid.id ? "bg-orange-50/80 border-l-4 border-orange-600" : ""
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-bold transition-colors ${
                  currentVideo.id === vid.id 
                    ? "bg-orange-600 text-white" 
                    : "bg-slate-100 text-slate-400 group-hover:bg-orange-100 group-hover:text-orange-600"
                }`}>
                  {index + 1}
                </div>
                <div className="min-w-0">
                  <h4 className={`text-sm font-bold truncate ${
                    currentVideo.id === vid.id ? "text-orange-700" : "text-slate-700"
                  }`}>
                    {vid.name}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1 font-medium">
                    คลิกเพื่อเล่นวิดีโอ
                  </p>
                </div>
                {currentVideo.id === vid.id && (
                  <div className="ml-auto self-center">
                    <div className="flex gap-1">
                      <span className="w-1 h-3 bg-orange-600 animate-[bounce_1s_infinite]"></span>
                      <span className="w-1 h-3 bg-orange-600 animate-[bounce_1.2s_infinite]"></span>
                      <span className="w-1 h-3 bg-orange-600 animate-[bounce_0.8s_infinite]"></span>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
  
      </div>
    </main>
  );
}