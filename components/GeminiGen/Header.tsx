"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // เพิ่มตัวนี้เข้ามา
import Logo from '@/public/logo.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // ดึง path ปัจจุบัน เช่น "/" หรือ "/ita"

  // ฟังก์ชันช่วยเช็คว่า link นั้น active หรือไม่
  const isActive = (path : string) => pathname === path;

  // สไตล์พื้นฐานของ Link
  const navItemStyle = (path : string) => 
    `transition font-semibold ${
      isActive(path) 
        ? "text-orange-600 border-b-2 border-orange-600" 
        : "text-gray-600 hover:text-orange-600"
    }`;

  const mobileItemStyle = (path : string) =>
    `block font-bold transition ${
      isActive(path) ? "text-orange-600" : "text-gray-700"
    }`;

  const menuItems = [
    { name: 'หน้าแรก', href: '/' },
    { name: 'ทำเนียบบุคคลากร', href: '/staff-gallery' },
    { name: 'ITA', href: '/ita' },
    { name: 'ภาพกิจกรรม', href: '/gallery' }, // แก้ไข path ให้ตรงกับโครงสร้างคุณ
  ];

  return (
    <>
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
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className={navItemStyle(item.href)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/*<button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full transition shadow-lg shadow-orange-200 font-bold text-sm hidden md:block">
            ติดต่อเรา
          </button>*/}

          {/* Mobile Menu Icon */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-orange-600 text-2xl">
             {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-orange-100 p-6 space-y-4 shadow-inner">
            {menuItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                onClick={() => setIsOpen(false)} // ปิดเมนูเมื่อคลิก
                className={mobileItemStyle(item.href)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full bg-orange-600 text-white py-3 rounded-xl font-bold">
              ติดต่อเรา
            </button>
          </div>
        )}
      </nav>
    </>
  );
}