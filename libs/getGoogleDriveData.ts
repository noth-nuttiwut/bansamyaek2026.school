
const ita_data_script_url = "https://script.google.com/macros/s/AKfycbwIVxywlJZz-p0xFc3BSiZyKPkYob3BF7iid5vyByhiyBiGVAg2H_NUd_RE2P_ukzl6/exec"
const gallery_data_script_url = "https://script.google.com/macros/s/AKfycbwyL7-JVEWUmB49gSc1j91pjfwyhscRpuyxAANYeU73lROAdSwj5XNhhBZobKztEE5C3g/exec"
const reward_script_url = "https://script.google.com/macros/s/AKfycbzkQ9xlgbM_y2VSfy1gWKRGyWwQloxHTSJ6xV5k7u2x8hhiIhoF8cG2sLEmymQy49tsjg/exec"


import { ITAGroup, ImageInfo } from '@/types/ita';

export async function getRewardUrls(): Promise<ITAGroup[]> {
  try {
    const res = await fetch(reward_script_url, {
      // ตรวจสอบข้อมูลใหม่ทุก 24 ชั่วโมง เนื่องจากข้อมูลอัปเดตน้อยมาก
      next: { revalidate: 900 }, 
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

    // เรียงลำดับข้อมูลตามรหัส Ox (O1, O2, O3...) เพื่อให้แสดงผลเป็นระเบียบ
    return data.sort((a, b) => {
      const numA = parseInt(a.folder_name.replace('O', ''));
      const numB = parseInt(b.folder_name.replace('O', ''));
      return numA - numB;
    });

  } catch (error) {
    console.error("Could not fetch reward urls:", error);
    return []; // คืนค่า Array ว่างหากเกิดข้อผิดพลาด เพื่อไม่ให้หน้าเว็บล่ม
  }

}


export async function getGallerUrls(): Promise<ITAGroup[]> {
  try {
    const res = await fetch(gallery_data_script_url, {
      // ตรวจสอบข้อมูลใหม่ทุก 24 ชั่วโมง เนื่องจากข้อมูลอัปเดตน้อยมาก
      next: { revalidate: 900 }, 
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
export async function getItaData(): Promise<ITAGroup[]> {
  try {
    const res = await fetch(ita_data_script_url, {
      // ตรวจสอบข้อมูลใหม่ทุก 24 ชั่วโมง เนื่องจากข้อมูลอัปเดตน้อยมาก
      next: { revalidate: 900 }, 
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
        {
          "folder_name": "O18",
          "files": []
        },
        {
          "folder_name": "O28",
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