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
│   │   ├── navbar/                   — Fixed top navbar with dropdowns; all links use routerLink
│   │   ├── hero/                     — Auto-rotating hero banner + quote form
│   │   ├── insurance-categories/     — Product grid (12 categories, 5 linked)
│   │   ├── featured-plans/           — 3 featured offer cards
│   │   ├── stats/                    — Stats banner + "Why Us" section
│   │   ├── testimonials/             — Customer review carousel
│   │   └── footer/                   — Full footer with routerLink-wired links
│   ├── pages/
│   │   ├── home/                     — Home page (assembles all components)
│   │   ├── about/                    — Full About Us page (mission, how-it-works, IRDAI cert, why-us, products, CTA)
│   │   ├── support/                  — Full Support page (topics, FAQ accordion, contact form, offices)
│   │   ├── health-insurance/         — Health Insurance comparison (8 plans)
│   │   ├── term-life-insurance/      — Term Life comparison (6 plans)
│   │   ├── car-insurance/            — Car Insurance comparison (6 plans)
│   │   ├── two-wheeler-insurance/    — Two Wheeler comparison (6 plans)
│   │   └── travel-insurance/         — Travel Insurance comparison (6 plans)
│   ├── app.ts                        — Root component (navbar + router-outlet + footer)
│   ├── app.routes.ts                 — Routes for all 8 pages
│   └── app.config.ts                 — App config with router
├── styles.css                        — Global styles + CSS variables (blue theme)
└── index.html                        — Entry HTML
```

## Pages & Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Us (full multi-section page) |
| `/support` | Support & Contact (FAQ, form, offices) |
| `/health-insurance` | Health Insurance comparison |
| `/term-life-insurance` | Term Life comparison |
| `/car-insurance` | Car Insurance comparison |
| `/two-wheeler-insurance` | Two Wheeler comparison |
| `/travel-insurance` | Travel Insurance comparison |

## About Page Sections
- Hero with stat grid (51+ insurers, 1.5 Cr+ customers, 5 categories, 98%+ settlement)
- Trust bar (IRDAI, SSL, ISO 27001, Best InsureTech 2024)
- How It Works — 3-step process
- Mission section with IRDAI registration cert card
- Why Us — 6 feature cards
- Products grid — links to all 5 comparison pages
- CTA section

## Support Page Sections
- Hero with phone/email/chat chips
- Browse by topic — 6 help categories
- 8-item FAQ accordion
- Contact form with success state
- 3 office cards (Mumbai HQ, Delhi, Bengaluru)

## Comparison Page Features (consistent across all 5 pages)
- Blue gradient hero with product-specific quote card inputs
- Filter sidebar with max premium range slider + insurer checkboxes
- Sort bar (Price / product-specific metrics / Claim Ratio / Rating)
- Plan cards: insurer avatar, plan name, key metrics, star rating, features, add-ons/riders
- Compare tray (sticky bottom, select up to 3 plans)
- Side-by-side comparison modal with best-value highlights

## Theme
Blue (#1a56db primary, #1e40af dark, #eff6ff light background)

## CSS/Bundle Budgets (angular.json)
- initial bundle warning: 600 kB, error: 1.5 MB
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
