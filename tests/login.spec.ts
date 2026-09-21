import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {

  test('User can login with valid credentials', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/inventory/);

    await expect(
      page.getByText('Products')
    ).toBeVisible();

  });

  test('User cannot login with invalid credentials', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('wrong_user');
  await page.getByPlaceholder('Password').fill('wrong_password');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText(/Epic sadface/i)).toBeVisible();

});

});