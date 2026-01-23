
import { getGallerUrls } from '@/libs/getGoogleDriveData';
import GalleryComp from '@/components/GeminiGen/Gallery/GalleryComp';

export default async function GalleryPage() {
  // ข้อมูลจาก Google App Script ของคุณ
  const folderData = await getGallerUrls();
  
  if (!folderData || folderData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <>
      <GalleryComp folderData={folderData} />
    </>
  );
}