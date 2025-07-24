import { test, expect } from '@playwright/test';

// Debug test for Globo card logo bleed
// Run with: npx playwright test tests/globo.spec.ts

test('Globo logo bleed debug', async ({ page }) => {
  // Ensure your dev server is running at http://localhost:3000
  await page.goto('http://localhost:3000');

  // Select the Globo logo image inside the work experience card
// Select the Globo logo image by its source
// Select the first Globo logo by its alt text
  const logo = page.getByRole('img', { name: 'Globo TV' }).first();
  await logo.waitFor({ state: 'visible', timeout: 15000 });
  await logo.waitFor({ state: 'visible', timeout: 15000 });

  // Evaluate computed styles on the element
  const styles = await logo.evaluate(el => {
    const cs = window.getComputedStyle(el);
    return {
      width: cs.width,
      height: cs.height,
      objectFit: cs.objectFit,
      margin: cs.margin,
      padding: cs.padding,
    };
  });
  console.log('Computed styles for Globo logo:', styles);

  // Take a screenshot for visual inspection
  await logo.screenshot({ path: 'globo-debug.png' });

  // Assert that the height is greater than or equal to the width (indicating bleed)
  const numericHeight = parseFloat(styles.height || '0');
  const numericWidth = parseFloat(styles.width || '0');
  expect(numericHeight).toBeGreaterThanOrEqual(numericWidth);
});

