import { getAwardsUrls } from '@/libs/getGoogleDriveData';
import { transformItaToHero } from '@/libs/utils';
import AwardsHero from '@/components/GeminiGen/Homepage/AwardsHero';
import Image from 'next/image';
import { ITAFile } from '@/types/ita';

export default async function Awards() {
  const allData = await getAwardsUrls();
  if (!allData) return <div></div>;
  
  // const activityGroup = allData.find(group => group.folder_name === "ผลงานของครู");
  // 
  
  let allImages: ITAFile[] = [];
  allData.forEach(folder => {
    allImages = [...allImages, ...folder.files];
  });
  
  const heroImages = allData ? transformItaToHero(allImages) : [];

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
