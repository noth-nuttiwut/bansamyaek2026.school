import './globals.css'
import type { Metadata } from 'next'
import type { Viewport } from 'next'
import { Sarabun } from 'next/font/google'

import Header from '@/components/GeminiGen/Header'
import Footer from '@/components/GeminiGen/Footer'

const sarabun = Sarabun({
  subsets: ['thai'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic', ],
  variable: '--font-sarabun',
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: {
    default: "โรงเรียนบ้านสามแยก อำเภอเกาะจันทร์ | Bansamyaek School",
    template: "%s | โรงเรียนบ้านสามแยก อำเภอเกาะจันทร์"
  },
  description: "โรงเรียนบ้านสามแยก อำเภอเกาะจันทร์ จ.ชลบุรี ขับเคลื่อนด้วยนวัตกรรม ทำโรงเรียนให้เหมือนบ้าน ประสานสัมพันธ์ชุมชน ยกระดับผลการเรียนรู้ สู่ทักษะในอนาคต",
  keywords: ["โรงเรียนบ้านสามแยก อำเภอเกาะจันทร์์", "Bansamyaek School", "โรงเรียนชลบุรี", "การศึกษาออนไลน์"],
  authors: [{ name: "Bansamyaek School" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://bansamyaek2026-school.vercel.app/",
    siteName: "โรงเรียนบ้านสามแยก อำเภอเกาะจันทร์",
    images: [
      {
        url: "/logo.png", 
        width: 1200,
        height: 630,
        alt: "โรงเรียนบ้านสามแยก อำเภอเกาะจันทร์",
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
      <body className="text-gray-800" style={{ fontFamily: sarabun.style.fontFamily }}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}