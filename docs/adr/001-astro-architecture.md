# ADR 001: Use Astro as the main framework

## Status
Accepted

---

## Context

We need to build a modern church website with the following characteristics:

- Mostly static content
- High performance
- Excellent SEO
- Low infrastructure cost
- Easy deployment

The site is inspired structurally by:

https://ejedefe.com/

The website includes:

- Informational pages
- Devotional content
- Ministries
- Events
- Prayer request forms
- Donation section (external payment links)

Additionally:

- The site must support multiple languages (Spanish and English)
- SEO optimization is a critical requirement

---

## Decision

We will use Astro as the main framework for the frontend.

---

## Justification

Astro is selected because:

- It supports static site generation (SSG)
- Produces highly optimized HTML
- Minimizes client-side JavaScript
- Provides excellent SEO performance
- Supports component-based architecture
- Allows integration with APIs and CMS
- Supports modern UX features like view transitions

---

## Architecture

Frontend:

Astro

Content:

Headless CMS (Strapi)

Forms:

Serverless endpoints (optional)

Donations:

External payment links (PSE / Wompi)

---

## SEO Strategy

The site must include:

- Meta title and description on all pages
- Canonical URLs
- Open Graph tags
- Semantic HTML structure
- Optimized images
- Sitemap generation

Target:

Lighthouse SEO score > 90

---

## Internationalization

The site will support:

- Spanish (default)
- English

Using:

- URL-based routing

Example:

/es
/en

---

## Consequences

### Positive

- High performance
- Excellent SEO
- Low hosting cost
- Simple deployment
- Clean architecture

### Negative

- Requires backend for dynamic features (forms)
- Payment integrations handled externally
- Requires manual i18n setup

---

## Alternatives Considered

### Next.js

Pros:

- Fullstack capabilities

Cons:

- Higher complexity
- More JavaScript sent to client

---

### WordPress

Pros:

- Easy content management

Cons:

- Lower performance
- Maintenance overhead
- Security concerns

---

## Decision Summary

Astro provides the best balance between:

- performance
- simplicity
- SEO
- maintainability

and is therefore selected as the main framework.