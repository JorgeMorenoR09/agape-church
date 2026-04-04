import { test, expect } from '@playwright/test';

/**
 * Tests de visibilidad de componentes críticos.
 * Se validan tanto la versión ES como EN para garantizar paridad visual.
 */

// ---------------------------------------------------------------------------
// Hero — indicador de scroll visible
// ---------------------------------------------------------------------------
test.describe('Hero — indicador de scroll', () => {
  test('visible en la home en español (/es/)', async ({ page }) => {
    await page.goto('/es/');
    const scrollIndicator = page.locator('text=SCROLL');
    await expect(scrollIndicator).toBeVisible();
  });

  test('visible en la home en inglés (/en/)', async ({ page }) => {
    await page.goto('/en/');
    const scrollIndicator = page.locator('text=SCROLL');
    await expect(scrollIndicator).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// Navbar — logo y enlaces de navegación presentes
// ---------------------------------------------------------------------------
test.describe('Navbar', () => {
  test('logo visible en español', async ({ page }) => {
    await page.goto('/es/');
    const logo = page.locator('header img[alt="Agape Church"]');
    await expect(logo).toBeVisible();
  });

  test('logo visible en inglés', async ({ page }) => {
    await page.goto('/en/');
    const logo = page.locator('header img[alt="Agape Church"]');
    await expect(logo).toBeVisible();
  });

  test('enlace de idioma alternativo presente en ES', async ({ page }) => {
    await page.goto('/es/');
    // El navbar debe mostrar el enlace para cambiar a EN
    const langSwitch = page.locator('header a[href*="/en/"]').first();
    await expect(langSwitch).toBeVisible();
  });

  test('alternate language link present in EN', async ({ page }) => {
    await page.goto('/en/');
    // The navbar must show a link to switch to ES
    const langSwitch = page.locator('header a[href*="/es/"]').first();
    await expect(langSwitch).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// Footer — información de contacto presente
// ---------------------------------------------------------------------------
test.describe('Footer', () => {
  test('pie de página visible en español', async ({ page }) => {
    await page.goto('/es/');
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    // Copyright con el nombre de la iglesia
    await expect(footer.locator('text=Agape Church')).toBeVisible();
  });

  test('footer visible in English', async ({ page }) => {
    await page.goto('/en/');
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    await expect(footer.locator('text=Agape Church')).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// CTA de donaciones — presente en ambos idiomas
// ---------------------------------------------------------------------------
test.describe('Sección de donaciones', () => {
  test('página de donaciones accesible en español', async ({ page }) => {
    await page.goto('/es/donaciones');
    await expect(page.locator('main')).toBeVisible();
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
  });

  test('donations page accessible in English', async ({ page }) => {
    await page.goto('/en/donations');
    await expect(page.locator('main')).toBeVisible();
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
  });
});
