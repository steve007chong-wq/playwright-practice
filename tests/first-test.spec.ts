   import { test, expect } from '@playwright/test';

   test('Check DemoQA Title', async ({ page }) => {
     // 1. Go to the website
     await page.goto('https://demoqa.com');

     // 2. Check if the page loaded successfully
     // We'll check for a visible element instead of title
     await expect(page.locator('text=Elements')).toBeVisible();
   });