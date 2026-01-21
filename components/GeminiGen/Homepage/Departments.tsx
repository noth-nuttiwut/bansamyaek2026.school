import Link from 'next/link';

const departments = [
  { title: "งานวิชาการ", desc: "พัฒนาการเรียนการสอนและหลักสูตร", icon: "📚", url: "/staffs/academic-affairs-administration" },
  { title: "งานงบประมาณ", desc: "บริหารจัดการงบประมาณอย่างโปร่งใส", icon: "💰", url: "/staffs/budget-finance-administration" },
  { title: "งานบุคคล", desc: "ส่งเสริมวิชาชีพบุคลากรสู่ความเป็นเลิศ", icon: "👥", url: "/staffs/personnel-administration" },
  { title: "งานบริหารทั่วไป", desc: "ดูแลอาคารสถานที่ให้ปลอดภัย", icon: "🏫", url: "/staffs/general-administration" },
];

export default function Departments() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <h3 className="text-4xl font-extrabold text-center mb-16 text-gray-900 tracking-tight">
        โครงสร้างการบริหารงาน
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {departments.map((dept, idx) => (
          <Link href={dept.url} key={"slink_"+idx}>
            <div key={idx} className="group bg-white p-10 rounded-[3rem] shadow-sm border border-stone-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-500 text-center">
              <div className="w-20 h-20 bg-orange-50 group-hover:bg-orange-600 rounded-3xl flex items-center justify-center mb-8 mx-auto transition-colors duration-500 text-3xl">
                {dept.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">{dept.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{dept.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

