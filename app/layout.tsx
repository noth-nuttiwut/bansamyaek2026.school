import './globals.css'
import type { Metadata } from 'next'
import type { Viewport } from 'next'

import Header from '@/components/GeminiGen/Header'
import Footer from '@/components/GeminiGen/Footer'

export const metadata: Metadata = {
  title: 'โรงเรียนบ้านสามแยก | Bansamyaek School',
  description: '40 หมู่ 5 ตำบล ท่าบุญมี อำเภอ เกาะจันทร์ จังหวัด ชลบุรี 20240 เขตพื้นที่การศึกษา ที่ 2',
  icons: {
    icon: '/favicon.ico',
  },
}
 
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