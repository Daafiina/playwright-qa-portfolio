import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { users } from "../data/testData";

test.describe("Login Tests", () => {
  test("User can login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(users.validUser.username, users.validUser.password);

    await loginPage.verifySuccessfulLogin();
  });

  test("User cannot login with invalid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(
      users.invalidUser.username,
      users.invalidUser.password,
    );

    await loginPage.verifyLoginError();
  });

  test("User cannot login with empty username", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login("", users.validUser.password);

    await loginPage.verifyErrorMessage("Epic sadface: Username is required");
  });

  test("User cannot login with empty password", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(users.validUser.username, "");

    await loginPage.verifyErrorMessage("Epic sadface: Password is required");
  });

  test("Locked out user cannot login", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(users.lockedUser.username, users.lockedUser.password);

    await loginPage.verifyErrorMessage(
      "Epic sadface: Sorry, this user has been locked out.",
    );
  });
});
