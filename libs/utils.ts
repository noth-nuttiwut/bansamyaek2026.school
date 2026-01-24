import { ITAFile } from '@/types/ita';


// ฟังก์ชันแปลง URL Google Drive ให้แสดงผลได้ (ใช้เทคนิค no-referrer)
export const getDisplayUrl = (url : string) => {
  const fileId = url.match(/[-\w]{25,}/);
  return fileId ? `https://lh3.googleusercontent.com/u/0/d/${fileId[0]}` : url;
};

// ฟังก์ชันช่วยจัดการ Video Embed (รองรับ YouTube & Facebook)
export const getEmbedUrl = (url : string) => {
  if (!url) return "";
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
    return `https://www.youtube.com/embed/${videoId}`;
  }
  if (url.includes("facebook.com")) {
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=0`;
  }
  return url;
};


export const cleanFileName = (fileName: string) => {
  return fileName.replace(/\.[^/.]+$/, '');
}


// ปรับปรุงใน lib/utils.ts
export const transformItaToHero = (files: ITAFile[]) => {
  
  // กรองเฉพาะไฟล์ที่เป็นรูปภาพ (png, jpg, jpeg)
  const imageFiles = files?.filter(file => 
    /\.(jpg|jpeg|png|webp|avif)$/i.test(file.file_name)
  );

  return imageFiles.map((file) => {
    // ดึงเฉพาะ ID ของไฟล์ออกมาจาก URL
    const fileId = file.url.match(/[-\w]{25,}/); 

    const directUrl = getDisplayUrl(file.url)
    
    return {
      src: directUrl,
      alt: file.file_name,
      title: file.file_name.split('.')[0], // ตัดนามสกุลไฟล์ออก
      date: "", 
    };
  });
};