import { sponsors } from '../../data'

export default function Sponsors() {
  return (
    <section className="py-20 bg-black" id="sponsors">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title">Sponsors</h2>
        <div className="flex flex-wrap gap-4 mt-8">
          {sponsors.map(s => (
            <div
              key={s.id}
              className="card px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-gray-300 hover:border-yellow hover:text-yellow transition-colors"
            >
              {s.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
