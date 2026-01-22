import { Book, Video, ChevronRight } from 'lucide-react';
import { getELearningData } from '@/libs/getGoogleDriveData';
import Link from 'next/link';

export default async function ELearningDashboard() {
  const data = await getELearningData();
  
  if (!data) {
    return (
      <main className="min-h-screen bg-[#FDFBF7] pb-24">
        <header className="bg-white border-b border-orange-100 py-20 shadow-sm text-center">
          <div className="max-w-4xl mx-auto px-6">
            <span className="text-orange-600 font-black tracking-widest uppercase text-sm">Online Learning</span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mt-4 font-kanit">คลังบทเรียนออนไลน์</h1>
            <p className="text-gray-500 mt-6 text-lg font-light">เรียนรู้ได้ทุกที่ ทุกเวลา กับคุณครูโรงเรียนบ้านสามแยก</p>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-6 -mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-white p-8 rounded-[2.5rem] shadow-xl shadow-orange-900/5 border border-orange-50 hover:-translate-y-2 transition-all duration-500 cursor-pointer">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500">
              <Video className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">ไม่พบข้อมูล</h2>
            <p className="text-gray-500">ไม่พบข้อมูล</p>
          </div>
        </div>
      </main>
    );
  }
  
  return (
    <main className="min-h-screen bg-[#FDFBF7] pb-24">
      <header className="bg-white border-b border-orange-100 py-20 shadow-sm text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-orange-600 font-black tracking-widest uppercase text-sm">Online Learning</span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mt-4 font-kanit">คลังบทเรียนออนไลน์</h1>
          <p className="text-gray-500 mt-6 text-lg font-light">เรียนรู้ได้ทุกที่ ทุกเวลา กับคุณครูโรงเรียนบ้านสามแยก</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 -mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <Link key={item.subject} href={`/e-learning/${encodeURIComponent(item.subject)}`}>
            <div className="group bg-white p-8 rounded-[2.5rem] shadow-xl shadow-orange-900/5 border border-orange-50 hover:-translate-y-2 transition-all duration-500 cursor-pointer">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500">
                <Book size={32} />
              </div>
              <h3 className="text-2xl font-black text-gray-800 font-kanit">{item.subject}</h3>
              <p className="text-gray-400 mt-2 font-bold uppercase tracking-tighter">
                {item.videos.length} บทเรียนที่พร้อมเรียนรู้
              </p>
              <div className="mt-8 flex items-center justify-between text-orange-600 font-bold">
                <span>เข้าสู่บทเรียน</span>
                <div className="w-10 h-10 rounded-full border-2 border-orange-100 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-all">
                  <ChevronRight size={20} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}