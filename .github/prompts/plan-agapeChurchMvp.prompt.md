# Plan: Ágape Church Website — MVP

**TL;DR:** Construir el sitio estático bilingüe (ES/EN) para Ágape Church con Astro + Tailwind CSS. Contenido gestionado con datos estáticos en MVP. SEO mandatory en todas las páginas, identidad visual propia (Azul profundo / Oro / Cormorant Garamond + Raleway + Allura) y Lighthouse >90.

---

## FASE 1 — Fundación del Proyecto
1. Inicializar proyecto Astro con TypeScript (`npm create astro@latest`)
2. Instalar y configurar `@astrojs/tailwind`, `@astrojs/sitemap`, `@astrojs/image`
3. Definir estructura de directorios: `src/components/`, `src/layouts/`, `src/pages/es/`, `src/pages/en/`, `src/i18n/`, `src/lib/`, `public/`

## FASE 2 — Sistema de Diseño
4. Configurar `tailwind.config.mjs` con tokens: `primary #1a46ad`, `secondary #2e7ae7`, `accent #ceaf78`, fuentes Cormorant Garamond + Raleway + Allura
5. Crear `src/styles/globals.css` con imports de fuentes y variables base

## FASE 3 — Layout Base y SEO
6. Crear `BaseLayout.astro` con props tipadas (`title`, `description`, `canonicalURL`, `image`, `lang`) e incluye: title, meta description, canonical, Open Graph completo, Twitter Cards
7. Crear `Navbar.astro` — mobile-first, menú hamburguesa, **language switcher ES/EN**, logo "Ágape Church"
8. Crear `Footer.astro` — navegación, redes sociales, dirección, copyright

## FASE 4 — Infraestructura i18n
9. Configurar i18n nativo de Astro (`defaultLocale: 'es'`, `locales: ['es', 'en']`)
10. Crear `src/i18n/es.ts` + `src/i18n/en.ts` con todas las cadenas de UI (nav, hero, footer, formularios)
11. Crear helper `src/i18n/utils.ts` → `useTranslations(lang)`

## FASE 5 — Componentes Core
12. `Hero.astro` — imagen de fondo full-width, H1 centrado, 2 CTAs (primario dorado, secundario outline)
13. `MinistryCard.astro` — imagen, H3, descripción breve, link
14. `DevotionalCard.astro` — fecha, título, excerpt, link al detalle
15. `EventCard.astro` — fecha, título, descripción, ubicación
16. `DonationSection.astro` — descripción + botones a PSE/Wompi (enlaces externos)
17. `PrayerForm.astro` — nombre, email, solicitud (textarea), submit → Netlify Forms

## FASE 6 — Páginas *(ES + EN en paralelo)*
18. **Home** `pages/es/index.astro` / `pages/en/index.astro` — Hero + Preview Devocionales + Preview Ministerios + CTA Donaciones
19. **Nosotros/About** — Historia, visión, misión, valores
20. **Ministerios/Ministries** — Grid de `MinistryCard`
21. **Devocionales/Devotionals** — Lista paginada + ruta dinámica `[slug].astro` con detalle
22. **Eventos/Events** — Lista de `EventCard`
23. **Oración/Prayer** — `PrayerForm`
24. **Donaciones/Donations** — `DonationSection` completa

## FASE 7 — Features Avanzadas
25. Activar **Astro View Transitions** en `BaseLayout.astro`
26. Configurar `@astrojs/sitemap` con URLs bilingües
27. Crear `public/robots.txt`
28. Usar componente `<Image>` de Astro en todas las imágenes (optimización automática + lazy loading)

## FASE 8 — Deployment
29. `astro.config.mjs` con `output: 'static'`
30. `.env.example` con `PUBLIC_SITE_URL`
31. Configurar Netlify (`netlify.toml`) + documentar pasos de deployment en README.md

---

## Verificación
1. `npm run build` sin errores → `npm run preview` con navegación ES/EN funcional
2. Lighthouse audit en Home: ≥ 90 en las 4 categorías
3. Validar Open Graph con Meta Tags Checker
4. Verificar `sitemap.xml` con URLs bilingües generadas
5. Testear `PrayerForm` (submit Netlify Forms)
6. Responsividad en 375px / 768px / 1280px
7. Todas las imágenes con `alt` + lazy loading

---

## Decisiones clave
- **Contenido**: Datos estáticos hardcodeados en MVP — la integración con Strapi CMS queda fuera del alcance MVP
- **PrayerForm**: Netlify Forms para MVP (sin backend propio) — evita complejidad serverless
- **Donaciones**: Solo links externos PSE/Wompi, sin SDK de pagos
- **i18n**: Astro i18n nativo (v4+), sin librerías adicionales
- **Imágenes Hero**: Assets estáticos locales en MVP
- **Ruta raíz `/`**: Redirige a `/es/`

---

## Fuera del alcance MVP
- Integración con Strapi CMS (Fases postergadas para v2)
- Endpoints serverless propios para formularios
- Integración SDK de pagos (PSE / Wompi)
