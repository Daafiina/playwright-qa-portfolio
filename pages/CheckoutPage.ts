import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async addFirstProductToCart() {
    await this.page
      .getByRole('button', { name: 'Add to cart' })
      .first()
      .click();
  }

  async openCart() {
    await this.page.locator('.shopping_cart_link').click();
  }

  async startCheckout() {
    await this.page.getByRole('button', { name: 'Checkout' }).click();
  }

  async fillCustomerInformation(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.page.getByPlaceholder('First Name').fill(firstName);
    await this.page.getByPlaceholder('Last Name').fill(lastName);
    await this.page.getByPlaceholder('Zip/Postal Code').fill(postalCode);
  }

  async continueCheckout() {
    await this.page.getByRole('button', { name: 'Continue' }).click();
  }

  async verifyOverviewPage() {
    await expect(
      this.page.getByText('Checkout: Overview')
    ).toBeVisible();
  }

  async finishOrder() {
    await this.page.getByRole('button', { name: 'Finish' }).click();
  }

  async verifyOrderSuccess() {
    await expect(
      this.page.getByText('Thank you for your order!')
    ).toBeVisible();
  }
}