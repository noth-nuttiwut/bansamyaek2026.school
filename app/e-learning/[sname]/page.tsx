
import { getEmbedUrl } from '@/libs/utils';
import { getELearningData } from "@/libs/getGoogleDriveData";
import MultiVideoPlayer from "@/components/GeminiGen/Elearning/VideoPlayerCard";

export async function generateStaticParams() {
  const data = await getELearningData();
  return data.map((item) => ({
    sname : item.subject,
  }));
}

export default async function ELearningRoom({ params } : { params: { sname: string } }) {
  const { sname } = await params;

    // กรองข้อมูลวิชาที่เลือก
  const decodedSubject = decodeURIComponent(sname);
  const data = await getELearningData();
  
  if (!data) {
    return <div>ไม่พบข้อมูล</div>;
  }
  
  const subjectData = data.find(s => s.subject === decodedSubject);
  
  return (
    <>
        {subjectData ? (
          <MultiVideoPlayer subjectData={subjectData} />
        ) : (
          <div className="p-20 text-center">
            <h2 className="text-xl font-bold">ไม่พบวิชาที่ต้องการ</h2>
            <p className="text-gray-500">กรุณากลับไปเลือกวิชาใหม่อีกครั้ง</p>
          </div>
        )}
      </>
  );
  
}