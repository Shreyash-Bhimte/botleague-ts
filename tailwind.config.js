/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: { DEFAULT: '#f5c400', dim: '#c9a000' },
        dark:   { DEFAULT: '#111111', card: '#1a1a1a', border: '#2a2a2a' },
        red:    { DEFAULT: '#e03030' },
      },
      fontFamily: {
        display: ['Rajdhani', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
