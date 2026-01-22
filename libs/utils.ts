import { ITAFile } from '@/types/ita';

/**
 * แปลงข้อมูลจาก ITAFile ให้เป็นรูปแบบที่ ActivityHero ต้องการ
 * พร้อมจัดการ URL ของ Google Drive ให้แสดงผลเป็นรูปภาพได้
 */
// export const transformItaToHero = (files: ITAFile[]) => {
//   return files.map((file) => {
//     // แปลง Google Drive Link จาก /view เป็น /uc เพื่อให้ดึงไฟล์ภาพมาแสดงได้โดยตรง
//     const directUrl = file.url
//       .replace('/file/d/', '/uc?id=')
//       .replace('/view?usp=sharing', '')
//       .replace('/view', '');

//     return {
//       src: directUrl,
//       alt: file.file_name,
//       title: file.file_name.replace('.jpg', '').replace('.png', ''), // ตัดนามสกุลไฟล์ออกเพื่อความสวยงาม
//       date: "กิจกรรมโรงเรียนบ้านสามแยก", // หรือจะดึงจาก folder_name ถ้ามีระบุวันที่
//     };
//   });
// };

// ปรับปรุงใน lib/utils.ts
export const transformItaToHero = (files: ITAFile[]) => {
  // กรองเฉพาะไฟล์ที่เป็นรูปภาพ (png, jpg, jpeg)
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png|webp|avif)$/i.test(file.file_name)
  );

  return imageFiles.map((file) => {
    // ดึงเฉพาะ ID ของไฟล์ออกมาจาก URL
    const fileId = file.url.match(/[-\w]{25,}/); 
    
    // ใช้ URL รูปแบบที่เสถียรที่สุดสำหรับ Google Drive
    // const directUrl = fileId ? `https://drive.google.com/uc?export=view&id=${fileId[0]}` : file.url;
    // 
    const directUrl = fileId ? `https://lh3.googleusercontent.com/u/0/d/${fileId[0]}` : file.url;
    
    return {
      src: directUrl,
      alt: file.file_name,
      title: file.file_name.split('.')[0], // ตัดนามสกุลไฟล์ออก
      date: "ภาพกิจกรรม", 
    };
  });
};