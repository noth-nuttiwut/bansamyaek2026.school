export const ITA_SECTIONS : Record<string, { title: string; range: string }> = {
  "section1": { title: "ข้อมูลพื้นฐาน", range: "O1-O6" },
  "section2": { title: "การประชาสัมพันธ์", range: "O7" },
  "section3": { title: "การปฏิสัมพันธ์ข้อมูล", range: "O8-O10" },
  "section4": { title: "แผนดำเนินงานและงบประมาณ", range: "O11-O13" },
  "section5": { title: "การปฏิบัติงาน", range: "O14" },
  "section6": { title: "การให้บริการ", range: "O15-O18" },
  "section7": { title: "การจัดซื้อจัดจ้าง", range: "O19-O22" },
  "section8": { title: "การบริหารทรัพยากรบุคคล", range: "O23-O26" },
  "section9": { title: "การจัดการเรื่องร้องเรียน", range: "O27-O29" },
  "section10": { title: "การเปิดโอกาสให้มีส่วนร่วม", range: "O30" },
  "section11": { title: "การป้องกันการทุจริต", range: "O31-O38" },
  "section12": { title: "มาตรการส่งเสริมความโปร่งใส", range: "O39-O43" },
};

// สร้าง Map สำหรับค้นหาชื่อจาก Code (O1, O2...)
const url_name = "/ita"
export const sectionItems : Record<string, { code: string; title: string; goto: string; }[]> = {
  section1: [
    {
      code: "O1",
      title: "โครงสร้าง",
      goto: url_name+"/O1"
    },
    {
      code: "O2",
      title: "ข้อมูลผู้บริหาร",
      goto: url_name+"/O2"
    },
    {
      code: "O3",
      title: "อำนาจหน้าที่",
      goto: url_name+"/O3"
    },
    {
      code: "O4",
      title: "แผนยุทธศาสตร์ หรือแผนพัฒนาสถานศึกษา",
      goto: url_name+"/O4"
    },
    {
      code: "O5",
      title: "ข้อมูลการติดต่อ",
      goto: url_name+"/O5"
    },
    {
      code: "O6",
      title: "กฏหมายที่เกี่ยวข้อง",
      goto: url_name+"/O6"
    },
  ],
  section2: [
    {
      code: "O7",
      title: "สารบ้านสามแยก",
      goto: url_name+"/O7"
    }
  ],
  section3: [
    {
      code: "O8",
      title: "Q&A",
      goto: url_name+"/O8"
    },
    {
      code: "O9",
      title: "Social Network",
      goto: url_name+"/O9"
    },
    {
      code: "O10",
      title: "นโยบายคุ้มครองข้อมูลส่วนบุคคล",
      goto: url_name+"/O10"
    },
  ],
  section4: [
    {
      code: "O11",
      title: "แผนดำเนินงานและการใช้งบประมาณประจำปีการศึกษา",
      goto: url_name+"/O11"
    },
    {
      code: "O12",
      title: "รายงานการกำกับติดตามการดำเนินงานและการใช้งบประมาณประจำปีการศึกษา 2566",
      goto: url_name+"/O12"
    },
    {
      code: "O13",
      title: "รายงานผลการดำเนินงานประจำปีการศึกษา 2565",
      goto: url_name+"/O13"
    }
  ],
  section5: [
    {
      code: "O14",
      title: "คู่มือหรือมาตรฐานการปฏิบัติงาน",
      goto: url_name+"/O14"
    }
  ],
  section6: [
    {
      code: "O15",
      title: "คู่มือหรือมาตราฐานการให้บริการ",
      goto: url_name+"/O15"
    },
    {
      code: "O16",
      title: "ข้อมูลเชิงสถิติการให้บริการ",
      goto: url_name+"/O16"
    },
    {
      code: "O17",
      title: "รายงานผลการสำรวจความพึงพอใจการให้บริการ",
      goto: url_name+"/O17"
    },
    {
      code: "O18",
      title: "E-Service",
      goto: url_name+"/O18"
    }
  ],
  section7: [
    {
      code: "O19",
      title: "แผนการจัดซื้อจัดจ้างหรือแผนการจัดหาพัสดุ",
      goto: url_name+"/O19"
    },
    {
      code: "O20",
      title: "ประกาศต่าง ๆ เกี่ยวกับการจัดซื้อจัดจ้างหรือจัดหาพัสดุ",
      goto: url_name+"/O20"
    },
    {
      code: "O21",
      title: "สรุปผลการจัดซื้อจัดจ้างหรือจัดหาพัสดุรายเดือน",
      goto: url_name+"/O21"
    },
    {
      code: "O22",
      title: "รายงานผลการจัดซื้อจัดจ้างหรือจัดหาพัสดุประจำปี",
      goto: url_name+"/O22"
    }
  ],
  section8: [
    {
      code: "O23",
      title: "นโยบายหรือแผนการบริหารทรัพยากรบุคคล",
      goto: url_name+"/O23"
    },
    {
      code: "O24",
      title: "การดำเนินการตามนโยบายหรือแผนการบริหารทรัพยากรบุคคล",
      goto: url_name+"/O24"
    },
    {
      code: "O25",
      title: "หลักเกณฑ์การบริหารและพัฒนาทรัพยากรบุคคล",
      goto: url_name+"/O25"
    },
    {
      code: "O26",
      title: "รายงานผลการบริหารและพัฒนาทรัพยากรบุคคลประจำปี",
      goto: url_name+"/O26"
    }
  ],
  section9: [
    {
      code: "O27",
      title: "แนวปฏิบัติการจัดการเรื่องร้องเรียนการทุจริตและประพฤติมิชอบ",
      goto: url_name+"/O27"
    },
    {
      code: "O28",
      title: "ช่องทางแจ้งเรื่องร้องเรียนการทุจริตและประพฤติมิชอบ",
      goto: url_name+"/O28"
    },
    {
      code: "O29",
      title: "ข้อมูลเชิงสถิติเรื่องร้องเรียนการทุจริตและประพฤติมิชอบ",
      goto: url_name+"/O29"
    }
  ],
  section10: [
    {
      code: "O30",
      title: "การเปิดโอกาสให้เกิดการมีส่วนร่วม",
      goto: url_name+"/O30"
    }
  ],
  section11: [
    {
      code: "O31",
      title: "ประกาศเจตนารมณ์นโยบาย No Gift Policy จากการปฏิบัติหน้าที่",
      goto: url_name+"/O31"
    },
    {
      code: "O32",
      title: "การสร้างวัฒนธรรม No Gift Policy",
      goto: url_name+"/O32"
    },
    {
      code: "O33",
      title: "รายงานผลตามนโยบาย No Gift Policy",
      goto: url_name+"/O33"
    },
    {
      code: "O34",
      title: "การประเมินความเสี่ยงการทุจริตและประพฤติมิชอบ ประจำปี",
      goto: url_name+"/O34"
    },
    {
      code: "O35",
      title: "การดำเนินการเพื่อจัดการความเสี่ยงการทุจริตและประพฤติมิชอบ",
      goto: url_name+"/O35"
    },
    {
      code: "O36",
      title: "แผนปฏิบัติการป้องกันการทุจริต",
      goto: url_name+"/O36"
    },
    {
      code: "O37",
      title: "รายงานการกำกับติดตามการดำเนินการป้องกันการทุจริตประจำปี รอบ 6 เดือน",
      goto: url_name+"/O37"
    },
    {
      code: "O38",
      title: "รายงานผลการดำเนินการป้องกันการทุจริต ประจำปี",
      goto: url_name+"/O38"
    }
  ],
  section12: [
    {
      code: "O39",
      title: "ประมวลจริยธรรมสำหรับเจ้าหน้าที่ของรัฐ",
      goto: url_name+"/O39"
    },
    {
      code: "O40",
      title: "การขับเคลื่อนจริยธรรม",
      goto: url_name+"/O40"
    },
    {
      code: "O41",
      title: "การประเมินจริยธรรมเจ้าหน้าที่ของรัฐ",
      goto: url_name+"/O41"
    },
    {
      code: "O42",
      title: "มาตรการส่งเสริมคุณธรรมและความโปร่งใสภายในหน่วยงาน",
      goto: url_name+"/O42"
    },
    {
      code: "O43",
      title: "การดำเนินการตามมาตรการส่งเสริมคุณธรรมและความโปร่งใสภายในหน่วยงาน",
      goto: url_name+"/O43"
    },
  ]


}

// ฟังก์ชันช่วยดึงชื่อหัวข้อภาษาไทยจากรหัส Ox
export const getItaTitle = (code: string) => {
  for (const section in sectionItems) {
    const found = sectionItems[section].find(item => item.code === code);
    if (found) return found.title;
  }
  return "หัวข้อการประเมิน";
};