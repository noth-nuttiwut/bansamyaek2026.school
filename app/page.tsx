import Director from '@/components/GeminiGen/Homepage/Director';
import Departments from '@/components/GeminiGen/Homepage/Departments';
import Awards from '@/components/GeminiGen/Homepage/Awards';
import VideoAndLocation from '@/components/GeminiGen/Homepage/VideoAndLocation';
import Services from '@/components/GeminiGen/Homepage/Services';
import Hero from '@/components/GeminiGen/Homepage/Hero';
import ActivityCarousel from '@/components/GeminiGen/Homepage/ActivityCarousel';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFDF9]">
      <ActivityCarousel /> 
      <Hero />
      <Director />
      <Awards />
      <Departments />
      <VideoAndLocation />
      <Services />
    </main>
  );
}