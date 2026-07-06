import { test, expect } from '@playwright/test';

test('Check DemoQA Title', async ({ page }) => {
  // 1. Go to the website
  await page.goto('https://demoqa.com');

  // 2. Check if the title contains "DEMOQA"
  // /DEMOQA/ is a pattern match (like checking a label)
  await expect(page).toHaveTitle(/demosite/);
});