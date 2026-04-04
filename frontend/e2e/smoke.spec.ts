import { test, expect } from '@playwright/test';

/**
 * Definición de páginas para cada idioma.
 * Regla: toda página que exista en ES debe existir en EN y viceversa.
 */
const ES_PAGES = [
  { path: '/es/',            label: 'Inicio'       },
  { path: '/es/nosotros',    label: 'Nosotros'     },
  { path: '/es/ministerios', label: 'Ministerios'  },
  { path: '/es/eventos',     label: 'Eventos'      },
  { path: '/es/oracion',     label: 'Oración'      },
  { path: '/es/donaciones',  label: 'Donaciones'   },
  { path: '/es/devocionales',label: 'Devocionales' },
] as const;

const EN_PAGES = [
  { path: '/en/',            label: 'Home'         },
  { path: '/en/about',       label: 'About'        },
  { path: '/en/ministries',  label: 'Ministries'   },
  { path: '/en/events',      label: 'Events'       },
  { path: '/en/prayer',      label: 'Prayer'       },
  { path: '/en/donations',   label: 'Donations'    },
  { path: '/en/devotionals', label: 'Devotionals'  },
] as const;

// ---------------------------------------------------------------------------
// Smoke tests — Español (ES)
// ---------------------------------------------------------------------------
test.describe('Smoke — Español (ES)', () => {
  for (const { path, label } of ES_PAGES) {
    test(`"${label}" carga correctamente`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);

      // Estructura semántica principal
      await expect(page.locator('header')).toBeVisible();
      await expect(page.locator('nav')).toBeVisible();
      await expect(page.locator('main')).toBeVisible();
      await expect(page.locator('footer')).toBeVisible();

      // Al menos un H1 presente y visible
      const h1 = page.locator('h1').first();
      await expect(h1).toBeVisible();
    });
  }
});

// ---------------------------------------------------------------------------
// Smoke tests — English (EN)
// ---------------------------------------------------------------------------
test.describe('Smoke — English (EN)', () => {
  for (const { path, label } of EN_PAGES) {
    test(`"${label}" loads correctly`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);

      // Semantic structure
      await expect(page.locator('header')).toBeVisible();
      await expect(page.locator('nav')).toBeVisible();
      await expect(page.locator('main')).toBeVisible();
      await expect(page.locator('footer')).toBeVisible();

      // At least one H1 present and visible
      const h1 = page.locator('h1').first();
      await expect(h1).toBeVisible();
    });
  }
});

// ---------------------------------------------------------------------------
// Paridad de rutas — cada ruta ES debe tener su contraparte EN
// ---------------------------------------------------------------------------
test.describe('Paridad de rutas ES ↔ EN', () => {
  const pairs = ES_PAGES.map((esPage, i) => ({
    es: esPage,
    en: EN_PAGES[i],
  }));

  for (const { es, en } of pairs) {
    test(`"${es.label}" (ES) y "${en.label}" (EN) son accesibles`, async ({ request }) => {
      const [esRes, enRes] = await Promise.all([
        request.get(es.path),
        request.get(en.path),
      ]);
      expect(esRes.status(), `Ruta ES ${es.path} debe responder 200`).toBe(200);
      expect(enRes.status(), `Ruta EN ${en.path} debe responder 200`).toBe(200);
    });
  }
});
