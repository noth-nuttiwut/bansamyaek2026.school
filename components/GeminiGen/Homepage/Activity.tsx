import { getRewardUrls } from '@/libs/getGoogleDriveData';
// import ActivityCarousel from '@/components/GeminiGen/Homepage/ActivityCarousel';
import { transformItaToHero } from '@/libs/utils';
import ActivityHero from '@/components/GeminiGen/Homepage/ActivityHero';
import Image from 'next/image';


export default async function Activity() {
  const allData = await getRewardUrls();
  if (!allData) return <div></div>;
  
  // สมมติว่าเก็บรูปกิจกรรมไว้ในหมวด O9 (หรือหมวดที่คุณกำหนด)
  const activityGroup = allData.find(group => group.folder_name === "ผลงานของครู");
    
  // // แปลงข้อมูลก่อนส่งไปแสดงผล
  const heroImages = activityGroup ? transformItaToHero(activityGroup.files) : [];

  return (
    <main>
      {heroImages.length > 0 ? (
        <ActivityHero images={heroImages} />
      ) : (
        <div className="h-[400px] flex items-center justify-center bg-stone-100 italic text-stone-400">
          กำลังโหลดรูปภาพกิจกรรม...
        </div>
      )}
    </main>
    );
}
