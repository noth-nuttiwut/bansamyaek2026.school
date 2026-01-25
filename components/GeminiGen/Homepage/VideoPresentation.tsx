"use client";

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';


export default function VideoPresentation() {
  return (
    <div className="space-y-6 text-center lg:text-left">
      <h3 className="text-2xl font-bold flex items-center gap-3">
        <span className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm">
          ▶
        </span>
        วิดีโอแนะนำโรงเรียน
      </h3>
      <div className="aspect-video rounded-3xl overflow-hidden shadow-xl border-4 border-white">
        <LiteYouTubeEmbed 
          id="c7u-j6fPDws" // ใส่ Video ID
          title="แนะนำโรงเรียน"
          params="autoplay=0&mute=0"
          iframeClass='"w-full h-full'
          
        />
        {/*<iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/c7u-j6fPDws"
          frameBorder="0"
          allowFullScreen={false}
        ></iframe>*/}
      </div>
    </div>
  );
}
