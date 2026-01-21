
const script_url = "https://script.google.com/macros/s/AKfycbw_l-8oNYSl71SVg-NFae3rs5NAIemSw9CKXxJ1yiVeJWfsXrPV6oSNRmRe_OchuKQd/exec"

import { ITAGroup } from '@/types/ita';


export async function getItaData(): Promise<ITAGroup[]> {
  try {
    const res = await fetch(script_url, {
      // ตรวจสอบข้อมูลใหม่ทุก 24 ชั่วโมง เนื่องจากข้อมูลอัปเดตน้อยมาก
      next: { revalidate: 86400 }, 
      redirect: 'follow',
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    let data = await res.json();
    
    
    // ตรวจสอบว่าข้อมูลที่ได้เป็น Array หรือไม่
    if (!Array.isArray(data)) {
      console.error("API did not return an array:", data);
      return [];
    }
    
    data.push(
        {
          "folder_name": "O5",
          "files": []
        },
        {
          "folder_name": "O8",
          "files": []
        },
        {
          "folder_name": "O9",
          "files": []
        },
    )
      
    // เรียงลำดับข้อมูลตามรหัส Ox (O1, O2, O3...) เพื่อให้แสดงผลเป็นระเบียบ
    return data.sort((a, b) => {
      const numA = parseInt(a.folder_name.replace('O', ''));
      const numB = parseInt(b.folder_name.replace('O', ''));
      return numA - numB;
    });

  } catch (error) {
    console.error("Could not fetch ITA data:", error);
    return []; // คืนค่า Array ว่างหากเกิดข้อผิดพลาด เพื่อไม่ให้หน้าเว็บล่ม
  }
}