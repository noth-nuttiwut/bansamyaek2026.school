import { MapPin, Phone, Mail, Facebook, Youtube, Share2, Globe } from 'lucide-react';
import Link from 'next/link';


export default function O28Page() {
  return (
    <main className="min-h-[70vh] bg-[#FDFBF7]">
      <div className="max-w-5xl mx-auto px-6 mt-12">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-orange-100 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-600 text-white rounded-xl text-sm font-black mb-4 shadow-lg shadow-orange-200">
              O28
            </div>
            <h1 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
              ช่องทางแจ้งเรื่องร้องเรียนการทุจริตและประพฤติมิชอบ
            </h1>
          </div>
          <Link href="/ita" className="text-orange-600 font-bold hover:underline flex items-center gap-2 whitespace-nowrap">
            ❮ กลับหน้าหลัก ITA
          </Link>
        </div>
      </div>
      <section className="max-w-4xl mx-auto space-y-4 animate-in slide-in-from-bottom-5 duration-700">
        <div className="bg-red-50 border-2 border-red-100 rounded-[3rem] p-6 text-center">
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-xl animate-pulse">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
          </div>
          <h2 className="text-3xl font-black text-red-900 mb-2">ช่องทางแจ้งเรื่องร้องเรียน</h2>
          <p className="text-red-700 font-medium">การทุจริตและประพฤติมิชอบของเจ้าหน้าที่</p>
          <div className="mt-6 inline-block bg-white px-6 py-2 rounded-full text-red-600 text-xs font-black uppercase tracking-widest shadow-sm">
            ข้อมูลของท่านจะถูกเก็บเป็นความลับสูงสุด
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {/* ช่องทางที่ 1: Online Form */}
          <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-stone-100 flex flex-col items-center gap-8">
            <div className="flex-grow">
              <h3 className="text-2xl font-black text-gray-900 mb-2">แจ้งผ่านระบบออนไลน์</h3>
              <p className="text-gray-500">กรอกข้อมูลผ่านแบบฟอร์มอิเล็กทรอนิกส์ (E-Form) รวดเร็วและปลอดภัย</p>
            </div>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd6PrtNT2ZN4GmG92yjgtUmKpNqIhWnS66JNRpelyCID_7AKA/viewform?embedded=true" width="100%"
              className="w-full h-[65vh]"></iframe>
          </div>
      
          {/* ช่องทางอื่นๆ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="bg-stone-900 p-8 rounded-[2.5rem] text-white">
              <p className="text-xs text-stone-500 font-black uppercase mb-2">สายตรงผู้อำนวยการ</p>
              <p className="text-2xl font-black">038-209-086</p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-stone-100">
              <p className="text-xs text-orange-500 font-black uppercase mb-2">ส่งจดหมายด้วยตนเอง</p>
              <p className="font-bold text-gray-800">ตู้แดงรับเรื่องร้องเรียนหน้าอาคารบริหาร</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
