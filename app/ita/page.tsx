import { getItaData } from '@/libs/getGoogleDriveData';
import Image from 'next/image';
import ItaSearchFilter from '@/components/GeminiGen/Ita/GetItaSearchFilter';
import ITAbanner from '@/public/Banner-ITA.jpg';

export default async function ItaPage() {
  const data = await getItaData();

  return (
    <main className="min-h-screen bg-[#FDFBF7] pb-24">
      {/* Banner ส่วนบน (เหมือนเดิม) */}
      {/*<div className="w-full bg-[#8B0000] flex justify-center mb-16">
        <Image src={ITAbanner} className="w-full max-w-[1920px] h-auto object-contain" alt="ITA Banner" width={1920} height={1080} />
      </div>*/}

      <div className="max-w-7xl mx-auto px-6 py-6">
        <header className="mb-12 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">แบบตรวจการเปิดเผยข้อมูลสาธารณะ (Open Data Integrity and Transparency Assessment: OIT)</h2>
          <div className="w-24 h-2 bg-orange-500 rounded-full mx-auto lg:mx-0"></div>
        </header>

        {/* เรียกใช้งาน Search & Filter Component */}
        <ItaSearchFilter data={data} />
      </div>
    </main>
  );
}