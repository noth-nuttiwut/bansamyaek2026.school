import React from 'react';
import Image from 'next/image';
import { FileText, Target, Eye, Award } from 'lucide-react';
import Logo from '@/public/logo.png'; // สมมติว่าเป็นไฟล์ตราสัญลักษณ์

const AboutPage = () => {
  const file_url = {
    history : "https://drive.google.com/file/d/1U5LdJd9xbfVaCs4AOShyqxjCwvGo7mtb/view?usp=drive_link",
    vision : "https://drive.google.com/file/d/1J0CxquARL6pkzXKjnsVplJ72b7dMuXeC/view?usp=drive_link",   
  }
  
  return (
    <div className="min-h-[80vh] bg-white">
      {/* Header Section */}
      <section className="bg-orange-600 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-kanit">เกี่ยวกับเรา</h1>
        <p className="text-orange-100 text-lg">รู้จักโรงเรียนบ้านสามแยกให้ดียิ่งขึ้น</p>
      </section>

      <div className="max-w-6xl mx-auto px-6 -mt-10 pb-24">
        
        {/* 1. ส่วนตราสัญลักษณ์และปรัชญา (Symbol & Philosophy) */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center gap-12 border border-orange-50">
          <div className="w-48 h-48 relative flex-shrink-0 bg-slate-50 rounded-full p-6 shadow-inner">
            <Image 
              src={Logo} 
              alt="ตราสัญลักษณ์โรงเรียน" 
              className="object-contain"
              fill
              loading="lazy"
            />
          </div>
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-orange-600 font-bold mb-4 uppercase tracking-wider text-sm">
              <Award size={20} /> Philosophy
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6 font-kanit">ปรัชญาโรงเรียน</h2>
            <p className="text-2xl text-slate-600 italic leading-relaxed font-light">
              "ปญฺญา นรนํ รตนํ : ปัญญาเป็นแก้วของนรชน"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 2. ส่วนประวัติโรงเรียน (School History - PDF Link) */}
          <div className="group bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-3xl p-8 border border-slate-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <FileText size={120} />
             </div>
             <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3 font-kanit">
                <FileText className="text-orange-600" /> ประวัติโรงเรียน
             </h3>
             <p className="text-slate-500 mb-8 font-light">
                ศึกษาความเป็นมาและรากฐานของโรงเรียนบ้านสามแยก จากอดีตจนถึงปัจจุบัน
             </p>
             <a 
               href={file_url.history}
               target="_blank"
               className="inline-flex items-center justify-center px-6 py-3 bg-slate-800 text-white rounded-xl hover:bg-orange-600 transition-colors gap-2 font-medium"
             >
               เปิดดูไฟล์ PDF
             </a>
          </div>

          {/* 3. ส่วนวิสัยทัศน์และพันธกิจ (Vision & Mission - PDF Link) */}
          <div className="group bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-3xl p-8 border border-slate-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target size={120} />
             </div>
             <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3 font-kanit">
                <Eye className="text-orange-600" /> วิสัยทัศน์และพันธกิจ
             </h3>
             <p className="text-slate-500 mb-8 font-light">
                เป้าหมายและแนวทางการดำเนินงานเพื่อมุ่งสู่ความสำเร็จทางการศึกษาอย่างยั่งยืน
             </p>
             <a 
               href={file_url.vision}
               target="_blank"
               className="inline-flex items-center justify-center px-6 py-3 bg-slate-800 text-white rounded-xl hover:bg-orange-600 transition-colors gap-2 font-medium"
             >
               เปิดดูไฟล์ PDF
             </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;