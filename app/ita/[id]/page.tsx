import { getItaData } from '@/libs/getGoogleDriveData';
import { getItaTitle } from '@/libs/constants';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ItaDetailContent from '@/components/GeminiGen/Ita/ItaDetailContent';

// 1. กำหนดการสร้างหน้า Static ไว้ล่วงหน้า (SSG)
export async function generateStaticParams() {
  const data = await getItaData();
  return data.map((item) => ({
    id: item.folder_name,
  }));
}

import { Metadata } from 'next';

// ฟังก์ชันสำหรับสร้าง Metadata ตามรหัส O
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = await params;
  const title = getItaTitle(id);
  
  return {
    title: `${id} ${title} | ITA โรงเรียนบ้านสามแยก เกาะจันทร์`,
    description: `แบบตรวจการเปิดเผยข้อมูลสาธารณะ (OIT) หัวข้อ ${id} ${title} ของโรงเรียนบ้านสามแยก เกาะจันทร์`,
    openGraph: {
      title: `${id} ${title} | ITA โรงเรียนบ้านสามแยก เกาะจันทร์`,
      description: `แบบตรวจการเปิดเผยข้อมูลสาธารณะ (OIT) หัวข้อ ${id} ${title} ของโรงเรียนบ้านสามแยก`,
      images: [`@/public/ITABanner/B-${id}.jpg`], // ใช้ภาพ Banner ของแต่ละข้อเป็นรูป Preview เวลาแชร์
    },
  };
}


export default async function ItaDetailPage({ params }: { params: { id: string } }) {

  const { id } = await params;

      
  const allData = await getItaData();
  
  // ค้นหาข้อมูลกลุ่มที่ตรงกับรหัส Ox
  const group = allData.find((item) => item.folder_name === id);
  

  if (!group) {
    notFound();
  }

  // 🛠 ตรรกะการจัดกลุ่มไฟล์ตาม folder_name ย่อยภายใน Ox นั้นๆ
  const filesBySubGroup = group.files.reduce((acc, file) => {
    const subGroupName = file.folder_name || "เอกสารเผยแพร่";
    if (!acc[subGroupName]) acc[subGroupName] = [];
    acc[subGroupName].push(file);
    return acc;
  }, {} as Record<string, any[]>);

  const title = getItaTitle(id);

  return (
    <main className="min-h-[80vh] bg-[#FDFBF7] pb-16">
      {/* 🚩 Banner ส่วนหัวแบบ Full Width */}
      {/*<div className="w-full bg-[#8B0000] flex justify-center overflow-hidden shadow-lg">
        <img 
          src={`https://bansamyeak-school.vercel.app/_next/image?url=%2FITABanner%2FB-${id}.jpg&w=3840&q=75`}
          className="w-full max-w-[1920px] h-auto object-contain"
          alt={`${id} Banner`}
        />
      </div>*/}

      <div className="max-w-5xl mx-auto px-6 mt-12">
        {/* ส่วน Header ของเนื้อหา */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-orange-100 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-600 text-white rounded-xl text-sm font-black mb-4 shadow-lg shadow-orange-200">
              {id}
            </div>
            <h1 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
              {title}
            </h1>
          </div>
          <Link href="/ita" className="text-orange-600 font-bold hover:underline flex items-center gap-2 whitespace-nowrap">
            ❮ กลับหน้าหลัก ITA
          </Link>
        </div>

        
        
        <ItaDetailContent group={group} />
        
        {/*  📄 แสดงผลไฟล์ตามกลุ่มย่อย (Sub-groups) 
         <div className="space-y-16">
          {Object.entries(filesBySubGroup).map(([subName, files], idx) => (
            <section key={idx} className="space-y-8">
              // ชื่อกลุ่มย่อย (ถ้ามีหลายกลุ่ม) 
              {Object.keys(filesBySubGroup).length > 1 && (
                <div className="flex items-center gap-3">
                  <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
                  <h3 className="text-xl font-bold text-gray-800">{subName}</h3>
                </div>
              )}

              <div className="grid grid-cols-1 gap-10">
                {files.map((file, fIdx) => (
                  <div key={fIdx+99844} className="bg-white rounded-[2.5rem] p-6 lg:p-10 shadow-xl shadow-orange-900/5 border border-stone-100 group">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                      <h4 className="text-lg font-bold text-gray-800 flex items-center gap-3">
                        <span className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all font-black text-xs">
                          PDF
                        </span>
                        {file.file_name}
                      </h4>
                      <a 
                        href={file.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs font-black text-orange-600 border-2 border-orange-100 px-4 py-2 rounded-xl hover:bg-orange-600 hover:text-white transition-all uppercase tracking-widest"
                      >
                        เปิดใน Google Drive ↗
                      </a>
                    </div>

                    // PDF Previewer 
                    <div className="relative w-full pt-[141.42%] rounded-[2rem] overflow-hidden border border-stone-200 bg-stone-50 shadow-inner">
                      <iframe 
                        src={file.url.replace('/view', '/preview')} 
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        allow="autoplay"
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div> 
            </section>
          ))}
        </div> */ }
        
        
        
        
      </div>
    </main>
  );
}