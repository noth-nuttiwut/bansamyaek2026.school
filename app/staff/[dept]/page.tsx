import { User, ShieldCheck, ArrowLeft, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { getAllStaffImages } from '@/libs/getGoogleDriveData';
import { getDisplayUrl, cleanFileName } from '@/libs/utils';
import { ITAGroup } from '@/types/ita';

const dept_en_th = {
  "academic-affairs-administration": "งานวิชาการ",
  "budget-finance-administration": "งานงบประมาณ",
  "personnel-administration": "งานบุคลากร",
  "general-administration": "งานบริหารทั่วไป"
};

export async function generateStaticParams() {
  const allData = await getAllStaffImages();
  // สร้าง params จากชื่อโฟลเดอร์ที่มีอยู่จริงใน Drive (ตัดตัวเลขข้างหน้าออกถ้ามี)
  return allData.map((item:ITAGroup) => ({
    dept: Object.keys(dept_en_th).find((key) => item.folder_name.includes(dept_en_th[key as keyof typeof dept_en_th])) || "general"
  }));
}

export default async function StaffDeptPage({ params } : { params: { dept: string } }) {
  const { dept } = await params;
  
  const targetDeptName = dept_en_th[dept as keyof typeof dept_en_th];
  
  // if (!targetDeptName) redirect("/");

  const allData = await getAllStaffImages();
  
  // ค้นหาข้อมูลกลุ่มงานที่ตรงกับ slug
  const currentDeptData = allData.find(item => item.folder_name.includes(targetDeptName));

  if (!currentDeptData) redirect("/");

  // แยกข้อมูล หัวหน้า และ ผู้ช่วย
  const head = currentDeptData.files.find(f => f.file_name.includes("หัวหน้า") || f.folder_name.includes("หัวหน้า"));
  const assistants = currentDeptData.files.filter(f => f !== head);

  return (
    <main className="min-h-screen bg-[#FDFBF7] pb-24">
      {/* 🏷️ Header Section */}
      <div className="bg-white border-b border-stone-100 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/" className="flex items-center gap-2 text-orange-600 font-bold text-sm mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            กลับหน้าแรก
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-orange-500 font-black tracking-[0.3em] uppercase text-xs mb-3">
                {dept.replace(/-/g, " ")}
              </p>
              <h1 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight font-kanit">
                {targetDeptName}
              </h1>
            </div>
            <div className="bg-orange-50 px-8 py-4 rounded-3xl border border-orange-100 flex items-center gap-3">
              <Users className="text-orange-600" />
              <div>
                <span className="text-orange-600 font-black text-3xl leading-none">
                  {currentDeptData.files.length}
                </span>
                <span className="ml-2 text-orange-400 font-bold text-sm uppercase">ท่าน</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 space-y-24">
        
        {/* 👑 Section: หัวหน้างาน (Department Head) */}
        {head && (
          <section>
            <div className="flex items-center gap-4 mb-10">
              <span className="w-12 h-[2px] bg-orange-500"></span>
              <h2 className="text-xl font-bold text-gray-400 uppercase tracking-widest font-kanit">หัวหน้ากลุ่มงาน</h2>
            </div>
            
            <div className="bg-white rounded-[2.5rem] p-8 lg:p-16 shadow-2xl shadow-orange-900/5 border border-orange-50 flex flex-col lg:flex-row gap-12 items-center transform hover:scale-[1.01] transition-transform duration-500">
              <div className="relative shrink-0">
                {/* ปรับจาก w-80 h-80 เป็นการล็อกความกว้างและใช้ aspect ratio */}
                <div className="w-64 md:w-80 aspect-[3/4] rounded-[3.5rem] overflow-hidden border-[12px] border-stone-50 shadow-inner relative bg-stone-100">
                   <Image 
                     src={getDisplayUrl(head.url)}
                     alt={head.file_name}
                     fill
                     className="object-cover object-top" // object-top ช่วยให้เน้นใบหน้า (ส่วนบนของภาพ)
                     referrerPolicy="no-referrer"
                     sizes="(max-width: 768px) 256px, 320px"
                   />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-orange-600 text-white p-5 rounded-3xl shadow-xl">
                  <ShieldCheck size={32} />
                </div>
              </div>
              
              <div className="space-y-6 text-center lg:text-left">
                <div>
                  <h3 className="text-4xl font-black text-gray-900 mb-2 font-kanit">
                    {cleanFileName(head.file_name)}
                  </h3>
                  <p className="text-xl text-orange-600 font-bold">หัวหน้า{targetDeptName}</p>
                </div>
                <p className="text-gray-500 leading-relaxed text-lg max-w-2xl italic">
                  "ปฏิบัติหน้าที่ด้วยความมุ่งมั่น เพื่อพัฒนาคุณภาพการศึกษาของโรงเรียนบ้านสามแยกอย่างยั่งยืน"
                </p>
              </div>
            </div>
          </section>
        )}

        {/* 👥 Section: ทีมงาน (Assistants) */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <span className="w-12 h-[2px] bg-emerald-500"></span>
            <h2 className="text-xl font-bold text-gray-400 uppercase tracking-widest font-kanit">บุคลากรในกลุ่มงาน</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {assistants.map((item, idx) => (
              <div key={idx} className="group bg-white p-4 rounded-[2.5rem] border border-stone-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                {/* ใช้ aspect-[3/4] เพื่อให้พอดีกับรูป 1536x2048 */}
                <div className="relative aspect-[3/4] rounded-[2rem] bg-stone-50 mb-6 overflow-hidden border-4 border-white shadow-md group-hover:shadow-orange-200/50 transition-all">
                   <Image 
                     src={getDisplayUrl(item.url)}
                     alt={item.file_name}
                     fill
                     className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                     referrerPolicy="no-referrer"
                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                   />
                </div>
                <div className="text-center pb-2">
                  <h4 className="text-lg font-bold text-gray-900 font-kanit">
                    {cleanFileName(item.file_name)}
                  </h4>
                  <p className="text-xs text-orange-500 font-bold uppercase tracking-wider mt-1">
                    {item.folder_name || 'ผู้ช่วยงาน'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}