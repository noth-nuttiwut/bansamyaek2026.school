import { MapPin, Phone, Mail, Facebook, Youtube, Share2, Globe } from 'lucide-react';
import Link from 'next/link';


export default function O9Page() {
  // ไอเดียดีไซน์สำหรับ O9
  const socialChannels = [
    { name: 'FB บ้านสามแยก',　url: 'https://www.facebook.com/bansamyeak', color: 'bg-[#1877F2]', icon: 'f', desc: 'ติดตามข่าวสารและกิจกรรมรายวัน' },
    { name: 'YouTube',　url: 'https://www.youtube.com/@SamyarkSchool', color: 'bg-[#FF0000]', icon: 'y', desc: 'ชมวิดีโอกิจกรรมและการเรียนการสอน' },
    { name: 'FB สพป.ชลบุรี เขต2',　url: 'https://www.facebook.com/profile.php?id=100076660265075', color: 'bg-[#1877F2]', icon: 'f', desc: 'ติดตามข่าวสารและกิจกรรมรายวัน' },
  ];
  return (
    <main className="min-h-[60vh] bg-[#FDFBF7]">
      <div className="max-w-5xl mx-auto px-6 mt-12">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-orange-100 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-600 text-white rounded-xl text-sm font-black mb-4 shadow-lg shadow-orange-200">
              O9
            </div>
            <h1 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
              Social Network
            </h1>
          </div>
          <Link href="/ita" className="text-orange-600 font-bold hover:underline flex items-center gap-2 whitespace-nowrap">
            ❮ กลับหน้าหลัก ITA
          </Link>
        </div>
      </div>
      <section className="flex flex-col gap-8 justify-center items-center">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            socialChannels.map( social =>
              <div key={social.name} className="group relative bg-white p-10 rounded-[3rem] border border-stone-100 shadow-sm hover:shadow-2xl transition-all overflow-hidden">
                <div className={`absolute top-0 right-0 w-24 h-24 ${social.color} opacity-5 rounded-bl-[5rem] group-hover:scale-150 transition-transform`}></div>
  
                <div className={`w-16 h-16 ${social.color} text-white rounded-2xl flex items-center justify-center text-2xl font-black mb-6 shadow-lg`}>
                  {social.icon}
                </div>
  
                <h3 className="text-2xl font-black text-gray-900 mb-1">{social.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">{social.desc}</p>
  
                <Link href={social.url} target="_blank" className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest text-gray-400 group-hover:text-orange-600 transition-colors">
                  Visit Channel ➔
                </Link>
              </div>
            )
          }
        </div>
      </section>
    </main>
  );
}
