import './globals.css'
import type { Metadata } from 'next'
import type { Viewport } from 'next'

import Header from '@/components/GeminiGen/Header'
import Footer from '@/components/GeminiGen/Footer'


export const metadata: Metadata = {
  title: {
    default: "โรงเรียนบ้านสามแยก | Bansamyaek School",
    template: "%s | โรงเรียนบ้านสามแยก"
  },
  description: "โรงเรียนบ้านสามแยก จัดการศึกษาอย่างมีคุณภาพ พัฒนาผู้เรียนตามมาตรฐานสากล บนพื้นฐานความเป็นไทย จ.ชลบุรี",
  keywords: ["โรงเรียนบ้านสามแยก", "Bansamyaek School", "โรงเรียนชลบุรี", "การศึกษาออนไลน์"],
  authors: [{ name: "Bansamyaek School" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://bansamyaek2026-school.vercel.app/",
    siteName: "โรงเรียนบ้านสามแยก",
    images: [
      {
        url: "/logo.png", // แนะนำให้สร้างรูปขนาด 1200x630 เป็นรูปหน้าโรงเรียนสวยๆ ไว้ที่นี่ครับ
        width: 1200,
        height: 630,
        alt: "โรงเรียนบ้านสามแยก",
      },
    ],
  },
};
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className="text-gray-800">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}