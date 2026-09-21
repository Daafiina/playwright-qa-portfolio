import { test, expect } from '@playwright/test';

test('User can complete checkout form', async ({ page }) => {

  // 1. Open website
  await page.goto('https://www.saucedemo.com/');

  // 2. Login
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // 3. Add product to cart
  await page.getByRole('button', { name: 'Add to cart' }).first().click();

  // 4. Open cart
  await page.locator('.shopping_cart_link').click();

  // 5. Go to checkout
  await page.getByRole('button', { name: 'Checkout' }).click();

  // 6. Fill checkout form
  await page.getByPlaceholder('First Name').fill('Dafina');
  await page.getByPlaceholder('Last Name').fill('Aliji');
  await page.getByPlaceholder('Zip/Postal Code').fill('10000');

  // 7. Continue
  await page.getByRole('button', { name: 'Continue' }).click();

  // 8. Check checkout overview
  await expect(page.getByText('Checkout: Overview')).toBeVisible();

  // 9. Finish order
  await page.getByRole('button', { name: 'Finish' }).click();

  // 10. Verify successful order
  await expect(
    page.getByText('Thank you for your order!')
  ).toBeVisible();

});