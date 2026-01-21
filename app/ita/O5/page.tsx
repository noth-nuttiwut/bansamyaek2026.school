import { MapPin, Phone, Mail, Facebook, Youtube, Share2, Globe } from 'lucide-react';
import Link from 'next/link';
// ข้อมูลการติดต่อ
const contactInfo = [
  { 
    icon: <MapPin className="w-6 h-6" />, 
    label: "ที่อยู่สถานศึกษา", 
    value: "เลขที่ 40 หมู่ 5 ตำบลท่าบุญมี อำเภอเกาะจันทร์ จังหวัดชลบุรี 20240",
    color: "bg-blue-50 text-blue-600"
  },
  { 
    icon: <Phone className="w-6 h-6" />, 
    label: "เบอร์โทรศัพท์", 
    value: "+66 (038) 209 086",
    color: "bg-orange-50 text-orange-600"
  },
  { 
    icon: <Mail className="w-6 h-6" />, 
    label: "อีเมลติดต่อ", 
    value: "bansamyeak2502@gmail.com",
    color: "bg-emerald-50 text-emerald-600"
  },
];

export default function O5Page() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in slide-in-from-bottom-4 duration-1000 ">
      
      {/* 📞 ฝั่งซ้าย (4/12): ข้อมูลการติดต่อแบบการ์ดแนวตั้ง */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-white rounded-[3rem] p-10 shadow-xl shadow-orange-900/5 border border-orange-50">
         
          <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
            ช่องทางการติดต่อ
          </h3>
          
          <div className="space-y-4">
            {contactInfo.map((item, idx) => (
              <div key={idx} className="group flex gap-5 p-6 rounded-[2rem] bg-stone-50 border border-transparent hover:border-orange-200 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                  <p className="text-gray-800 font-bold leading-relaxed">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Connect Card */}
        <div className="bg-gradient-to-br from-orange-600 to-amber-500 rounded-[3rem] p-10 text-white shadow-xl shadow-orange-200">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-white/20 rounded-2xl">
              <Share2 className="w-6 h-6" />
            </div>
            <div className="flex gap-2">
              <a href="#" className="w-12 h-12 bg-white text-orange-600 rounded-2xl flex items-center justify-center hover:bg-orange-50 transition-colors shadow-lg">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-white text-orange-600 rounded-2xl flex items-center justify-center hover:bg-orange-50 transition-colors shadow-lg">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
          <h4 className="text-2xl font-black mb-2">ติดตามเรา</h4>
          <p className="text-orange-50/80 text-sm font-medium">ไม่พลาดทุกกิจกรรมและข่าวสารสำคัญ <br/>ผ่านสื่อสังคมออนไลน์ของโรงเรียน</p>
        </div>
      </div>

      {/* 🗺️ ฝั่งขวา (7/12): แผนที่แบบโมเดิร์น */}
      <div className="lg:col-span-7 bg-white rounded-[3rem] p-4 lg:p-8 shadow-xl shadow-orange-900/5 border border-orange-50 h-full flex flex-col min-h-[300px]">
        <div className="flex justify-between items-center px-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900">แผนที่พิกัดโรงเรียน</h3>
            <p className="text-sm text-gray-400 font-medium">Google Maps Interactive</p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-orange-50 text-orange-600 rounded-xl font-bold text-xs hover:bg-orange-600 hover:text-white transition-all shadow-sm">
            <Globe className="w-4 h-4" />
            ขอเส้นทาง
          </button>
        </div>
        
        <div className="flex-grow rounded-[2.5rem] overflow-hidden border border-stone-100 relative group shadow-inner bg-stone-50">
          {/* แผนที่จริง (แทนที่ด้วย Iframe ของ Google Maps จริงๆ ของโรงเรียน) */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.4723603899415!2d101.31572857631551!3d13.383051686971452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d298af158d1fd%3A0x51710f20f04c5c9c!2sBan%20Sam%20Yaek%20School!5e0!3m2!1sen!2sth!4v1692944742258!5m2!1sen!2sth" 
            className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.1] brightness-[1.05]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
          
          {/* Overlay ตกแต่งขอบเล็กน้อย */}
          <div className="absolute inset-0 pointer-events-none border-[12px] border-white/10 rounded-[2.5rem]"></div>
        </div>
        
        <div className="mt-6 px-4 flex items-center justify-between text-[11px] font-black text-stone-400 uppercase tracking-widest">
          <span>Coordinates: 13.383052,101.318304</span>
          <span>Bansamyaek 2026</span>
        </div>
      </div>

    </section>
  );
};

