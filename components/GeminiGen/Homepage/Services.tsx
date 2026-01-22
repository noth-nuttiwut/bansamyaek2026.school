import { Facebook, Camera, Newspaper, Globe, Mail, Monitor } from 'lucide-react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/libs/siteConfig';

const services = [
  { 
    title: "FB: bansamyaek", 
    desc: "ติดตามข่าวสารผ่าน Facebook", 
    icon: <Facebook className="w-8 h-8 text-blue-600" />,
    link: SITE_CONFIG.social.facebook,
    color: "hover:border-blue-200"
  },
  { 
    title: "ภาพกิจกรรม", 
    desc: "ประมวลภาพกิจกรรมโรงเรียน", 
    icon: <Camera className="w-8 h-8 text-orange-600" />,
    link: "/gallery",
    color: "hover:border-orange-200"
  },
  { 
    title: "ข่าวสารบ้านสามแยก", 
    desc: "วารสารและข่าวประชาสัมพันธ์", 
    icon: <Newspaper className="w-8 h-8 text-emerald-600" />,
    link: "/ita/O7",
    color: "hover:border-emerald-200"
  },
];

const QuickServices = () => {
  return (
    <section className="py-20 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-extrabold text-gray-900 mb-4">บริการออนไลน์</h3>
        <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
          เข้าถึงระบบงานและข้อมูลต่างๆ ของโรงเรียนบ้านสามแยกได้อย่างรวดเร็วผ่านระบบอิเล็กทรอนิกส์
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Link 
              key={idx} 
              href={service.link}
              target="_blank"
              className={`group relative bg-white p-8 rounded-[2.5rem] border border-stone-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${service.color}`}
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-stone-50 rounded-[2rem] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-sm text-gray-400 font-medium leading-relaxed italic">
                  {service.desc}
                </p>
              </div>
              
              {/* ตกแต่งขอบด้านล่างจางๆ */}
              <div className="absolute bottom-6 right-8 text-stone-200 group-hover:text-orange-500 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickServices;