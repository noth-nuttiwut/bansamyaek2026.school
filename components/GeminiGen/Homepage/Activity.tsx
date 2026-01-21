import { getItaData } from '@/libs/getItaData';
import Image from 'next/image';

export default async function Activity() {
  const data = await getItaData();
  
  if (!data) {
    return <div></div>;
  }
  
  const imgFiles = data.filter(item => item.folder_name === "O7")[0].files;
  
  return (
    <section className="py-20 bg-amber-50/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">ความภูมิใจบ้านสามแยก</h3>

        <p className="text-gray-600 mb-12">
          ประมวลภาพกิจกรรมและผลงานของนักเรียน
        </p>

        <div className="slider-container shadow-2xl bg-white p-2">
          <div className="slider-wrapper" id="slider">
            
            {
              imgFiles.map((file, index) => (
                <div className="slider-item" key={index}>
                  <Image  src={file.url} className="w-full h-[400px] object-cover rounded-2xl" alt={file.file_name} width={1440} height={400}/>
                </div>
              ))
            }
           
          </div>

          {/*<button
            onClick={() => slide(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white transition shadow-lg text-amber-600"
          >
            ❮
          </button>
          
          <button
            onClick={() => slide(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white transition shadow-lg text-amber-600"
          >
            ❯
          </button>*/}
        </div>
      </div>
    </section>
  );
}
