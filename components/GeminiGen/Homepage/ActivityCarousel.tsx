  import HeroCarousel from '@/components/GeminiGen/Homepage/HeroCarousel';
  import { ITAGroup } from '@/types/ita';
  import { getGalleryUrls } from '@/libs/getGoogleDriveData';
  
  export default async function ActivityCarousel() {
    const data: ITAGroup[] = await getGalleryUrls();
    
    if (!data) {
      return <div className="flex items-center justify-center h-full">Loading...</div>;
    } 
    
    return (
      <HeroCarousel data={data} />
    )
  
  }