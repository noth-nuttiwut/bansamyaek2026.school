
export default function Location() {
  return (
    <div className="space-y-6 text-center lg:text-left">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <span className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">📍</span>
            ที่ตั้งโรงเรียน
        </h3>
        <div className="aspect-video rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.4723603899415!2d101.31572857631551!3d13.383051686971452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d298af158d1fd%3A0x51710f20f04c5c9c!2sBan%20Sam%20Yaek%20School!5e0!3m2!1sen!2sth!4v1692944742258!5m2!1sen!2sth" 
            className="w-full h-full border-0" allowFullScreen={false} loading="lazy"></iframe>
        </div>
    </div>
  )
}