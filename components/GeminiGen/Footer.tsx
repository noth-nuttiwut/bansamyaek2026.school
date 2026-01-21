import Link from 'next/link';

export default function Footer(){
  return (
    <footer className="bg-gray-950 text-gray-400 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-16">
        <div className="md:col-span-2">
          <h4 className="text-white font-black text-3xl mb-6">โรงเรียนบ้านสามแยก</h4>
          <p className="text-lg leading-relaxed mb-8 max-w-sm">
            จัดการศึกษาอย่างมีคุณภาพ พัฒนาผู้เรียนตามมาตรฐานสากล บนพื้นฐานความเป็นไทย
          </p>
          <div className="flex gap-4">
            <Link href="https://www.facebook.com/bansamyaek.school" target="_blank"><div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-600 transition cursor-pointer">FB</div></Link>
            <Link href="https://www.youtube.com/@SamyarkSchool" target="_blank"><div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-600 transition cursor-pointer">YT</div></Link>
          </div>
        </div>
        <div>
            <h4 className="text-white font-bold mb-8 uppercase text-orange-500">ติดต่อสอบถาม</h4>
            <ul className="space-y-4 text-sm">
                <li>📞 038-209-086</li>
                <li>✉️ bansamyaek2502@gmail.com</li>
                <li>📍 อ.เกาะจันทร์ จ.ชลบุรี</li>
            </ul>
        </div>
        <div>
            <h4 className="text-white font-bold mb-8 uppercase text-orange-500"> E-Service </h4>
            <ul className="space-y-4 text-sm">
                <li><Link target="_blank" href="https://www.chon2.go.th/news/" className="hover:text-orange-500 transition">สำนักงานเขตพื้นที่การศึกษาประถมศึกษา ชลบุรี เขต 2</Link></li>
                <li><Link target="_blank" href="https://amss.chon2.go.th/" className="hover:text-orange-500 transition">AMSS++</Link></li>
                <li><Link target="_blank" href="https://chon2.ksom2.net/money/index_desktop.php" className="hover:text-orange-500 transition">E-Money</Link></li>
            </ul>
        </div>
      </div>
      <p className="text-center pt-10 text-xs font-light tracking-widest">
        © 2026 BANSAMYAEK SCHOOL. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
};
