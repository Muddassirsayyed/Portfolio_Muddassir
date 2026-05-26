<div align="center">

# ⚡ Muddassir Sayyed — Developer Portfolio

**AI/ML Engineer · Full Stack Developer · Open Source Contributor**

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://muddassir.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-EE0979?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![Vite](https://img.shields.io/badge/Vite-4.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)

[🌐 Live Portfolio](https://muddassir.vercel.app) · [💼 LinkedIn](https://www.linkedin.com/in/muddassir-mushtaque-163216361/) · [🐙 GitHub](https://github.com/Muddassirsayyed)

---

![Portfolio Preview](https://via.placeholder.com/1200x600/030712/06b6d4?text=Muddassir+Sayyed+Portfolio)

</div>

## 🚀 Overview

A **futuristic, cyberpunk-themed** personal developer portfolio for **Muddassir Sayyed**, built with cutting-edge web technologies. Features cinematic animations, interactive particle systems, glassmorphism UI, and neon highlights.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🖱️ **Custom Cursor** | Cyan dot + smooth ring with lerp-following |
| ✨ **Live Particles** | 120 interactive nodes with mouse repulsion & connection lines |
| 📊 **Scroll Progress** | Neon gradient progress bar |
| 🖥️ **Loading Screen** | Terminal-style boot animation |
| ⌨️ **Typing Animation** | Cycles through 5 roles smoothly |
| 🔮 **Glassmorphism** | Blur + neon borders on all cards |
| 📈 **Stats Counter** | Numbers animate on scroll into view |
| 🔵 **Skill Orbit** | 8 tech icons orbit in real-time |
| 📅 **Timeline** | Alternating left/right journey layout |
| 📱 **Responsive** | Works flawlessly on all screen sizes |

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite 4
- **Styling**: Tailwind CSS v3 + Custom CSS Design System
- **Animations**: Framer Motion v12
- **Hosting**: Vercel (Edge CDN)
- **Fonts**: Orbitron · Fira Code · Outfit

---

## 🏗️ Project Structure

```
src/
├── App.jsx                     # Root: cursor, particles, scroll progress
├── main.jsx                    # Entry point
├── index.css                   # Design system (glassmorphism, neon, cursors)
├── components/
│   ├── LoadingScreen.jsx        # Terminal boot animation
│   ├── ParticlesBackground.jsx  # Interactive canvas particles
│   └── Navbar.jsx               # Glassmorphic sticky nav
└── pages/
    ├── Hero.jsx                 # Typing animation + avatar + CTA
    ├── About.jsx                # Stats + highlight cards
    ├── Skills.jsx               # Progress bars + orbit animation
    ├── Projects.jsx             # Project cards with neon borders
    ├── Journey.jsx              # Glowing timeline
    ├── Certifications.jsx       # 3D tilt cert cards
    ├── Contact.jsx              # Glassmorphic contact form
    └── Footer.jsx               # Minimal neon footer
```

---

## ⚡ Getting Started

```bash
# Clone the repository
git clone https://github.com/Muddassirsayyed/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🚀 Deploy to Vercel

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Muddassirsayyed/portfolio)

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Option 3: Import from GitHub

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your repository
4. Settings: Framework = **Vite**, Output = `dist`, Build = `npm run build`
5. Click **Deploy**

---

## 🎨 Customization

| What to Change | File |
|---|---|
| Your email | `src/pages/Contact.jsx` |
| Resume PDF link | `src/pages/Hero.jsx` |
| Live project URLs | `src/pages/Projects.jsx` |
| Profile photo | `src/pages/Hero.jsx` |
| Certifications | `src/pages/Certifications.jsx` |
| Color theme | `tailwind.config.js` + `src/index.css` |

---

## 📄 License

MIT © [Muddassir Sayyed](https://github.com/Muddassirsayyed)

---

<div align="center">
Built with ❤️ by <strong>Muddassir Sayyed</strong> · Powered by React + Tailwind + Framer Motion
</div>
