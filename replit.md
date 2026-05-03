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
│   │   ├── navbar/                — Fixed top navbar with dropdowns, links to product pages
│   │   ├── hero/                  — Auto-rotating hero banner + quote form
│   │   ├── insurance-categories/  — Product grid (12 categories)
│   │   ├── featured-plans/        — 3 featured offer cards
│   │   ├── stats/                 — Stats banner + "Why Us" section
│   │   ├── testimonials/          — Customer review carousel
│   │   └── footer/                — Full footer with links + partners
│   ├── pages/
│   │   ├── home/                  — Home page (assembles all components)
│   │   └── health-insurance/      — Health Insurance comparison page
│   ├── app.ts                     — Root component (navbar + router-outlet + footer)
│   ├── app.routes.ts              — Routes: / → Home, /health-insurance → comparison page
│   └── app.config.ts              — App config with router
├── styles.css                     — Global styles + CSS variables (blue theme)
└── index.html                     — Entry HTML
```

## Pages & Features

### Home Page (`/`)
1. **Sticky Navbar** — Logo, Insurance Products / Renew / Claim dropdowns, Talk to Expert CTA, Sign In
2. **Hero Section** — Auto-rotating slides (3 slides, 4.5s interval), floating trust badges, quick-quote card
3. **Trust Bar** — IRDAI Regulated, 51+ Insurers, 10L+ Claims Settled, 24/7 Support
4. **Insurance Categories Grid** — 12 product cards with badges, icons, starting prices, Get Quote buttons
5. **Featured Plans** — 3 gradient cards with exclusive offers
6. **Stats Banner** — Bold blue gradient with 4 key metrics
7. **Why Choose Us** — Certification badges + 4 feature cards
8. **Testimonials Carousel** — 5 verified customer reviews with navigation
9. **Footer** — Brand info, social links, 4 link columns, 8 partner chips, legal links

### Health Insurance Comparison Page (`/health-insurance`)
1. **Page Hero** — Blue gradient header with coverage amount / plan type / age inputs + compare CTA
2. **Filter Sidebar** — Max premium range slider, insurer checkboxes, feature filters, claim ratio radio
3. **Sort Bar** — Sort by Price / Rating / Hospitals / Claim Ratio
4. **Plan Cards** — 8 plans (HDFC, Star, Niva Bupa, ICICI, Bajaj, Aditya Birla, Care, Tata AIG)
   - Shows: insurer avatar, plan name, plan type, sum insured, network hospitals, claim ratio, rating
   - Key benefits list, feature chips (maternity, daycare, ambulance, NCB, room rent)
   - View Plan + Add to Compare buttons
5. **Compare Tray** — Sticky bottom bar when 1–3 plans selected, "Compare Now" CTA
6. **Comparison Modal** — Side-by-side table comparing all features with best-value highlights

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
