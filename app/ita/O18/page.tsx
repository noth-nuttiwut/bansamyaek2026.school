import { MapPin, Phone, Mail, Facebook, Youtube, Share2, Globe } from 'lucide-react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/libs/siteConfig';


export default function O18Page() {
  return (
    <main className="min-h-[60vh] bg-[#FDFBF7]">
      <div className="max-w-5xl mx-auto px-6 mt-12">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-orange-100 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-600 text-white rounded-xl text-sm font-black mb-4 shadow-lg shadow-orange-200">
              O18
            </div>
            <h1 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
              Social Network
            </h1>
          </div>
          <Link href="/ita" className="text-orange-600 font-bold hover:underline flex items-center gap-2 whitespace-nowrap">
            ❮ กลับหน้าหลัก ITA
          </Link>
        </div>
      <section className="space-y-12 animate-in fade-in duration-700">
        <div className="bg-white rounded-[3rem] p-10 border border-orange-100 shadow-xl shadow-orange-900/5">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-20 h-20 bg-orange-600 rounded-3xl flex items-center justify-center text-white shadow-lg">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div>
              <h2 className="text-3xl font-black text-gray-900">E-Service Portal</h2>
              <p className="text-gray-500 font-medium">เข้าถึงบริการทางการศึกษาออนไลน์ได้ทุกที่ ทุกเวลา</p>
            </div>
          </div>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'AMSS++', desc: 'ระบบสนับสนุนการบริหารจัดการสำนักงานเขตพื้นที่การศึกษา', icon: '📊', color: 'bg-blue-500', url: SITE_CONFIG.social.amss},
            { title: 'E-Money', desc: 'ระบบ E-Money', icon: '📝', color: 'bg-emerald-500', url: SITE_CONFIG.social.emoney},
            { title: 'E-Learning', desc: 'ระบบการเรียนการสอนออนไลน์', icon: '📜', color: 'bg-amber-500', url: "/e-learning"},
          ].map((service, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-[2.5rem] border border-stone-100 hover:border-orange-500 hover:shadow-2xl transition-all flex items-center gap-6">
              <div className={`w-16 h-16 ${service.color} text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                {service.icon}
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{service.title}</h4>
                <p className="text-sm text-gray-500">{service.desc}</p>
              </div>
              <Link href={service.url}><div className="text-orange-600 font-black opacity-0 group-hover:opacity-100 transition-opacity">➔</div></Link>
            </div>
          ))}
        </div>
      </section>
    </div>
    </main>
  );
}
