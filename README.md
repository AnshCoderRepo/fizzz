# ITZFIZZ — Scroll-Driven Hero Animation (React)

A scroll-driven hero section animation built with React + Vite + GSAP.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Fixed top navigation
│   ├── HeroSection.jsx   # Hero with headline, stats, car visual
│   ├── ScrollSection.jsx # 300vh scroll-driven animation section
│   ├── AboutSection.jsx  # Features / about section
│   └── CarSVG.jsx        # Inline SVG sports car component
├── hooks/
│   └── useAnimations.js  # All GSAP logic (intro + scroll timelines)
├── styles/
│   └── globals.css       # All CSS variables and styles
├── App.jsx               # Root component
└── main.jsx              # React entry point
```

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Add `base` to `vite.config.js`:
   ```js
   export default defineConfig({ base: '/your-repo-name/', plugins: [react()] })
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
4. Run: `npm run deploy`

## Tech Stack

- **React 18** with Vite
- **GSAP 3** + ScrollTrigger for all animations
- **Vanilla CSS** with CSS custom properties (no Tailwind needed for this project)
