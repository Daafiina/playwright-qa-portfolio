# Playwright QA Automation Portfolio

A QA Automation portfolio project built with Playwright and TypeScript.

The project demonstrates UI testing, end-to-end testing, API testing, Page Object Model, environment configuration, and cross-browser testing.

## Technologies

- Playwright
- TypeScript
- Node.js
- REST API Testing
- Git
- GitHub
- GitHub Actions

## Project Structure

```text
playwright-qa-portfolio/
│
├── data/
│   └── testData.ts
│
├── pages/
│   ├── LoginPage.ts
│   └── CheckoutPage.ts
│
├── tests/
│   ├── login.spec.ts
│   ├── checkout.spec.ts
│   └── api.spec.ts
│
├── .env.example
├── playwright.config.ts
├── package.json
└── README.md
```

## Test Scenarios

### Login Testing

- Login with valid credentials
- Login with invalid credentials
- Validate successful login
- Validate login error message

### End-to-End Checkout Testing

- Login to the application
- Add a product to the cart
- Open shopping cart
- Start checkout
- Fill customer information
- Validate checkout overview
- Complete the order
- Validate successful order

### API Testing

- GET users
- Validate HTTP 200 response
- Validate JSON response data
- POST a new user
- Validate HTTP 201 response
- Validate returned user data
- Test invalid endpoint
- Validate HTTP 404 response

## Page Object Model

The project uses Page Object Model to separate page logic from test scenarios.

Example:

```text
pages/
├── LoginPage.ts
└── CheckoutPage.ts
```

This makes the tests cleaner, reusable, and easier to maintain.

## Environment Variables

Create a `.env` file based on `.env.example`.

Example:

```env
BASE_URL=https://www.saucedemo.com
VALID_USERNAME=standard_user
VALID_PASSWORD=your_password
INVALID_USERNAME=wrong_user
INVALID_PASSWORD=wrong_password
FIRST_NAME=Test
LAST_NAME=User
POSTAL_CODE=10000
```

The `.env` file is ignored by Git and should not be committed.

## Run the Project

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run Playwright UI:

```bash
npx playwright test --ui
```

Open the HTML report:

```bash
npx playwright show-report
```

## Cross-Browser Testing

Tests are executed on:

- Chromium
- Firefox
- WebKit

## Debugging

The project is configured to:

- Capture screenshots when a test fails
- Retain video on test failure
- Record Playwright trace on retry

## CI

GitHub Actions automatically runs the Playwright test suite on repository updates.

## Test Applications

UI testing:

- SauceDemo

API testing:

- JSONPlaceholder

## Purpose

This project was created to practice and demonstrate QA Automation skills including UI testing, API testing, end-to-end testing, test organization, debugging, and automation best practices.
