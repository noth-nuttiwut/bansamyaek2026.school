import { BookOpen, DollarSign, Users, Home, ArrowRight } from "lucide-react"; // อย่าลืมลง lucide-react
import Link from "next/link";

const NewHeroComponent = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-900 via-orange-500 to-orange-50">
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-md font-medium tracking-wider text-amber-100 uppercase bg-black/20 rounded-full backdrop-blur-sm border border-white/20">
            ยินดีต้อนรับสู่รั้วบ้านสามแยก
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            ขับเคลื่อนด้วย <span className="text-amber-300">นวัตกรรม</span> 
          <br/>ทำโรงเรียนให้เหมือน <span className="text-amber-300">บ้าน</span> 
          <br/>ประสานสัมพันธ์ <span className="text-amber-300">ชุมชน</span> 
          <br/>ยกระดับผลการ <span className="text-amber-300">เรียนรู้ </span> 
          <br/>สู่ทักษะใน <span className="text-amber-300">อนาคต</span>
          </h1>
          {/*<h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            ขับเคลื่อนด้วย<span className="text-amber-300">นวัตกรรม</span> 
          <br/>ทำโรงเรียนให้เหมือน<span className="text-amber-300">บ้าน</span>
          <br/>ประสานสัมพันธ์ชุมชน ยกระดับผลการ<span className="text-amber-300">เรียนรู้</span><br/>สู่ทักษะใน<span className="text-amber-300">อนาคต</span>
          </h1>*/}
          <p className="text-lg text-amber-50 mb-10 max-w-2xl mx-auto font-light drop-shadow">
             
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/ita/O7">
              <button className="px-8 py-3 bg-white hover:bg-amber-50 text-orange-700 rounded-xl font-medium transition-all shadow-xl shadow-amber-900/25 flex items-center gap-2">
                อ่านข่าวประชาสัมพันธ์ <ArrowRight size={18} />
              </button>
            </Link>
            <Link href="/about">
              <button className="px-8 py-3 bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md rounded-xl font-medium transition-all">
                เกี่ยวกับเรา
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewHeroComponent;
