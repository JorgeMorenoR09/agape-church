# ADR 002: CMS Selection (Strapi vs Sanity)

## Status
Accepted

---

## Context

The project requires a Headless CMS to manage:

- Devotional content
- Ministries
- Events
- Church information

The CMS must:

- Be easy to use for non-technical users
- Expose content via API
- Support future internationalization
- Integrate with Astro

---

## Constraints

- No paid services allowed
- Must run on free or self-managed infrastructure
- Avoid vendor lock-in
- Must be scalable

---

## Options Considered

### Option 1: Sanity

Sanity is a cloud-based headless CMS.

#### Pros

- Excellent editing experience
- Real-time updates
- Strong ecosystem
- Easy integration with modern frameworks

#### Cons

- SaaS dependency
- Free tier has limitations
- Potential future costs
- Vendor lock-in

---

### Option 2: Strapi

Strapi is an open-source headless CMS that can be self-hosted.

#### Pros

- Fully open source
- No licensing costs
- Full control over data and infrastructure
- No vendor lock-in
- Flexible API (REST / GraphQL)

#### Cons

- Requires backend management
- Requires hosting for Node.js
- Slightly more complex setup

---

## Decision

We will use Strapi as the CMS.

---

## Justification

Strapi is selected because:

- It meets the zero-cost requirement
- It can be self-hosted
- It avoids dependency on external SaaS providers
- It provides full control over content and data

---

## Architecture

Frontend:

Astro

Backend CMS:

Strapi (self-hosted)

Integration:

REST API

---

## Consequences

### Positive

- No mandatory costs
- Full control over the system
- No vendor lock-in
- Flexible and extensible

### Negative

- Requires backend maintenance
- Requires deployment and monitoring
- Slightly higher operational complexity

---

## Future Considerations

If the no-cost constraint is removed, alternatives could include:

- Sanity
- Contentful
- DatoCMS

---

## Decision Summary

Strapi is the best choice under the current constraints due to:

- zero cost
- full control
- flexibility