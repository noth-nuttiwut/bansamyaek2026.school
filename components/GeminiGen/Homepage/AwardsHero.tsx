"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Calendar, Info } from 'lucide-react';

export interface AwardsHeroProps {
  images: { src: string; alt: string; title: string; date: string }[];
}


const AwardsHero = ({ images }: AwardsHeroProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // สลับภาพอัตโนมัติทุก 6 วินาที
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative w-full h-[40vh] lg:h-[50vh] overflow-hidden bg-gradient-to-b from-orange-50 via-amber-300 via-amber-200 to-orange-50">
      {/* 🖼️ ภาพพื้นหลัง (Main Image) */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill={true}
            quality={60}
            referrerPolicy="no-referrer"
            className={`object-contain transition-transform duration-[6500ms] ease-out 
                  ${index === currentIndex ? "scale-100" : "scale-110"}
                  bg-black/10 object-center`}
          />

        </div>
      ))}

      {/* 📝 ส่วนเนื้อหา (Content Overlay) */}
      <div className="absolute bottom-0 left-0 w-full z-20 p-8 lg:p-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <div className="flex items-center gap-3 text-orange-400 font-black tracking-widest uppercase text-sm">
              <Calendar size={18} />
              <span>{images[currentIndex].date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 🕹️ ปุ่มลูกศร (Navigation) */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 z-30 pointer-events-none">
        <button
          onClick={prevSlide}
          className="p-4 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-white/30 transition-all pointer-events-auto"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="p-4 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-white/30 transition-all pointer-events-auto"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* 🔢 ตัวบอกตำแหน่ง (Indicators) */}
      <div className="absolute bottom-10 right-10 z-30 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentIndex 
              ? "w-12 h-3 bg-orange-500" 
              : "w-3 h-3 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default AwardsHero;