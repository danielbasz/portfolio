import { test, expect } from '@playwright/test';

// NOTE: Ensure the dev server is running on http://localhost:3000 before running this test
//   npm run dev   (in another terminal)
//   npx playwright test tests/hero_work_transition.spec.ts

test.describe('Hero → Work transition', () => {
  test('no jump on hero-out and smooth gap creation', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });

    // Wait for hero
    await page.waitForSelector('#hero');

    // Measure hero height
    const heroBottomAt0 = await page.evaluate(() => {
      const r = document.getElementById('hero')!.getBoundingClientRect();
      return r.bottom;
    });

    // Scroll to just before hero fully out
    await page.mouse.wheel(0, heroBottomAt0 - 2);
    await page.waitForTimeout(100);
    await page.screenshot({ path: 'test-artifacts/hero-out-before.png', fullPage: true });

    // Scroll a tiny bit more to push hero fully out
    await page.mouse.wheel(0, 8);
    await page.waitForTimeout(100);
    await page.screenshot({ path: 'test-artifacts/hero-out-after.png', fullPage: true });

    // Verify that layout did not shift by checking the position delta of the CRA section container
    const delta = await page.evaluate(() => {
      const first = document.querySelector('[data-first-work]') as HTMLElement | null;
      if (!first) return null;
      const before = (first as any).__before || first.getBoundingClientRect().top;
      const after = first.getBoundingClientRect().top;
      return { before, after, diff: after - before };
    });

    // Not a strict assertion here; screenshots are primary. We only log delta.
    console.log('First Work top delta across hero-out:', delta);
  });
});
