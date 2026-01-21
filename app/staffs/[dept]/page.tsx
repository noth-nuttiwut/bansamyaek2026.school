import { User, Mail, Phone, ShieldCheck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const deptsInfo = [
  { 
    name: "งานวิชาการ", 
    eng_name: "Academic Affairs Administration",
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
    eng_name: "Budget finance Administration",
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
    eng_name: "Human Resources Administration",
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
    eng_name: "General Administration",
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


export default async function DepartmentPage({ params }: { params: { dept: string } }) {
  const { dept } = await params;
  if (!params) {
    return <div>Invalid department</div>;
  }

  const deptNameEng = dept.replace(/-/g, " ")
  const deptDetails = deptsInfo.filter((dept) => dept.eng_name.toLowerCase() === deptNameEng.toLowerCase())[0];
  
  if (!deptDetails) {
    redirect("/");
  }
  return (
    <main className="min-h-screen bg-[#FDFBF7] pb-24">
      {/* 🏷️ Header ส่วนบน */}
      <div className="bg-white border-b border-stone-100 py-16 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/" className="flex items-center gap-2 text-orange-600 font-bold text-sm mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            กลับหน้าทำเนียบบุคลากร
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-orange-500 font-black tracking-[0.3em] uppercase text-xs mb-3">
                {deptDetails.eng_name}
              </p>
              <h1 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight">
                {deptDetails.name}
              </h1>
            </div>
            <div className="bg-orange-50 px-6 py-3 rounded-2xl border border-orange-100">
              <span className="text-orange-600 font-black text-2xl">{deptDetails.assistants.length + 1}</span>
              <span className="ml-2 text-orange-400 font-bold text-sm uppercase">ท่าน</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 space-y-24">
        
        {/* 👑 Section: หัวหน้างาน (Department Head) */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <span className="w-12 h-[2px] bg-orange-500"></span>
            <h2 className="text-xl font-black text-gray-400 uppercase tracking-widest">หัวหน้า {deptDetails.name} </h2>
          </div>
          
          <div className="bg-white rounded-[3.5rem] p-8 lg:p-16 shadow-2xl shadow-orange-900/5 border border-orange-50 flex flex-col lg:flex-row gap-12 items-center">
            {/* รูปภาพหัวหน้างาน */}
            <div className="relative shrink-0">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-[3rem] overflow-hidden border-[10px] border-stone-50 shadow-inner">
                 <div className="w-full h-full bg-stone-100 flex items-center justify-center text-stone-300">
                    <User size={120} />
                 </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-orange-600 text-white p-5 rounded-3xl shadow-xl">
                <ShieldCheck size={32} />
              </div>
            </div>
            
            {/* ข้อมูลหัวหน้างาน */}
            <div className="space-y-6 text-center lg:text-left">
              <div>
                <h3 className="text-4xl font-black text-gray-900 mb-2"> {deptDetails.head}</h3>
                <p className="text-xl text-orange-600 font-bold italic">{deptDetails.position} / หัวหน้า{deptDetails.name }</p>
              </div>
              <p className="text-gray-500 leading-relaxed text-lg max-w-2xl">
                "มุ่งมั่นพัฒนาการเรียนการสอนสู่อนาคต เพื่อสร้างศิษย์โรงเรียนบ้านสามแยกให้เป็นคนดี คนเก่ง และมีความสุขในสังคมดิจิทัล"
              </p>
              {/*<div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-2xl font-bold hover:bg-orange-600 transition-colors">
                  <Mail size={18} /> ติดต่ออีเมล
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-stone-100 text-gray-700 rounded-2xl font-bold hover:border-orange-500 transition-all">
                  <Phone size={18} /> 038-209-xxx
                </button>
              </div>*/}
            </div>
          </div>
        </section>

        {/* 👥 Section: ทีมงาน (The Team) */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <span className="w-12 h-[2px] bg-emerald-500"></span>
            <h2 className="text-xl font-black text-gray-400 uppercase tracking-widest">ผู้ช่วย {deptDetails.name}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {deptDetails.assistants.map((item, itemIndex) => (
              <div key={itemIndex+"assist"+deptNameEng} className="group bg-white p-8 rounded-[3rem] border border-stone-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-32 h-32 rounded-[2rem] bg-stone-50 mx-auto mb-6 overflow-hidden border-4 border-white shadow-sm group-hover:scale-105 transition-transform">
                   <div className="w-full h-full flex items-center justify-center text-stone-200">
                      <User size={48} />
                   </div>
                </div>
                <div className="text-center space-y-1">
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{item.name}</h4>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-tighter">{item.position}</p>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-tighter">ผู้ช่วย{deptDetails.name}</p>
                </div>
                {/*<div className="mt-8 pt-6 border-t border-stone-50 flex justify-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 hover:bg-orange-600 hover:text-white transition-all cursor-pointer">
                      <Mail size={16} />
                   </div>
                   <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 hover:bg-orange-600 hover:text-white transition-all cursor-pointer">
                      <Phone size={16} />
                   </div>
                </div>*/}
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}