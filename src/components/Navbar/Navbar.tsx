import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-dark-border">
      <div className="max-w-6xl mx-auto px-6 flex items-center gap-8 h-16">

        <a href="/" className="font-display text-xl font-bold tracking-widest flex items-center gap-1 shrink-0">
          <span className="text-yellow">BOT</span>
          <span className="text-white">LEAGUE</span>
          <span className="text-yellow text-base">⚡</span>
        </a>

        <ul className="hidden md:flex gap-7 flex-1">
          {['Events', 'Programs', 'Community', 'Raries'].map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="text-sm text-gray-400 hover:text-yellow transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex gap-3 ml-auto">
          <a href="#login"    className="btn-outline">Login</a>
          <a href="#register" className="btn-primary">Register Now</a>
        </div>

        <button
          className="md:hidden ml-auto text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 py-4 bg-dark border-b border-dark-border">
          {['Events', 'Programs', 'Community', 'Raries'].map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="text-sm text-gray-300 hover:text-yellow">
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
