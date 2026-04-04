# Copilot Instructions

You are helping build a modern church website.

Framework:
Astro

Styling:
Tailwind CSS

Languages:
Spanish and English

Important requirement:
SEO optimization is mandatory.

---

# Bilingual Parity Rule (ES ↔ EN)

**Every change made to the Spanish version of the site MUST also be applied to the English version, and vice versa.**

This rule applies to:

- New or modified pages under `src/pages/es/` → must have a counterpart under `src/pages/en/`
- New or modified keys in `src/i18n/es.ts` → must be added with their translation in `src/i18n/en.ts`
- New components that receive translated text → both language files must be updated
- Structural or layout changes → must be reflected in both language routes
- New navigation links → must appear in both `es` and `en` navLinks arrays in `Navbar.astro`

This is enforced automatically by `npm run test:parity` (script: `scripts/check-i18n-parity.ts`) and by the GitHub Actions pipeline, which will block deployment if ES and EN are out of sync.

---

# SEO Requirements

All pages must include:

- meta title
- meta description
- canonical URL
- Open Graph tags
- Twitter cards

Use semantic HTML:

header
main
section
article
footer

Images must include alt attributes.

Pages must use:

- structured headings (H1, H2, H3)
- structured content sections

---

# Branding

Main phrase:

"El amor hace la diferencia"

Usage:

- Highlight in the hero section
- Use in call-to-action sections
- Reinforce in donation section

The phrase should be visually impactful but minimalist.

---

# Performance

The site must follow Astro best practices:

- minimal client-side JavaScript
- static generation when possible
- optimized images
- lazy loading

Target:

Lighthouse score above 90.

---

# Architecture

Frontend:

Astro

Content:

Strapi CMS

Integration:

REST API

Deployment:

Static hosting for Astro.

---

# Components to generate

Hero
Navbar
Footer
DevotionalCard
MinistryCard
DonationSection
PrayerForm

---

# UX

The design must be:

Minimalist
Elegant
Mobile-first
Fast

Use subtle transitions between pages.

Use Astro View Transitions when possible.

---

# Design System

Primary colors:

Black #000000
Deep Blue #1a46ad
Blue #2e7ae7
White #ffffff
Gold #ceaf78

Typography:

Headings:
Cormorant Garamond

Body:
Raleway

Accent Script:
Allura