import Link from 'next/link';

interface ItaCardProps {
  item: {
    id: string;
    title: string;
    detail: string;
  };
  colorClass: string;
}

const ItaCard = ({ item, colorClass }: ItaCardProps) => {
  return (
    <Link href={`/ita/${item.id}`} className="group relative block">
      <div className="ita-card relative p-10 rounded-[3rem] bg-white border border-stone-100 shadow-sm transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl hover:border-orange-100 flex flex-col h-full">
        
        {/* Badge รหัส Ox ที่มุมขวาบน */}
        <div className={`absolute -top-4 -right-4 w-14 h-14 ${colorClass} text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3`}>
          {item.id}
        </div>

        <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
          {item.title}
        </h4>
        
        <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
          {item.detail}
        </p>

        <div className="flex items-center gap-2 text-orange-600 font-bold text-xs tracking-widest uppercase">
          ดูเพิ่มเติม <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
        </div>
      </div>
    </Link>
  );
};

export default ItaCard;