import Image from 'next/image';
import DirectorImage from '@/public/director-profile.png';

export default function Director() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-orange-50/40">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-[4rem] p-10 lg:p-16 shadow-xl border border-orange-50 flex flex-col lg:flex-row items-center gap-14">
          <div className="w-72 h-72 flex-shrink-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-orange-50 relative">
            <Image 
              src={DirectorImage} 
              alt="Director" 
              className="w-full object-auto"
            />
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-4xl font-bold text-gray-900 mb-3">นางสาวสวิตตา ประเสริฐสาร</h3>
            <p className="text-2xl text-orange-600 font-bold mb-8 italic">ผู้อำนวยการโรงเรียนบ้านสามแยก</p>
            <div className="relative">
              <span className="absolute -top-10 -left-8 text-7xl text-orange-100 opacity-50 font-serif">“</span>
              <p className="text-gray-600 text-xl italic leading-relaxed relative z-10 font-medium">
                ปรัชญาของโรงเรียน คือ ปญฺญา นรนํ รตนํ ปัญญาเป็นแก้วของนรชน
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
