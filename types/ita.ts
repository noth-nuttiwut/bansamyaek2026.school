export interface ITAFile {
  file_name: string;
  folder_name: string; // อาจจะเป็นค่าว่างหรือชื่อโฟลเดอร์ย่อย
  url: string;
}

export interface ITAGroup {
  folder_name: string; // เช่น "O1", "O25"
  files: ITAFile[];
}