# Warteg Barokah Abadi 🍱

A modern, high-performance landing page for **Warteg Barokah Abadi**, a local Indonesian business specialized in authentic and hygienic home-style cooking. Built with a focus on speed, cinematic visuals, and seamless customer interaction.

---

## ✨ Features

- **💎 Cinematic UI**: A professional "Glassmorphic" interface using Tailwind CSS and Framer Motion for smooth animations.
- **📱 WhatsApp Integration**: Direct ordering system via a floating button and item-specific pre-filled chat links.
- **📊 Integrated Analytics**: Full Google Analytics tracking for user engagements (menu clicks, location views, etc.).
- **🗺️ Interactive Map**: Real-time business location via Google Maps API embedding.
- **🚀 Automated Deployment**: CI/CD pipeline via GitHub Actions to GitHub Pages.
- **🔍 SEO Optimized**: Includes LocalBusiness Schema (JSON-LD) for better search engine visibility.

---

## 🛠️ Tech Stack

- **Framework**: [Astro 6](https://astro.build/) (Static Site Generation)
- **UI Logic**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## ⚡ Getting Started

### Prerequisites
- Node.js `^22.12.0`
- npm

### Installation
```sh
npm install
```

### Local Development
```sh
npm run dev
```
The site will be available at `http://localhost:4321`.

### Production Build
```sh
npm run build
```
The static files will be generated in the `dist/` directory.

---

## 🌍 Deployment

This project is configured for **GitHub Pages**.

1. **GitHub Actions**: Deployment is triggered automatically on every push to the `main` branch via `.github/workflows/deploy.yml`.
2. **Sub-path**: The site is deployed to `/warteg-barokah-abadi`.
3. **URL**: [https://deanufriana.github.io/warteg-barokah-abadi/](https://deanufriana.github.io/warteg-barokah-abadi/)

---

## 👨‍💻 Creator
Developed by [deanufriana](https://deanufriana.github.io/).
