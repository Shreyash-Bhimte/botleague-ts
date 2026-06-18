export default function Hero() {
  return (
    <section className="relative min-h-[560px] flex items-center bg-gradient-to-br from-black via-[#1a0a00] to-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />

      {/* Glow effect */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-yellow/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <p className="section-label">India's Ultimate</p>
        <h1 className="font-display text-7xl md:text-9xl font-bold uppercase leading-none tracking-wide mt-3 mb-5">
          ROBOTICS<br />ARENA
        </h1>
        <p className="text-gray-300 text-base mb-9 max-w-md">
          Build. Compete. Rank. The National Ecosystem for Robotics Arena.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="#register" className="btn-primary">Create Account</a>
          <a href="#events"   className="btn-outline">Explore Events</a>
        </div>
      </div>
    </section>
  )
}
