"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import Image from 'next/image';
import { ITAGroup, ITAFile } from '@/types/ita';
import { getDisplayUrl } from '@/libs/utils';


export default function HeroCarousel({ data }: { data: ITAGroup[] }) {
  const [images, setImages] = useState<ITAFile[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // รวบรวมรูปภาพจากทุกโฟลเดอร์มาไว้ใน Array เดียว
        let allImages: ITAFile[] = [];
        data.forEach(folder => {
          allImages = [...allImages, ...folder.files];
        });

        // สุ่มรูป (Shuffle) และตัดมาแค่ 15 รูป
        const shuffled = allImages
          .sort(() => 0.5 - Math.random())
          .slice(0, 10);

        setImages(shuffled);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch carousel images", err);
      }
    };
    fetchImages();
  }, []);

  // Auto Play ทุกๆ 5 วินาที
  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, images]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  if (loading || images.length === 0) {
    return <div className="w-full h-[500px] md:h-[600px] bg-slate-100 animate-pulse flex items-center justify-center text-slate-400">กำลังโหลดภาพกิจกรรม...</div>;
  }

  return (
    <section className="relative w-full h-[500px] md:h-[650px] overflow-hidden bg-slate-900 border-b-8 border-orange-600">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image with Ken Burns Effect (ค่อยๆ ขยาย) */}
          <motion.div 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8 }}
            className="absolute inset-0"
          >
            <Image
              src={getDisplayUrl(images[currentIndex].url)}
              alt="Bansamyaek Activity"
              quality={80}
              fill
              className="object-cover opacity-70 object-center"
              referrerPolicy="no-referrer"
              priority
            />
          </motion.div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

          {/* Text Content */}
          <div className="absolute inset-0 z-20 flex flex-col justify-end pb-20 md:pb-32 px-8">
            <div className="max-w-7xl mx-auto w-full">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="max-w-2xl"
              >
                {/*<div className="flex items-center gap-2 text-orange-400 mb-4 bg-orange-400/10 w-fit px-4 py-1 rounded-full border border-orange-400/20 backdrop-blur-md">
                  <Camera size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">ภาพกิจกรรมล่าสุด</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 font-kanit drop-shadow-2xl">
                  {images[currentIndex].file_name.replace('.jpg', '').replace('.png', '')}
                </h2>
                <div className="h-1.5 w-24 bg-orange-600 rounded-full mb-6" />*/}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-10 bg-orange-500' : 'w-2 bg-white/30 hover:bg-white/50'}`}
          />
        ))}
      </div>

      {/* Control Buttons */}
      <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-2xl transition-all hidden md:block">
        <ChevronLeft size={28} />
      </button>
      <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-2xl transition-all hidden md:block">
        <ChevronRight size={28} />
      </button>
    </section>
  );
}