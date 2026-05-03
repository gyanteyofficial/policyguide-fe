# PolicyGuide — Insurance Comparison Platform

## Overview
An Angular 21 insurance comparison web application inspired by PolicyBazaar. Allows users to compare and explore insurance and investment plans from 51+ insurers across India.

## Tech Stack
- **Framework**: Angular 21 (standalone components, signals, computed)
- **Build**: Angular CLI + Vite dev server
- **Styling**: Pure CSS with CSS custom properties (no external UI library)
- **Port**: 5000 (dev server)

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/                   — Fixed top navbar with dropdowns, links to all product pages
│   │   ├── hero/                     — Auto-rotating hero banner + quote form
│   │   ├── insurance-categories/     — Product grid (12 categories, 5 linked to comparison pages)
│   │   ├── featured-plans/           — 3 featured offer cards
│   │   ├── stats/                    — Stats banner + "Why Us" section
│   │   ├── testimonials/             — Customer review carousel
│   │   └── footer/                   — Full footer with links + partners
│   ├── pages/
│   │   ├── home/                     — Home page (assembles all components)
│   │   ├── health-insurance/         — Health Insurance comparison page (8 plans)
│   │   ├── term-life-insurance/      — Term Life comparison page (6 plans)
│   │   ├── car-insurance/            — Car Insurance comparison page (6 plans)
│   │   ├── two-wheeler-insurance/    — Two Wheeler comparison page (6 plans)
│   │   └── travel-insurance/         — Travel Insurance comparison page (6 plans)
│   ├── app.ts                        — Root component (navbar + router-outlet + footer)
│   ├── app.routes.ts                 — Routes for all 6 pages
│   └── app.config.ts                 — App config with router
├── styles.css                        — Global styles + CSS variables (blue theme)
└── index.html                        — Entry HTML
```

## Pages & Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/health-insurance` | Health Insurance comparison |
| `/term-life-insurance` | Term Life comparison |
| `/car-insurance` | Car Insurance comparison |
| `/two-wheeler-insurance` | Two Wheeler comparison |
| `/travel-insurance` | Travel Insurance comparison |

## Comparison Page Features (consistent across all 5 pages)
- Blue gradient hero with product-specific quote card inputs
- Filter sidebar with max premium range slider + insurer checkboxes
- Sort bar (Price / product-specific metrics / Claim Ratio / Rating)
- Plan cards: insurer avatar, plan name, key metrics, star rating, features, add-ons/riders
- Compare tray (sticky bottom, select up to 3 plans)
- Side-by-side comparison modal with best-value highlights

## Theme
Blue (#1a56db primary, #1e40af dark, #eff6ff light background)

## CSS Budget (angular.json)
- anyComponentStyle warning: 16 kB, error: 32 kB

## Development
```bash
npm run start   # Starts on port 5000
npm run build   # Production build to dist/
```

## Deployment
Configured as static deployment:
- Build command: `npm run build`
- Public dir: `dist/policyguide-fe/browser`
