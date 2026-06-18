import { liveEvent, upcomingEvents, pastResults } from '../../data/events'

export default function Competitions() {
  return (
    <section className="py-20 bg-dark" id="events">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label">Competitions & Events</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

          {/* LIVE */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide">Live Now</h3>
              <span className="bg-red text-white text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded">LIVE</span>
            </div>
            <div className="card p-4">
              <p className="font-semibold text-yellow mb-3">{liveEvent.name}</p>
              {liveEvent.bracket.map((match, i) => (
                <div key={i} className="flex items-center gap-2 text-sm py-2 border-b border-dark-border last:border-0">
                  <span className={match.winner === match.team1 ? 'text-yellow font-semibold' : 'text-gray-300'}>{match.team1}</span>
                  <span className="text-gray-500 text-xs">vs</span>
                  <span className={match.winner === match.team2 ? 'text-yellow font-semibold' : 'text-gray-300'}>{match.team2}</span>
                </div>
              ))}
            </div>
          </div>

          {/* UPCOMING */}
          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide mb-4">Upcoming</h3>
            <div className="flex flex-col gap-3">
              {upcomingEvents.map(ev => (
                <div key={ev.id} className="card p-4">
                  <p className="font-semibold mb-2">{ev.name}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                    <span>📅 {ev.date}</span>
                    <span>📍 {ev.location}</span>
                    <span className="bg-dark-border text-gray-300 px-2 py-0.5 rounded">{ev.category}</span>
                  </div>
                </div>
              ))}
            </div>
            <a href="#register" className="btn-primary mt-4 inline-block">Register</a>
          </div>

          {/* PAST */}
          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide mb-4">Past Results</h3>
            <div className="flex flex-col gap-3">
              {pastResults.map(r => (
                <div key={r.id} className="py-3 border-b border-dark-border">
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-sm text-gray-400 mt-1">{r.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
