import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.page.getByPlaceholder('Username').fill(username);
    await this.page.getByPlaceholder('Password').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async verifySuccessfulLogin() {
    await expect(this.page).toHaveURL(/inventory/);
    await expect(this.page.getByText('Products')).toBeVisible();
  }

  async verifyLoginError() {
    await expect(
      this.page.getByText(/Epic sadface/i)
    ).toBeVisible();
  }
}