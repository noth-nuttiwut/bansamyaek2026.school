export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="absolute inset-0 z-10 animate-pulse bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 flex items-center justify-center">
        {/* ใส่ Icon หรือ Logo โรงเรียนจางๆ ไว้ตรงกลาง Skeleton ก็ดูพรีเมียมครับ */}
        <div className="w-12 h-12 bg-slate-300 rounded-full opacity-20"></div>
    </div>
  )
}