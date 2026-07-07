import { test, expect } from '@playwright/test';

test('click existing element', async ({ page }) => {
  await page.goto('https://demoqa.com');
  
  // ✅ Click "Elements" (which exists on the page)
  await page.click('text=Elements');
  
  // Verify we landed on Elements page
  await expect(page).toHaveURL(/elements/);
});