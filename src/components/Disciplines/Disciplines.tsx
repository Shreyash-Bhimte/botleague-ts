import { disciplines } from '../../data'

export default function Disciplines() {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label">Sports</p>
        <h2 className="section-title">Competition Disciplines</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-9">
          {disciplines.map(d => (
            <div
              key={d.id}
              className="relative h-40 card flex flex-col items-center justify-end p-4 overflow-hidden cursor-pointer hover:border-yellow transition-colors"
            >
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] text-5xl opacity-60">
                {d.emoji}
              </span>
              <p className="font-display text-sm font-bold uppercase tracking-wide text-center relative z-10">
                {d.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
