
import { getGalleryUrls } from '@/libs/getGoogleDriveData';
import GalleryViewer from '@/components/GeminiGen/GalleryPage/GalleryViewer';

export default async function GalleryPage() {
  const folderData = await getGalleryUrls();
  
  if (!folderData || folderData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <>
      <GalleryViewer folderData={folderData} />
    </>
  );
}