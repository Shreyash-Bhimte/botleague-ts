import { journeySteps } from '../../data'

export default function UserJourney() {
  return (
    <section className="py-20 bg-black text-center">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label">User Journey</p>
        <h2 className="section-title">Your Path to the League</h2>
        <p className="text-gray-400 mt-3 mb-14">Leave sport / enjoy great sport / awesome sport</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
          {/* connector line */}
          <div className="hidden md:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-dark-border z-0" />

          {journeySteps.map(s => (
            <div key={s.step} className="relative z-10 flex flex-col items-center">
              <div className="w-[72px] h-[72px] rounded-full bg-dark-card border-2 border-yellow flex items-center justify-center text-3xl mb-5">
                {s.icon}
              </div>
              <p className="text-yellow text-xs font-semibold tracking-widest uppercase mb-1">Step {s.step}</p>
              <p className="font-display text-base font-bold uppercase tracking-wide mb-2">{s.title}</p>
              <p className="text-sm text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
