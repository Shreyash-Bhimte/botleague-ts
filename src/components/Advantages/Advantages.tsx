import { advantages } from '../../data'

const leaderboard = [
  { rank: 1, name: 'Player Name', pts: 600000 },
  { rank: 2, name: 'Player Name', pts: 560000 },
  { rank: 3, name: 'Player Name', pts: 520000 },
  { rank: 4, name: 'Player Name', pts: 480000 },
  { rank: 5, name: 'Player Name', pts: 440000 },
]

export default function Advantages() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 items-start">

        <div>
          <p className="section-label">Why Register?</p>
          <h2 className="section-title">The League Advantage</h2>
          <div className="flex flex-col gap-6 mt-8">
            {advantages.map(a => (
              <div key={a.id} className="flex items-start gap-4">
                <span className="text-2xl mt-0.5 shrink-0">{a.icon}</span>
                <div>
                  <h4 className="font-display text-lg font-bold uppercase mb-1">{a.title}</h4>
                  <p className="text-sm text-gray-400">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6 lg:sticky lg:top-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">Leaderboard</p>
          <p className="font-display text-5xl font-bold text-yellow mb-5">508754</p>
          <div className="flex flex-col gap-3">
            {leaderboard.map(row => (
              <div key={row.rank} className="flex items-center gap-3 text-sm">
                <span className="text-yellow font-bold w-7">#{row.rank}</span>
                <span className="flex-1">{row.name}</span>
                <span className="text-gray-400 text-xs">{row.pts.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
