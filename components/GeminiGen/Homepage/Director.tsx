import Image from 'next/image';
import DirectorImage from '@/public/director-profile.png';
import { getAllStaffImages } from '@/libs/getGoogleDriveData';
import { getDisplayUrl, cleanFileName } from '@/libs/utils';

export default async function Director() {
  
  const allData = await getAllStaffImages();
  
  // ค้นหาข้อมูลกลุ่มงานที่ตรงกับ slug
  const directorData = allData.find(item => item.folder_name.includes("ผู้บริหาร"));
  
  if (!directorData) {
    return null;
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-orange-50/40">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-[4rem] p-10 lg:p-16 shadow-xl border border-orange-50 flex flex-col lg:flex-row items-center gap-14">
          <div className="w-64 md:w-80 aspect-[3/4] rounded-[3.5rem] overflow-hidden border-[12px] border-stone-50 shadow-inner relative bg-stone-100">
             <Image 
               src={getDisplayUrl(directorData.files[0].url)}
               alt={"ddd__"+cleanFileName(directorData.files[0].file_name)}
               fill
               className="object-cover object-top" // object-top ช่วยให้เน้นใบหน้า (ส่วนบนของภาพ)
               referrerPolicy="no-referrer"
               sizes="(max-width: 768px) 256px, 320px"
               loading="lazy"
             />
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-4xl font-bold text-gray-900 mb-3">{cleanFileName(directorData.files[0].file_name)}</h3>
            <p className="text-2xl text-orange-600 font-bold mb-8 italic">ผู้อำนวยการโรงเรียนบ้านสามแยก</p>
            <div className="relative">  
              <span className="absolute -top-10 -left-8 text-7xl text-orange-100 opacity-50 font-serif">“</span>
              <p className="text-gray-600 text-xl italic leading-relaxed relative z-10 font-medium">
                ปรัชญาของโรงเรียน คือ ปญฺญา นรนํ รตนํ ปัญญาเป็นแก้วของนรชน
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
