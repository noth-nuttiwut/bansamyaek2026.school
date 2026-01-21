"use client"; // ใช้ Client Component สำหรับ interactivity ของเมนูมือถือ
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/logo.png';

export default function Header(){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      {/*<div className="bg-gradient-to-r from-orange-600 to-amber-500 text-white py-2 text-xs lg:text-sm font-medium">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span>📍 40 หมู่ 5 ต.ท่าบุญมี อ.เกาะจันทร์ จ.ชลบุรี</span>
          <div className="hidden sm:flex gap-6 italic">
            <span>📞 038-209-086</span>
            <span>✉️ bansamyeak2502@gmail.com</span>
          </div>
        </div>
      </div>*/}

      {/* Main Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-amber-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center gap-4">
            <Image 
              src={Logo} 
              alt="Logo" width={48} height={48} className="object-contain" 
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900 leading-none">โรงเรียนบ้านสามแยก</h1>
              <p className="text-[10px] text-orange-600 font-bold tracking-[0.2em] uppercase mt-1">Bansamyaek School</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-semibold text-gray-600">
            <Link href="/" className="text-orange-600 border-b-2 border-orange-600">หน้าแรก</Link>
            <Link href="/staff-gallery" className="hover:text-orange-600 transition">ทำเนียบบุคคลากร</Link>
            <Link href="/ita" className="hover:text-orange-600 transition">ITA</Link>
            <Link href="/" className="hover:text-orange-600 transition">ภาพกิจกรรม</Link>
          </div>

          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full transition shadow-lg shadow-orange-200 font-bold text-sm hidden md:block">
            ติดต่อเรา
          </button>

          {/* Mobile Menu Icon */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-orange-600">
             {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-orange-100 p-6 space-y-4 font-bold text-gray-700">
            <Link href="/" className="block text-orange-600">หน้าแรก</Link>
            <Link href="/directors" className="block">คณะผู้บริหาร</Link>
            <Link href="/ita" className="block">ITA</Link>
            <Link href="/gallery" className="block text-gray-700">ภาพกิจกรรม</Link>
          </div>
        )}
      </nav>
    </>
  );
};
