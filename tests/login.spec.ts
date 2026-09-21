import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../data/testData';

test.describe('Login Tests', () => {

  test('User can login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(
      users.validUser.username,
      users.validUser.password
    );

    await loginPage.verifySuccessfulLogin();
  });

  test('User cannot login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(
      users.invalidUser.username,
      users.invalidUser.password
    );

    await loginPage.verifyLoginError();
  });

});