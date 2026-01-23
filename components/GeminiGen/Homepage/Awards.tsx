import { getAwardsUrls } from '@/libs/getGoogleDriveData';
import { transformItaToHero } from '@/libs/utils';
import AwardsHero from '@/components/GeminiGen/Homepage/AwardsHero';
import Image from 'next/image';


export default async function Awards() {
  const allData = await getAwardsUrls();
  if (!allData) return <div></div>;
  
  // สมมติว่าเก็บรูปกิจกรรมไว้ในหมวด O9 (หรือหมวดที่คุณกำหนด)
  const activityGroup = allData.find(group => group.folder_name === "ผลงานของครู");
    
  // // แปลงข้อมูลก่อนส่งไปแสดงผล
  const heroImages = activityGroup ? transformItaToHero(activityGroup.files) : [];

  return (
    <main>
      {heroImages.length > 0 ? (
        <AwardsHero images={heroImages} />
      ) : (
        <div className="h-[400px] flex items-center justify-center bg-stone-100 italic text-stone-400">
          กำลังโหลดรูปภาพกิจกรรม...
        </div>
      )}
    </main>
    );
}
