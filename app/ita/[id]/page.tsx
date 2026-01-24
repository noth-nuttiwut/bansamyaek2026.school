import { getItaData } from '@/libs/getGoogleDriveData';
import { getItaTitle } from '@/libs/constants';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ItaDetailContent from '@/components/GeminiGen/Ita/ItaDetailContent';
import type { Metadata } from 'next';

// 1. กำหนดการสร้างหน้า Static ไว้ล่วงหน้า (SSG)
export async function generateStaticParams() {
  const data = await getItaData();
  return data.map((item) => ({
    id: item.folder_name,
  }));
}


// ฟังก์ชันสำหรับสร้าง Metadata ตามรหัส O
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = await params;
  const title = getItaTitle(id);
  
  return {
    title: `${id} ${title} | ITA โรงเรียนบ้านสามแยก อำเภอเกาะจันทร์`,
    description: `แบบตรวจการเปิดเผยข้อมูลสาธารณะ (OIT) หัวข้อ ${id} ${title} ของโรงเรียนบ้านสามแยก อำเภอเกาะจันทร์`,
    openGraph: {
      title: `${id} ${title} | ITA โรงเรียนบ้านสามแยก อำเภอเกาะจันทร์`,
      description: `แบบตรวจการเปิดเผยข้อมูลสาธารณะ (OIT) หัวข้อ ${id} ${title} ของโรงเรียนบ้านสามแยก อำเภอเกาะจันทร์`,
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
        

      </div>
    </main>
  );
}