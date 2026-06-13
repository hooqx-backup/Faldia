<div align="center">

<img src="assets/logo.png" alt="FalDia Logo" height="72" />

# FalDia — Sugar Supply, Simplified

**Specialist B2B sugar trading website · Pure HTML · Tailwind CSS · Vanilla JS**

[![Pages](https://img.shields.io/badge/Pages-4-2563a8?style=flat-square&logo=html5&logoColor=white)](.)
[![CSS](https://img.shields.io/badge/Tailwind_CSS-CDN-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Fonts](https://img.shields.io/badge/Fonts-Fraunces_+_Plus_Jakarta-f59e0b?style=flat-square&logo=google-fonts&logoColor=white)](https://fonts.google.com)
[![License](https://img.shields.io/badge/License-Private-27374d?style=flat-square)](.)

</div>

---

## Overview

FalDia is a premium marketing website for **Falcon Diamond**, a specialist B2B sugar trading company connecting global mills with industrial buyers across **MENA, South Asia, and East Africa**. The site is built with zero dependencies — no frameworks, no build step, no npm — just clean HTML, Tailwind (via CDN), and vanilla JavaScript.

---

## Pages

| Page | File | Description |
|------|------|-------------|
| **Home** | `index.html` | Hero, product showcase, stats, testimonials, contact form |
| **About** | `about.html` | Company story, core values, team, global footprint |
| **Products** | `products.html` | Full product catalogue with tabbed category browser & lightbox |
| **Contact** | `contact.html` | Inquiry form, office details, embedded map |

---

## Features

- **Glassmorphism UI** — layered `backdrop-blur` panels with subtle `ring` borders and depth shadows
- **Scroll-driven animations** — `IntersectionObserver`-powered reveal sequences (`reveal-up`, `reveal-left`, `reveal-right`, `stagger`)
- **Animated scroll progress bar** — shimmer gradient fixed to the top of every page
- **Parallax orbs** — ambient light blobs that shift on scroll for visual depth
- **Product catalogue with hash routing** — URL hash (`#raw-sugar`, `#refined-white`, etc.) drives the active tab, enabling direct deep links from anywhere on the site
- **Image lightbox** — keyboard-navigable full-screen viewer with dot indicators on the Products page
- **Sticky glassmorphic navbar** — transitions on scroll with mobile hamburger menu
- **Magnetic CTA buttons** — cursor-following micro-interaction on primary buttons
- **Card tilt effect** — subtle 3-D perspective tilt on hover for product and team cards
- **Newsletter subscribe widget** in every footer
- **Fully responsive** — mobile-first, tested from 320 px to 4 K

---

## Product Catalogue

Five sugar grades, each with its own deep-link hash:

| Grade | Hash | Origin |
|-------|------|--------|
| Raw Sugar — VHP / V-VHP | `#raw-sugar` | Brazil, Thailand |
| Refined White — ICUMSA 45–150 | `#refined-white` | Brazil, EU |
| S-30 Crystal | `#indian-s30` | India |
| Liquid Sugar — 65–70° Brix | `#liquid-sugar` | EU, Brazil |
| Icing Sugar — 6x–12x | `#icing-sugar` | EU |

---

## Tech Stack

```
HTML5          — semantic markup, no template engine
Tailwind CSS   — utility-first styling via CDN (no build step)
Vanilla JS     — IntersectionObserver, custom tab router, lightbox, parallax
Google Fonts   — Fraunces (display) + Plus Jakarta Sans (body)
```

No bundler. No framework. No `node_modules`. Open any `.html` file in a browser and it works.

---

## File Structure

```
faldia/
├── index.html              # Home
├── about.html              # About
├── products.html           # Products catalogue
├── contact.html            # Contact
│
├── styles.css              # Shared design tokens & component classes
├── about-styles.css        # About-page-specific styles
├── products-styles.css     # Products-page-specific styles (tabs, lightbox)
├── contact-styles.css      # Contact-page-specific styles
│
├── main.js                 # Shared JS (scroll bar, reveals, navbar, parallax)
├── about-main.js           # About-page JS
├── products-main.js        # Products JS (tab router, lightbox, grade data)
├── contact-main.js         # Contact JS (form, map)
│
└── assets/
    ├── logo.png
    ├── favicon.png
    ├── about/              # Section imagery for About page
    ├── Contact/            # Section imagery for Contact page
    ├── Raw Sugar/
    ├── Refined White Sugar/
    ├── Indian S-30/
    ├── Liquid Sugar/
    └── Icing Sugar/
```

---

## Running Locally

No server required for basic browsing. Just open `index.html` in any modern browser:

```bash
# Clone the repo
git clone https://github.com/your-org/faldia.git
cd faldia

# Open directly — or use a simple local server to avoid CORS on assets
npx serve .
# → http://localhost:3000
```

> **Tip:** Some browsers restrict local file access for assets. If images don't load when opening `file://`, use `npx serve .` or VS Code's Live Server extension.

---

## Design System

| Token | Value |
|-------|-------|
| **Primary** | `#2563a8` — `brand-500` |
| **Deep navy** | `#0f1b2d` — `ink-900` |
| **Accent sky** | `#0ea5e9` — `sky2-500` |
| **Display font** | Fraunces (9–144 optical size, 400–700 weight) |
| **Body font** | Plus Jakarta Sans (400–700) |
| **Radius** | `rounded-2xl` / `rounded-3xl` throughout |
| **Shadow — soft** | `0 1px 2px …, 0 8px 24px …` |
| **Shadow — glow** | `0 10px 40px -12px rgba(37,99,168,.45)` |

---

## Browser Support

Chrome 90+, Firefox 88+, Safari 14+, Edge 90+. Requires `backdrop-filter` support for glassmorphism (all modern browsers). Degrades gracefully without it — panels remain opaque.

---

<div align="center">

**© 2026 Falcon Diamond · faldia.com**

*Precision Sugar Trading · Global Reach · Assured Quality*

</div>
