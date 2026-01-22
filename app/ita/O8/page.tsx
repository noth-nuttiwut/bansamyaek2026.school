import { MapPin, Phone, Mail, Facebook, Youtube, Share2, Globe } from 'lucide-react';
import Link from 'next/link';


export default function O8Page() {
  return (
  <main className="bg-[#FDFBF7]">
    <div className="max-w-5xl mx-auto px-6 mt-12">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-orange-100 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-600 text-white rounded-xl text-sm font-black mb-4 shadow-lg shadow-orange-200">
            O8
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
            Q&A ถาม-ตอบ
          </h1>
        </div>
        <Link href="/ita" className="text-orange-600 font-bold hover:underline flex items-center gap-2 whitespace-nowrap">
          ❮ กลับหน้าหลัก ITA
        </Link>
      </div>
    <section className="space-y-10 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-500 rounded-[3rem] p-12 text-white shadow-xl">
        <h2 className="text-4xl font-black mb-4">Q&A ถาม-ตอบ</h2>
        <p className="text-orange-50 opacity-90">ช่องทางสอบถามข้อมูลและคำถามที่พบบ่อยสำหรับผู้ปกครองและนักเรียน</p>
      </div>
    
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ฝั่งซ้าย: รายการเอกสารเดิม (ปูพื้นฐานความรู้) */}
        <div className="lg:col-span-2 space-y-6">
          {/*<h3 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            <span className="w-2 h-6 bg-orange-500 rounded-full"></span>
            คลังความรู้และข้อมูลทั่วไป
          </h3>*/}
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScK8lEpJIA1eps9Qt-p9cEdvxsYerkS5nQcBa6_wGnDSLW9Ig/viewform?embedded=true" width="100%"
            className="w-full h-[70vh]"></iframe>
        </div>
    
        {/* ฝั่งขวา: ช่องทางถามตอบจริง */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] border border-orange-100 shadow-sm">
            <h3 className="font-black text-gray-900 mb-4">มีข้อสงสัยเพิ่มเติม?</h3>
            <p className="text-sm text-gray-500 mb-6">สามารถส่งคำถามถึงโรงเรียนได้โดยตรงผ่านระบบออนไลน์</p>
            <button className="w-full py-4 bg-orange-600 text-white rounded-2xl font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-200">
              ตั้งคำถามใหม่ ↗
            </button>
          </div>
          
          <div className="bg-stone-900 p-8 rounded-[2.5rem] text-white">
            <h4 className="font-bold mb-2">เวลาทำการเจ้าหน้าที่</h4>
            <p className="text-sm text-stone-400 leading-relaxed">จันทร์ - ศุกร์: 08.30 - 16.30 น.<br/>ยกเว้นวันหยุดนักขัตฤกษ์</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  </main>
  );
};

