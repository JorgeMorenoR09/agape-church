import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('redirects to default locale /es/', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/\/es\//);
  });

  test('has correct page title', async ({ page }) => {
    await page.goto('/es/');
    await expect(page).toHaveTitle('Agape Church — El amor hace la diferencia');
  });

  test('displays the main heading', async ({ page }) => {
    await page.goto('/es/');
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
  });

  test('navigation links are visible', async ({ page }) => {
    await page.goto('/es/');
    const nav = page.locator('nav').first();
    await expect(nav).toBeVisible();
  });
});

test.describe('English version', () => {
  test('has correct page title', async ({ page }) => {
    await page.goto('/en/');
    await expect(page).toHaveTitle('Agape Church — Love Makes the Difference');
  });

  test('displays the main heading', async ({ page }) => {
    await page.goto('/en/');
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
  });
});
