export default function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-wrap gap-16">

        <div className="font-display text-2xl font-bold tracking-widest flex items-center gap-1 flex-1">
          <span className="text-yellow">BOT</span>
          <span className="text-white">LEAGUE</span>
          <span className="text-yellow text-lg">⚡</span>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">Quick Links</p>
          <ul className="flex flex-col gap-3">
            {['Events', 'Programs', 'Community', 'Sponsors'].map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-sm text-gray-300 hover:text-yellow transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">Social Media</p>
          <div className="flex gap-4">
            {['▶', '📷', 'f', '𝕏'].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 border border-dark-border rounded-full flex items-center justify-center text-sm text-gray-300 hover:border-yellow hover:text-yellow transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

      </div>
      <div className="border-t border-dark-border px-6 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} BotLeague. All rights reserved.
      </div>
    </footer>
  )
}
