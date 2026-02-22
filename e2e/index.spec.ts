import { test, expect } from '@playwright/test';
import { url } from './util';

test('has h1 title', async ({ page }) => {
  await page.goto(url('/'));

  const heading = page.getByRole('heading', { level: 1 });
  await expect(heading).toHaveText('Kimono Styling, Lecture & Photoshoot');
});

test('h2 tag titles"', async ({ page }) => {
  await page.goto(url('/'));
  await expect(
    page.getByRole('heading', { name: 'About Me', level: 2 })
  ).toBeVisible();

  await expect(
    page.getByRole('heading', { name: 'My Studio in Asakusa', level: 2 })
  ).toBeVisible();

  await expect(
    page.getByRole('heading', { name: 'Portfolio', level: 2 })
  ).toBeVisible();

  await expect(
    page.getByRole('heading', { name: 'Media', level: 2 })
  ).toBeVisible();
});

test('Click first service button and go to navigation"', async ({ page }) => {
  await page.goto(url('/'));
  const button = page
    .getByRole('link', { name: 'View Plans & Pricing' })
    .first();
  await expect(button).toBeVisible();
  await button.click();
  await page.waitForURL(url('/service'));
});

test('Click portfolio button and go to navigation"', async ({ page }) => {
  await page.goto(url('/'));
  const button = page.getByRole('link', { name: 'See Portfolio' }).first();
  await expect(button).toBeVisible();
  await button.click();
  await page.waitForURL(url('/portfolio'));
});

test('Click second service button and go to navigation"', async ({ page }) => {
  await page.goto(url('/'));
  const button = page
    .getByRole('link', { name: 'View Plans & Pricing' })
    .nth(1);
  await expect(button).toBeVisible();
  await button.click();
  await page.waitForURL(url('/service'));
});

test('Click Inquiry button and go to navigation"', async ({ page }) => {
  await page.goto(url('/'));
  const button = page.getByRole('link', { name: 'Inquiry' }).first();
  await expect(button).toBeVisible();
  await button.click();
  await page.waitForURL(url('/inquiry'));
});

// ... existing tests ...

// ... existing tests ...

test('Navigation bar links work correctly', async ({ page }) => {
  await page.goto(url('/'));

  // Test each navigation link
  const navigationTests = [
    { name: 'Home', path: '/' },
    { name: 'Plans & Pricing', path: '/service' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Workshop', path: '/workshop' },
    { name: 'Location', path: '/location' },
    { name: 'Inquiry', path: '/inquiry' },
    { name: 'Faq', path: '/faq' },
    { name: '日本語', path: '/ja' },
  ];

  // Get the navigation container
  const navContainer = page.locator('[data-testid="main-nav"]');

  for (const { name, path } of navigationTests) {
    // Look for the link within the navigation container
    const link = navContainer.getByRole('link', { name });
    await expect(link).toBeVisible();
    await link.click();
    await page.waitForURL(url(path));

    // Go back to home page for next test
    if (path !== '/') {
      await page.goto(url('/'));
    }
  }
});
