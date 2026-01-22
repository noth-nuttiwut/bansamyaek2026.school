// import Hero from '@/components/GeminiGen/Homepage/Hero';
import Director from '@/components/GeminiGen/Homepage/Director';
import Departments from '@/components/GeminiGen/Homepage/Departments';
import Activities from '@/components/GeminiGen/Homepage/Activity';
import VideoAndLocation from '@/components/GeminiGen/Homepage/VideoAndLocation';
import Services from '@/components/GeminiGen/Homepage/Services';
import NewHero from '@/components/GeminiGen/Homepage/NewHero';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFDF9]">
      <Activities />
      {/*<Hero />*/}
      <NewHero />
      <Director />
      <Departments />
      <VideoAndLocation />
      <Services />
    </main>
  );
}