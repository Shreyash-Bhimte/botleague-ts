const items = [
  { num: '1.', title: 'Structured Events',  desc: 'From one-off events to a year-round competitive season.' },
  { num: '2.', title: 'Digital Identity',   desc: 'Your professional robotics legacy tracked and verified.' },
  { num: '3.', title: 'National Ranking',   desc: 'Benchmark your skills against the best engineers in India.' },
  { num: '4.', title: 'Career Pathway',     desc: 'Training leads pathways into real-world industry opportunities.' },
]

export default function AboutLeague() {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title">What is BotLeague?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {items.map(it => (
            <div key={it.num}>
              <p className="font-display text-3xl font-bold text-yellow mb-1">{it.num}</p>
              <h3 className="font-display text-xl font-bold uppercase mb-2">{it.title}</h3>
              <p className="text-gray-400 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
