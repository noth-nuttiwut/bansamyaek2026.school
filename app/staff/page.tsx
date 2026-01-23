// components/DepartmentStaff.tsx
import { User, ShieldCheck, Users } from 'lucide-react';
import { getAllStaffImages } from '@/libs/getGoogleDriveData';
const deptsInfo = [
  { 
    name: "งานวิชาการ", 
    head: "สุพัตรา ลัมวุฒิ", 
    headImage: "/images/staffs/supatra-lamvutti.jpg",
    position: "ครู คศ.1",
    assistants: [
      {
        name: "อัยรินทร์ ธันยจิตรานนท์", 
        headImage: "/images/staffs/supatra-lamvutti.jpg",
        position: "ครู คศ.1",
        
      }
    ],
    color: "bg-emerald-500", light: "bg-emerald-50 text-emerald-600"
  },
  { 
    name: "งานงบประมาณ", 
    head: "นันทกา สนิทใจรักษ์", 
    position: "ครู คศ.3",
    assistants: [
      {
        name: "อุไรวรรณ แพทย์มด", 
        headImage: "/images/staffs/supatra-lamvutti.jpg",
        position: "ครู คศ.1",
        
      }
    ],
    color: "bg-amber-500", light: "bg-amber-50 text-amber-600"
  },
  { 
    name: "งานบุคคล", 
    head: "ว่าที่ร้อยตรีหญิงอริศ รุ่งเอนก", 
    position: "ครู คศ.1",
    assistants: [
      {
        name: "นันทกา สนิทใจรักษ์", 
        headImage: "/images/staffs/supatra-lamvutti.jpg",
        position: "ครู คศ.3",
      }
    ],
    color: "bg-blue-500", light: "bg-blue-50 text-blue-600"
  },
  
  { 
    name: "งานบริหารทั่วไป", 
    head: "ปวิชญา ธิมะดี", 
    position: "พนักงานราชการ",
    assistants: [
      {
        name: "อรอนงค์ ศรีณรงค์", 
        headImage: "/images/staffs/supatra-lamvutti.jpg",
        position: "ครูผู้ช่วย",
      },
      {
        name: "สุพรรษา พุฒสูงเนิน", 
        headImage: "/images/staffs/supatra-lamvutti.jpg",
        position: "ครูอัตราจ้าง",
      },
      {
        name: "วิชัย โชคพิทักษ์สมบัติ", 
        headImage: "/images/staffs/supatra-lamvutti.jpg",
        position: "ลูกจ้างประจำ",
      } 
      
    ],
    color: "bg-indigo-500", light: "bg-indigo-50 text-indigo-600"
  },
];

export default async function DepartmentStaff() {
  
  const staffs = await getAllStaffImages();
  
  if (!staffs) {
    return <div>Loading...</div>;
  }
  
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 space-y-20">
      {deptsInfo.map((dept, idx) => (
        <div key={idx} className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          {/* Section Header */}
          <div className="flex items-center gap-5 border-b border-stone-100 pb-8">
            <div className={`w-14 h-14 ${dept.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black text-gray-900">{dept.name}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 👑 หัวหน้างาน (โดดเด่นกว่า) */}
            <div className="md:col-span-1 bg-white p-10 rounded-[3rem] shadow-xl shadow-orange-900/5 border-2 border-orange-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4">
                <span className="bg-orange-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Head</span>
              </div>
              <div className="w-32 h-32 bg-stone-100 rounded-3xl mx-auto mb-6 overflow-hidden ring-4 ring-orange-50">
                {/* ใส่ Image จริงที่นี่ */}
                <div className="w-full h-full flex items-center justify-center text-orange-200"><User size={64} /></div>
              </div>
              <h4 className="text-xl font-black text-center text-gray-900">{dept.head}</h4>
              <p className="text-center text-orange-600 font-bold text-sm mt-2">ตำแหน่ง {dept.position}</p>
              <p className="text-center text-orange-600 font-bold text-sm mt-2">หัวหน้า{dept.name}</p>
            </div>

            {/* 👥 ผู้ช่วยงาน (ขนาดเล็กลงมา) */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {dept.assistants.map((ast, aIdx) => (
                <div key={aIdx} className="bg-stone-50 p-8 rounded-[2.5rem] border border-stone-100 flex items-center gap-6 hover:bg-white hover:shadow-lg transition-all">
                  <div className={`w-16 h-16 ${dept.light} rounded-2xl flex items-center justify-center shrink-0`}>
                    <Users className="w-7 h-7" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800">{ast.name}</h5>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">ตำแหน่ง {ast.position}</p>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">ผู้ช่วยงาน{dept.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};