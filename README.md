# ⚡ BotLeague — India's Ultimate Robotics Arena

A frontend web application for **BotLeague**, India's national ecosystem for competitive robotics. Built as a Full Stack Developer Intern assignment for **Botmakers Pvt Ltd**.

🌐 **Live Site:** [botleague-rho.vercel.app](https://botleague-rho.vercel.app)  
🔗 **Backend API:** [botleague-server.onrender.com](https://botleague-server.onrender.com/docs)

---

## 📌 Project Overview

BotLeague is a platform where robotics teams across India can:
- View and register for competitive robotics events
- Track live competition brackets and past results
- Explore competition disciplines (Robo Race, Robo War, FPV Drone, etc.)
- Sign up as a Judge, Volunteer, or Community Member
- Track national rankings via a leaderboard

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI library |
| TypeScript | Type safety across all components and data |
| Tailwind CSS | Utility-first styling |
| Vite | Build tool and dev server |

---

## 📁 Project Structure

```
botleague-ts/
│
├── src/
│   ├── components/               # One folder per section
│   │   ├── Navbar/Navbar.tsx
│   │   ├── Hero/Hero.tsx
│   │   ├── Competitions/Competitions.tsx
│   │   ├── UserJourney/UserJourney.tsx
│   │   ├── AboutLeague/AboutLeague.tsx
│   │   ├── Categories/Categories.tsx
│   │   ├── Disciplines/Disciplines.tsx
│   │   ├── Advantages/Advantages.tsx
│   │   ├── Ecosystem/Ecosystem.tsx
│   │   ├── Sponsors/Sponsors.tsx
│   │   └── Footer/Footer.tsx
│   │
│   ├── data/                     # Typed static data
│   │   ├── index.ts              # categories, disciplines, journey, advantages, sponsors
│   │   └── events.ts             # live event, upcoming events, past results
│   │
│   ├── types/
│   │   └── index.ts              # All TypeScript interfaces and types
│   │
│   ├── pages/
│   │   └── Home.tsx              # Composes all sections
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                 # Tailwind directives + global component classes
│
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json
```

---

## 🎨 Frontend Sections

| Section | Description |
|---|---|
| **Navbar** | Sticky nav with logo, links, Login and Register buttons. Responsive hamburger on mobile |
| **Hero** | Full-width banner with headline, subtext, and CTA buttons |
| **Competitions & Events** | Three-column layout — Live bracket, Upcoming events, Past results |
| **User Journey** | 4-step visual path — Build Team → Compete → Earn Ranking → Join League |
| **What is BotLeague?** | 4-point explainer — Structured Events, Digital Identity, National Ranking, Career Pathway |
| **Categories** | 4 category cards — Mini Makers, Junior Innovators, Young Engineers, Robo Minds |
| **Competition Disciplines** | Grid of 6 sport cards — Robo Race, Line Follower, RC Racing, FPV Drone, Robo Hockey, Robo War |
| **The League Advantage** | 4 advantages with a live Leaderboard card |
| **Join the Ecosystem** | 3 signup forms — Judge, Volunteer, Community Member — connected to live backend |
| **Sponsors** | Sponsor logo strip |
| **Footer** | Quick links + social media icons |

---

## 🔌 Backend Integration

The Ecosystem signup forms are connected to a live REST API:

- **API:** [botleague-server.onrender.com](https://botleague-server.onrender.com/docs)
- **Built with:** FastAPI + MongoDB Atlas
- **Endpoint used:** `POST /ecosystem/register`

Form submissions (Judge, Volunteer, Member) are saved directly to MongoDB Atlas in real time.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+

### Setup

```bash
# Clone the repository
git clone https://github.com/your-username/botleague-ts.git
cd botleague-ts

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build for production

```bash
npm run build
```

---

## 🌍 Deployment

- **Frontend:** Deployed on [Vercel](https://vercel.com) — auto-deploys on every push to `main`
- **Backend:** Deployed on [Render](https://render.com)
- **Database:** MongoDB Atlas (AWS Mumbai)

---

## 📈 Status

| Feature | Status |
|---|---|
| Frontend UI (all sections) | ✅ Complete |
| TypeScript throughout | ✅ Complete |
| Tailwind CSS styling | ✅ Complete |
| Responsive (mobile + tablet + desktop) | ✅ Complete |
| Deployed on Vercel | ✅ Live |
| Ecosystem forms → Backend API | ✅ Connected |

---

## 👨‍💻 Author

**Shreyash Bhimte**  
Full Stack Developer Intern Assignment — Botmakers Pvt Ltd