# Campaign Butler — Landing Page (React + Vite + Tailwind)

A single page layout built from a design brief. Implemented with React + Vite and Tailwind CSS. Includes all sections from hero to footer, with carousels, pricing, CTA form, and accessibility/SEO considerations.

Live demo: https://desk-team-360.vercel.app


Repository: https://github.com/ramatya00/desk-team-360

## Quick Start

- Prereq: Node 18+ and npm (or pnpm/yarn)
- Install: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build`
- Preview build: `npm run preview`

## Tech Stack

- React 19 + TypeScript
- Vite 7 (fast dev server and optimized builds)
- Tailwind CSS v4 (utility-first styling; purge by default)
- lucide-react (icons)

## Project Structure

```
src/
  components/
    Navbar.tsx
    Hero.tsx
    Section-1.tsx
    Section-2.tsx
    Section-3.tsx   // Testimonial carousel
    Section-4.tsx   // Campaign Toolkit slider
    Section-5.tsx   // Experience + 4 cards grid
    Section-6.tsx   // Pricing + CTA form + image slice
    Footer.tsx
  assets/images/
    conncet.svg
    people-1.jpeg
    people-2.jpeg
    people-3.jpeg
  App.tsx           // Page composition
  main.tsx          // React bootstrap
  index.css         // Tailwind import
index.html          // Meta/SEO
```

## Implementation Notes

- Hero: headline, supporting copy, domain search form, hero illustration, quick links.
- Section-1: The Challenge/Solution split with SVG visuals.
- Section-2: Reason-to-believe section with icon bullets.
- Section-3: Testimonial carousel (prev/next, side previews, metric badge, quote block).
- Section-4 (CampaignToolkit): Category slider with bullets and image; dots + arrow navigation.
- Section-5 (Experience): Dark experience panel with orbiting icons; light grid of 4 cards.
- Section-6: Pricing cards; CTA block with controlled form inputs; supporting image/text slice.
- Footer: Links, socials, and scroll-to-top button.

## Why React + Tailwind

- React: Clear component boundaries per section, straightforward state for carousels/forms, easy to scale into modules.
- Tailwind: Rapid iteration, consistent spacing/typography, responsive utilities, minimal production CSS.

## Modularity (if part of a larger project)

- Extract UI primitives: `Button`, `Card`, `Badge`, `IconBullet`, `SectionTitle`.
- Group features: `Testimonials` (card + controls), `Toolkit` (slide + dots), `Pricing` (card), `CTA` (LeadForm).
- Move copy to `/src/content/*.ts` to separate content from layout.
- Introduce routing later if multi-page is needed.

## Performance, Accessibility, SEO

- Performance: Vite asset imports for images; consider `loading="lazy"` for below-the-fold images; small CSS via Tailwind purge.
- Accessibility: Descriptive button labels; meaningful `alt`; keyboard focus and tab order validated on interactive elements.
- SEO: Added `<title>`, meta description, OpenGraph/Twitter tags, robots, and canonical in `index.html`.

## Deployment

- Vercel
  - Import repo → Framework: Vite
  - Build: `npm run build` | Output: `dist`
- Netlify
  - New site from Git
  - Build: `npm run build` | Publish directory: `dist`
- GitHub Pages
  - `npm run build`, publish `dist` via action or `gh-pages` branch.

## Deliverables (for email)

- Project folder or repo link
- Live site URL (Vercel/Netlify)
- Short video (2–4 min) covering:
  - Code and layout structure
  - Why this stack
  - How you’d modularize further
  - Perf, accessibility, SEO considerations

## Video Script Outline

1. Intro and assignment summary
2. Stack choice (React + Vite + Tailwind)
3. Walkthrough: `App.tsx` and key components (carousel logic, CTA form)
4. Modularity plan and content separation
5. Perf/A11y/SEO highlights
6. Demo and live link; future refinements

