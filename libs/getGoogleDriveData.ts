
const ita_data_script_url = "https://script.google.com/macros/s/AKfycbwIVxywlJZz-p0xFc3BSiZyKPkYob3BF7iid5vyByhiyBiGVAg2H_NUd_RE2P_ukzl6/exec"
const gallery_data_script_url = "https://script.google.com/macros/s/AKfycbwyL7-JVEWUmB49gSc1j91pjfwyhscRpuyxAANYeU73lROAdSwj5XNhhBZobKztEE5C3g/exec"
const reward_script_url = "https://script.google.com/macros/s/AKfycbzkQ9xlgbM_y2VSfy1gWKRGyWwQloxHTSJ6xV5k7u2x8hhiIhoF8cG2sLEmymQy49tsjg/exec"
const board_script_url = "https://script.google.com/macros/s/AKfycbxvCKngK5zq7RwWk4Sn-8T6CovyRZMDPRJiv5HpsNAbzeSm6p85y_4WOfu4RXK5vzRZ/exec"
const all_staff_script_url = "https://script.google.com/macros/s/AKfycbzolkeXrYA5YGFgjd9sl9sWGSdwIPn5AQWng-o-wOxlYJZ-na_0oRvBdELYOY8k7pUE/exec"
const e_learning_script_url = "https://script.google.com/macros/s/AKfycbwO97ROWokgf69L18FbWGk37-mOjuOwpPKWrERCzO8reTo2DolsIUCY1r8MnQLBeHnG/exec"

import { ITAGroup, ImageInfo, ElearningSubject } from '@/types/ita';


export async function getELearningData(): Promise<ElearningSubject[]> {
  try {
    const res = await fetch(e_learning_script_url, {
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

    return data

  } catch (error) {
    console.error("Could not fetch reward urls:", error);
    return []; // คืนค่า Array ว่างหากเกิดข้อผิดพลาด เพื่อไม่ให้หน้าเว็บล่ม
  }

}



export async function getAllStaffImages(): Promise<ITAGroup[]> {
  try {
    const res = await fetch(all_staff_script_url, {
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

    return data

  } catch (error) {
    console.error("Could not fetch reward urls:", error);
    return []; // คืนค่า Array ว่างหากเกิดข้อผิดพลาด เพื่อไม่ให้หน้าเว็บล่ม
  }

}

export async function getBoardImage(): Promise<ImageInfo[]> {
  try {
    const res = await fetch(board_script_url, {
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

    return data

  } catch (error) {
    console.error("Could not fetch reward urls:", error);
    return []; // คืนค่า Array ว่างหากเกิดข้อผิดพลาด เพื่อไม่ให้หน้าเว็บล่ม
  }

}


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