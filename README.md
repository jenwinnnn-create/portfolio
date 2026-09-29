# Jenwin · UI/UX Portfolio

Personal portfolio built with **React 19 + Vite + Tailwind CSS v4**.

## ✨ Features

- 🌗 **Dark / Light mode** — toggle in the nav, persisted to `localStorage`, respects system preference, no flash on load
- ⌨️ **Scramble/decrypt name animation** + typewriter role rotator (custom hooks: `useScramble`, `useTyping`)
- 🧩 **Auto-hiding sections** — leave `projects`, `experience`, or `socials` empty in the config and those sections (and their nav links) disappear; numbering re-adjusts automatically
- 📜 **Scroll-reveal animations** via a reusable `<Reveal>` component (IntersectionObserver)
- 📱 **Fully responsive** with mobile dropdown nav
- 🔗 **Zero external requests** — all icons are inline SVGs, works fully offline

## 🚀 Getting Started

```bash
npm install       # install dependencies
npm run dev       # start dev server (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## ✏️ Customizing

**Everything personal lives in one file: [`src/config.js`](src/config.js)** — name, roles, about text, skills, experience, projects, socials, email, footer. Edit values there and the whole site updates. The file has examples showing how to add projects/socials/experience later.

### Project structure

```
src/
├── config.js            ← ★ all your data here
├── App.jsx              ← section order & auto-hide logic
├── index.css            ← Tailwind + theme variables (dark/light)
├── icons.jsx            ← inline SVG icon library
├── hooks/
│   ├── useTheme.js      ← dark/light toggle
│   ├── useScramble.js   ← decrypt animation
│   └── useTyping.js     ← typewriter effect
└── components/
    ├── Navbar.jsx       ├── About.jsx       ├── Connect.jsx
    ├── Hero.jsx         ├── Experience.jsx  ├── Contact.jsx
    ├── Section.jsx      ├── Projects.jsx    ├── Footer.jsx
    └── Skills.jsx       └── Reveal.jsx      (scroll animations)
```

### Changing the accent color

Edit the CSS variables under `:root` (light) and `.dark` (dark) in [`src/index.css`](src/index.css) — e.g. change `--accent` from mint `#00e59b` to any color you like.

## 🌐 Deployment

This is a static SPA — deploy anywhere:

- **Vercel**: `vercel` (framework preset: Vite) — or push to GitHub and import
- **Netlify**: build command `npm run build`, publish directory `dist`
- **GitHub Pages**: `npm run build`, then publish the `dist` folder
