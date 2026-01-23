import Image from 'next/image';
import { getBoardImage } from "@/libs/getGoogleDriveData";
// import { GalleryComp } from "@/components/GeminiGen/gallery/GalleryComp";
import { ImageInfo } from "@/types/ita";
import { getDisplayUrl } from "@/libs/utils";

export default async function SGPage() {
  
  const image : ImageInfo[] = await getBoardImage();
  
  if (!image) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-bold">No image found</p>
      </div>
    );
  }
  
  return (
    <section className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">ทำเนียบบุคลากร</h2>
          <p className="text-orange-600 font-bold tracking-[0.2em] uppercase text-sm">Staff of Bansamyaek School</p>
          <div className="w-24 h-1.5 bg-orange-500 rounded-full mx-auto mt-6"></div>
        </div>

        {/* 📸 ส่วนแสดงภาพรวม */}
        <div className="relative group overflow-hidden rounded-[2rem] shadow-2xl border-[6px] border-white bg-white">
          <Image
            src={getDisplayUrl(image[0].url)}
            alt="All Staff"
            width={2048}
            height={1080}
            loading="lazy"
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay ตกแต่งจางๆ */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
            <p className="text-white text-2xl font-bold italic">"ร่วมแรง ร่วมใจ เพื่ออนาคตของศิษย์ บ้านสามแยก"</p>
          </div>
        </div>
      </div>
    </section>
  );
};





