import { SITE_CONFIG } from '@/libs/siteConfig';
import { MapPin, Phone, Mail, Globe, Facebook, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function PageO5(){
  return (
  <main className="min-h-[70vh] bg-[#FDFBF7]">
    <div className="max-w-5xl mx-auto px-6 mt-12">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-orange-100 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-600 text-white rounded-xl text-sm font-black mb-4 shadow-lg shadow-orange-200">
            O5
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
          ข้อมูลการติดต่อ
          </h1>
        </div>
        <Link href="/ita" className="text-orange-600 font-bold hover:underline flex items-center gap-2 whitespace-nowrap">
          ❮ กลับหน้าหลัก ITA
        </Link>
      </div>
      <section className="max-w-7xl mx-auto px-6 py-12 animate-in fade-in slide-in-from-bottom-5 duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* 📞 ส่วนข้อมูล (Left Side - 5/12) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="relative p-10 rounded-[3.5rem] bg-white border border-stone-100 shadow-2xl shadow-orange-900/5 overflow-hidden">
            {/* ตกแต่งพื้นหลังจางๆ */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-50 rounded-full blur-3xl opacity-50"></div>
            
            <h3 className="text-3xl font-black text-gray-900 mb-10 relative flex items-center gap-4">
              <span className="w-3 h-10 bg-orange-600 rounded-full"></span>
              ช่องทางการติดต่อ
            </h3>

            <div className="space-y-6 relative">
              {[
                { icon: <MapPin />, label: "ที่อยู่สถานศึกษา", value: SITE_CONFIG.contact.address, color: "text-blue-600 bg-blue-50" },
                { icon: <Phone />, label: "เบอร์โทรศัพท์", value: SITE_CONFIG.contact.phone, color: "text-orange-600 bg-orange-50" },
                { icon: <Mail />, label: "อีเมลติดต่อ", value: SITE_CONFIG.contact.email, color: "text-emerald-600 bg-emerald-50" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-gray-700 font-bold leading-relaxed">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Connect Card (สไตล์เดียวกับปุ่มหน้า Hero) */}
          <div className="p-8 rounded-[2.5rem] bg-stone-900 text-white flex justify-between items-center shadow-xl">
            <div>
              <p className="text-orange-400 font-black text-xs uppercase tracking-widest mb-2">Social Connect</p>
              <h4 className="text-xl font-bold">ติดตามความเคลื่อนไหว</h4>
            </div>
            <div className="flex gap-3">
              <a href={SITE_CONFIG.social.facebook} className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-orange-600 transition-all">
                <Facebook size={20} />
              </a>
              {/*<a href={SITE_CONFIG.social.} className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-all">
                <MessageCircle size={20} />
              </a>*/}
            </div>
          </div>
        </div>

        {/* 🗺️ ส่วนแผนที่ (Right Side - 7/12) */}
        <div className="lg:col-span-7 relative min-h-[500px] lg:min-h-full">
          <div className="absolute inset-0 rounded-[3.5rem] overflow-hidden border-8 border-white shadow-2xl">
            <iframe 
              src={SITE_CONFIG.contact.mapUrl}
              className="w-full h-full grayscale-[0.1] contrast-[1.1] brightness-[1.02]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
            
            {/* Label แผนที่แบบเก๋ๆ */}
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/50 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <Globe className="text-orange-600 animate-spin-slow" size={20} />
                <span className="font-black text-gray-900">พิกัดโรงเรียน</span>
              </div>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                ตั้งอยู่ในเขตอำเภอเกาะจันทร์ เดินทางสะดวกผ่านถนนหลักชุมชน
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
    </div>
  </main>
  );
};