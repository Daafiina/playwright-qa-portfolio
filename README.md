# Playwright QA Automation Portfolio

A QA Automation portfolio project built with **Playwright** and **TypeScript** to demonstrate practical skills in UI testing, end-to-end testing, API testing, cross-browser and mobile testing, Page Object Model (POM), QA documentation, debugging, and CI with GitHub Actions.

## Project Highlights

- Automated UI and end-to-end testing with Playwright
- Automated REST API testing
- Positive and negative test scenarios
- Page Object Model (POM)
- Test data separated from test logic
- Environment variables with `.env`
- Cross-browser testing
- Mobile device emulation
- Screenshots and videos on failure
- Playwright traces for debugging
- Manual test cases
- Sample bug report
- Regression checklist
- GitHub Actions CI

## Technologies

- Playwright
- TypeScript
- Node.js
- REST APIs
- Git
- GitHub
- GitHub Actions

## Project Structure

```text
playwright-qa-portfolio/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── data/
│   └── testData.ts
│
├── docs/
│   ├── test-cases.md
│   ├── bug-report.md
│   └── regression-checklist.md
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
├── .gitignore
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

## Automated Test Scenarios

### Login Testing

- Login with valid credentials
- Login with invalid credentials
- Login with empty username
- Login with empty password
- Locked-out user login validation

### End-to-End Checkout Testing

- Login to the application
- Add a product to the cart
- Open the shopping cart
- Start checkout
- Fill customer information
- Validate checkout overview
- Complete the order
- Validate successful order

### API Testing

- GET users
- Validate HTTP `200` response
- Validate JSON response data
- POST a new user
- Validate HTTP `201` response
- Validate returned user data
- Test an invalid endpoint
- Validate HTTP `404` response

## Test Coverage

The project currently contains **9 automated test scenarios**.

They are executed across **5 browser/device projects**:

- Chromium
- Firefox
- WebKit
- Mobile Chrome — Pixel 5
- Mobile Safari — iPhone 12

This results in up to **45 Playwright test executions** when the full suite is run locally.

## Page Object Model

The project uses the **Page Object Model (POM)** to separate page-specific actions and selectors from test scenarios.

Example:

```text
pages/
├── LoginPage.ts
└── CheckoutPage.ts
```

This keeps the tests easier to read, reuse, and maintain.

## Test Data

Reusable test data is stored separately in:

```text
data/testData.ts
```

Environment-dependent values are loaded from `.env`.

## Environment Variables

Create a `.env` file in the project root based on `.env.example`.

Example:

```env
BASE_URL=https://www.saucedemo.com
VALID_USERNAME=standard_user
VALID_PASSWORD=secret_sauce
INVALID_USERNAME=wrong_user
INVALID_PASSWORD=wrong_password
FIRST_NAME=Test
LAST_NAME=User
POSTAL_CODE=10000
```

The `.env` file is ignored by Git and should not be committed.

> The credentials used in this portfolio belong to the public SauceDemo test application. For real projects, sensitive credentials should be stored securely, for example with GitHub Secrets.

## QA Documentation

The `docs/` folder demonstrates manual QA activities in addition to automation.

### Manual Test Cases

`docs/test-cases.md`

Contains documented positive, negative, functional, end-to-end, and API test cases.

### Sample Bug Report

`docs/bug-report.md`

Demonstrates a professional bug-report structure including:

- Bug ID
- Environment
- Preconditions
- Steps to reproduce
- Expected result
- Actual result
- Severity
- Priority
- Evidence

### Regression Checklist

`docs/regression-checklist.md`

Contains a checklist for validating core application functionality after changes or bug fixes.

## Debugging and Test Evidence

Playwright is configured to help investigate failed tests:

- Screenshot on failure
- Video retained on failure
- Trace recorded on retry
- HTML test report

## Continuous Integration

The repository includes a **GitHub Actions** workflow.

On repository updates, GitHub Actions:

1. Checks out the project
2. Installs Node.js dependencies
3. Installs Playwright browsers
4. Runs the automated Playwright test suite
5. Uploads the Playwright HTML report as an artifact

The CI workflow is configured with the environment variables required by the demo test application.

## Running the Project

### 1. Install dependencies

```bash
npm install
```

### 2. Install Playwright browsers

```bash
npx playwright install
```

### 3. Create `.env`

Copy `.env.example` to `.env` and provide the required values.

### 4. Run all tests

```bash
npx playwright test
```

### 5. Run tests in headed mode

```bash
npx playwright test --headed
```

### 6. Run Playwright UI mode

```bash
npx playwright test --ui
```

### 7. Open the HTML report

```bash
npx playwright show-report
```

## Test Applications

### UI / E2E Testing

**SauceDemo**  
A public demo web application designed for testing and automation practice.

### API Testing

**JSONPlaceholder**  
A public fake REST API used for testing and prototyping.

## Purpose

This project was created to practice and demonstrate practical **QA Automation** and **Software Testing** skills, including:

- Test planning
- Manual test case design
- Positive and negative testing
- UI automation
- End-to-end testing
- API automation
- Page Object Model
- Cross-browser testing
- Mobile testing
- Regression testing
- Bug reporting
- Debugging failed tests
- Continuous Integration

## Repository

https://github.com/Daafiina/playwright-qa-portfolio
