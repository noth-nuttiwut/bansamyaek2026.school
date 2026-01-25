import { SITE_CONFIG } from '@/libs/siteConfig';

export default function Location() {
  return (
    <div className="space-y-6 text-center lg:text-left">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <span className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">📍</span>
            ที่ตั้งโรงเรียน
        </h3>
        <div className="aspect-video rounded-3xl overflow-hidden shadow-xl border-4 border-white">
        <iframe
          src={SITE_CONFIG.contact.mapUrl}
          width="600"
          height="450"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
          allowFullScreen={false}
          loading="lazy">
          </iframe>
        </div>
    </div>
  )
}