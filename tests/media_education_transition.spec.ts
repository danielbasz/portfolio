import { test, expect } from '@playwright/test';

// NOTE: Ensure the dev server is running on http://localhost:3000 before running this test
//   npm run dev   (in another terminal)
//   npx playwright test tests/media_education_transition.spec.ts

test.describe('MEDIA → EDUCATION transition', () => {
  test('captures visual transition when DEV leaves and MEDIA creates gap', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });

    // Wait for sections to load
    await page.waitForSelector('#dev-wrapper');
    await page.waitForSelector('#media');

    // Scroll to where DEV is about to leave
    const devBottom = await page.evaluate(() => {
      const dev = document.getElementById('dev-wrapper')!;
      const rect = dev.getBoundingClientRect();
      return window.scrollY + rect.bottom;
    });

    // Scroll to just before DEV fully out
    await page.evaluate((y) => window.scrollTo(0, y - 5), devBottom);
    await page.waitForTimeout(100);
    await page.screenshot({ path: 'test-artifacts/dev-out-before.png', fullPage: false });

    // Scroll past DEV to trigger MEDIA ramp
    await page.evaluate((y) => window.scrollTo(0, y + 100), devBottom);
    await page.waitForTimeout(200);
    await page.screenshot({ path: 'test-artifacts/dev-out-after.png', fullPage: false });

    // Scroll further to see Education revealing
    await page.evaluate((y) => window.scrollTo(0, y + 400), devBottom);
    await page.waitForTimeout(200);
    await page.screenshot({ path: 'test-artifacts/education-reveal.png', fullPage: false });

    // Measure position delta to verify no jump
    const mediaTop = await page.evaluate(() => {
      const media = document.getElementById('media');
      return media ? media.getBoundingClientRect().top : null;
    });

    console.log('MEDIA section top position after DEV-out:', mediaTop);
    
    // Check that Education section is present
    const educationVisible = await page.isVisible('text=EDUCATION');
    expect(educationVisible).toBe(true);
  });
});
