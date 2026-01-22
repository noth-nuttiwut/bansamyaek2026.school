// "use client";
// import { useState, useRef, useEffect, useCallback } from 'react';
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight, Activity } from 'lucide-react';

// interface ActivityCarouselProps {
//   images: { src: string; alt: string; title: string; date: string }[];
//   sectionTitle?: string;
//   sectionSubtitle?: string;
//   autoPlayInterval?: number; // ระยะเวลาหน่วง (ms) ถ้าต้องการ Auto Play
// }

// const ActivityCarousel = ({ 
//   images, 
//   sectionTitle = "ภาพกิจกรรมของนักเรียน", 
//   sectionSubtitle = "ประมวลภาพความสนุกและการเรียนรู้",
//   autoPlayInterval = 5000 // 5 วินาที
// }: ActivityCarouselProps) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

//   // 🛠 เลื่อนไปยังภาพที่ต้องการ
//   const scrollToImage = useCallback((index: number) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollTo({
//         left: scrollRef.current.clientWidth * index,
//         behavior: 'smooth',
//       });
//       setCurrentIndex(index);
//     }
//   }, []);

//   // 🛠 ปุ่มถัดไป
//   const nextSlide = useCallback(() => {
//     const nextIndex = (currentIndex + 1) % images.length;
//     scrollToImage(nextIndex);
//   }, [currentIndex, images.length, scrollToImage]);

//   // 🛠 ปุ่มย้อนกลับ
//   const prevSlide = useCallback(() => {
//     const prevIndex = (currentIndex - 1 + images.length) % images.length;
//     scrollToImage(prevIndex);
//   }, [currentIndex, images.length, scrollToImage]);

//   // 🛠 Auto Play Effect (เหมือน Screen Saver)
//   useEffect(() => {
//     if (autoPlayInterval) {
//       if (autoPlayTimer.current) {
//         clearInterval(autoPlayTimer.current);
//       }
//       autoPlayTimer.current = setInterval(nextSlide, autoPlayInterval);
//     }

//     return () => {
//       if (autoPlayTimer.current) {
//         clearInterval(autoPlayTimer.current);
//       }
//     };
//   }, [nextSlide, autoPlayInterval]);

//   // 🛠 หยุด Auto Play เมื่อมีการคลิกด้วยมือ
//   const handleUserInteraction = useCallback(() => {
//     if (autoPlayTimer.current) {
//       clearInterval(autoPlayTimer.current);
//       autoPlayTimer.current = null; // ปิด Auto Play หลังจาก User ควบคุม
//     }
//   }, []);

//   return (
//     <section className="py-20 bg-[#FDFBF7] relative group overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
//         <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 flex items-center justify-center gap-4">
//           <Activity className="w-10 h-10 text-orange-500" />
//           {sectionTitle}
//         </h2>
//         <p className="text-gray-500 font-medium">{sectionSubtitle}</p>
//         <div className="w-24 h-1.5 bg-orange-500 rounded-full mx-auto mt-6"></div>
//       </div>

//       {/* 🖼️ Carousel Container */}
//       <div 
//         ref={scrollRef}
//         className="flex overflow-x-scroll snap-x snap-mandatory scroll-hide-scrollbar gap-8 pb-4 relative px-6 md:px-12 lg:px-24"
//         onScroll={(e) => {
//           // อัปเดต currentIndex เมื่อ User เลื่อนเอง
//           const scrollLeft = e.currentTarget.scrollLeft;
//           const imageWidth = e.currentTarget.clientWidth;
//           const newIndex = Math.round(scrollLeft / imageWidth);
//           if (newIndex !== currentIndex) {
//             setCurrentIndex(newIndex);
//             handleUserInteraction(); // หยุด Auto Play
//           }
//         }}
//       >
//         {images.map((img, index) => (
//           <div 
//             key={index} 
//             className="flex-shrink-0 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-16px)] snap-center relative rounded-[3rem] overflow-hidden shadow-2xl shadow-orange-900/5 border-4 border-white group-hover:border-orange-50 transition-all duration-500 cursor-grab"
//             style={{ 
//               scrollSnapAlign: 'center', 
//               transform: `scale(${index === currentIndex ? 1.0 : 0.95})`,
//               opacity: index === currentIndex ? 1 : 0.6,
//               transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out'
//             }}
//           >
//             <Image
//               src={img.src}
//               alt={img.alt}
//               width={1000} // ขนาดที่เหมาะสมสำหรับภาพเดี่ยว
//               height={700} // ปรับ Aspect Ratio
//               className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
//             />
//             {/* Overlay ข้อมูลภาพ */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-8 flex flex-col justify-end text-white">
//               <p className="text-xs font-bold text-orange-200 uppercase tracking-widest mb-1">{img.date}</p>
//               <h3 className="text-xl font-black">{img.title}</h3>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* 💡 Navigation Buttons */}
//       <>
//         <button
//           onClick={() => { prevSlide(); handleUserInteraction(); }}
//           className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/70 p-4 rounded-full shadow-lg text-gray-800 hover:bg-white transition-all backdrop-blur-sm z-10 opacity-0 group-hover:opacity-100 duration-500 hidden md:flex items-center justify-center"
//         >
//           <ChevronLeft size={24} />
//         </button>
//         <button
//           onClick={() => { nextSlide(); handleUserInteraction(); }}
//           className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/70 p-4 rounded-full shadow-lg text-gray-800 hover:bg-white transition-all backdrop-blur-sm z-10 opacity-0 group-hover:opacity-100 duration-500 hidden md:flex items-center justify-center"
//         >
//           <ChevronRight size={24} />
//         </button>
//       </>

//       {/* 💡 Navigation Dots */}
//       <div className="flex justify-center gap-3 mt-10">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => { scrollToImage(index); handleUserInteraction(); }}
//             className={`w-3 h-3 rounded-full transition-all ${
//               index === currentIndex ? 'bg-orange-600 w-6' : 'bg-orange-200'
//             }`}
//           ></button>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ActivityCarousel;

