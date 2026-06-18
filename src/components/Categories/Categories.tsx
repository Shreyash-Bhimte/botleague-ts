import { categories } from '../../data'

export default function Categories() {
  return (
    <section className="py-20 bg-black" id="categories">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-9">
          {categories.map(cat => (
            <div
              key={cat.id}
              className="card p-6 transition-all duration-200 hover:border-yellow hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="font-display text-lg font-bold uppercase mb-1">{cat.name}</h3>
              <p className="text-yellow text-xs font-semibold mb-3">{cat.tagline}</p>
              <p className="text-gray-400 text-sm mb-4">{cat.description}</p>
              <a href="#" className="text-yellow text-xs font-semibold hover:underline">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
