import { test, expect } from '@playwright/test';

test('Second Test', async ({ page }) => {
     // 1. Go to the website
     await page.goto('https://demoqa.com');

     await page.goto('https://demoqa.com/');
     await expect(page).toHaveTitle(/demosite/);
     await page.getByRole('link', { name: 'Elements' }).click();
     await page.getByRole('link', { name: 'Text Box' }).click();
     await page.getByRole('textbox', { name: 'Full Name' }).fill('Steve Chong');
     await page.getByRole('textbox', { name: 'name@example.com' }).fill('steve.chong@example.com');
     await page.getByRole('textbox', { name: 'Current Address' }).fill('123 Main St, Anytown, USA');
     await page.locator('#permanentAddress').fill('456 Elm St, Othertown, USA');
     await page.getByRole('button', { name: 'Submit' }).click();
   });