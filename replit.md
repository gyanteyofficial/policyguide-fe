# PolicyGuide — Insurance Comparison Platform

## Overview
An Angular 21 insurance comparison web application inspired by PolicyBazaar. Allows users to compare and explore insurance and investment plans from 51+ insurers across India.

## Tech Stack
- **Framework**: Angular 21 (standalone components, signals)
- **Build**: Angular CLI + Vite dev server
- **Styling**: Pure CSS with CSS custom properties (no external UI library)
- **Port**: 5000 (dev server)

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          — Fixed top navbar with dropdowns
│   │   ├── hero/            — Auto-rotating hero banner + quote form
│   │   ├── insurance-categories/  — Product grid (12 categories)
│   │   ├── featured-plans/  — 3 featured offer cards
│   │   ├── stats/           — Stats banner + "Why Us" section
│   │   ├── testimonials/    — Customer review carousel
│   │   └── footer/          — Full footer with links + partners
│   ├── pages/
│   │   └── home/            — Home page (assembles all components)
│   ├── app.ts               — Root component (navbar + router-outlet + footer)
│   ├── app.routes.ts        — Routes (/ → HomeComponent)
│   └── app.config.ts        — App config with router
├── styles.css               — Global styles + CSS variables (blue theme)
└── index.html               — Entry HTML
```

## Features Implemented
1. **Sticky Navbar** — Logo, Insurance Products / Renew / Claim dropdowns, Talk to Expert CTA, Sign In
2. **Hero Section** — Auto-rotating slides (3 slides, 4.5s interval), floating badges, trust bar
3. **Quick Quote Card** — Insurance type selector, plan type, age, cover amount, compare CTA
4. **Insurance Categories Grid** — 12 product cards with badges, icons, starting price, get quote button
5. **Featured Plans** — 3 gradient cards with exclusive offers
6. **Stats Banner** — 4 key metrics (51+ insurers, 1.5Cr+ customers, 10L+ claims, 4.8 rating)
7. **Why Choose Us** — Feature grid with 4 benefit cards + certifications
8. **Testimonials Carousel** — 5 verified customer reviews with navigation
9. **Footer** — Brand info, 4 link columns, 8 partner chips, social links, legal links

## Theme
Blue (#1a56db primary, #1e40af dark, #eff6ff light background)

## Development
```bash
npm run start   # Starts on port 5000
npm run build   # Production build to dist/
```

## Deployment
Configured as static deployment:
- Build command: `npm run build`
- Public dir: `dist/policyguide-fe/browser`
