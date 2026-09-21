import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { users, checkoutData } from '../data/testData';

test('User can complete checkout form', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.open();

  await loginPage.login(
    users.validUser.username,
    users.validUser.password
  );

  await checkoutPage.addFirstProductToCart();
  await checkoutPage.openCart();
  await checkoutPage.startCheckout();

  await checkoutPage.fillCustomerInformation(
    checkoutData.firstName,
    checkoutData.lastName,
    checkoutData.postalCode
  );

  await checkoutPage.continueCheckout();
  await checkoutPage.verifyOverviewPage();

  await checkoutPage.finishOrder();
  await checkoutPage.verifyOrderSuccess();
});