"use client";
import { useState, useMemo } from 'react';
import ItaCard from '@/components/GeminiGen/Ita/ItaCard';
import { ITA_SECTIONS, sectionItems, getItaTitle } from '@/libs/constants';

export default function ItaSearchFilter({ data }: { data: any[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    return data.filter(item => {
      const title = getItaTitle(item.folder_name);
      return item.folder_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
             title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [searchTerm, data]);

  const groupedData = useMemo(() => {
    const groups: Record<string, any[]> = {};
    Object.keys(sectionItems).forEach(key => {
      const codes = sectionItems[key].map(s => s.code);
      const matches = filteredData.filter(d => codes.includes(d.folder_name));
      if (matches.length > 0) groups[key] = matches;
    });
    return groups;
  }, [filteredData]);

  return (
    <div className="space-y-24">
      {/* Search Bar - ดีไซน์ Minimal */}
      <div className="max-w-xl mx-auto mb-20">
        <div className="relative group">
          <input 
            type="text"
            placeholder="ค้นหารหัส O หรือ ชื่อหัวข้อ..."
            className="w-full px-8 py-4 rounded-2xl bg-white border border-stone-200 shadow-sm focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all outline-none font-medium"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {Object.entries(groupedData).map(([sectionKey, items], index) => (
        <section key={sectionKey+"==="+index} className="relative">
          {/* 🛠 เส้นแบ่ง Section (จะแสดงตั้งแต่ Section ที่ 2 เป็นต้นไป) */}
          {index !== 0 && (
            <div className="absolute -top-12 left-0 w-full flex items-center gap-4 opacity-50">
              <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            </div>
          )}

          {/* Section Header ตามแบบที่คุณต้องการ */}
          <div className="flex items-center gap-6 mb-12">
            <div className={`w-16 h-16 ${getColorBySection(sectionKey)} rounded-2xl flex items-center justify-center shadow-xl shadow-orange-200/50`}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
            </div>
            <div>
              <h3 className="text-3xl font-black text-gray-900 leading-none">
                {index + 1}. {ITA_SECTIONS[sectionKey]?.title}
              </h3>
              <p className="text-orange-500 mt-2 font-bold tracking-wide flex items-center gap-2">
                <span className="w-8 h-[2px] bg-orange-200"></span>
                {ITA_SECTIONS[sectionKey]?.range}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {items.map((item) => (
              <ItaCard 
                key={item.folder_name}
                item={{
                  id: item.folder_name,
                  title: getItaTitle(item.folder_name),
                  detail: `เอกสารรวม ${item.files.length} ไฟล์`
                }}
                colorClass={getColorBySection(sectionKey)}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function getColorBySection(key: string) {
    const colors: Record<string, string> = {
        section1: 'bg-orange-500', section2: 'bg-amber-500', section3: 'bg-yellow-500',
        section4: 'bg-emerald-500', section5: 'bg-teal-500', section6: 'bg-cyan-500',
        section7: 'bg-sky-500', section8: 'bg-indigo-500', section9: 'bg-purple-500',
        section10: 'bg-pink-500', section11: 'bg-rose-500', section12: 'bg-slate-700'
    };
    return colors[key] || 'bg-orange-600';
}