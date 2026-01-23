
import { getEmbedUrl } from '@/libs/utils';
import { getELearningData } from "@/libs/getGoogleDriveData";
import MultiVideoPlayer from "@/components/GeminiGen/Elearning/VideoPlayerCard";
import { Metadata } from 'next';
import type { Viewport } from 'next'


export const viewport : Viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({ params }: { params: { subject: string } }): Promise<Metadata> {
  const { subject } = await params;
  const subjectName = decodeURIComponent(subject);

  return {
    title: `บทเรียนออนไลน์วิชา ${subjectName} | โรงเรียนบ้านสามแยก`,
    description: `คลังสื่อการสอนและบทเรียนออนไลน์วิชา ${subjectName} สำหรับนักเรียนโรงเรียนบ้านสามแยก เรียนรู้ได้ทุกที่ทุกเวลา`,
    openGraph: {
      title: `เรียนออนไลน์: ${subjectName}`,
      description: `เข้าชมวิดีโอการสอนวิชา ${subjectName} จากคุณครูโรงเรียนบ้านสามแยก`,
      type: 'video.movie',
    },
  };
}

export async function generateStaticParams() {
  const data = await getELearningData();
  return data.map((item) => ({
    subject : item.subject,
  }));
}

export default async function ELearningRoom({ params } : { params: { subject: string } }) {
  const { subject } = await params;

    // กรองข้อมูลวิชาที่เลือก
  const decodedSubject = decodeURIComponent(subject);
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