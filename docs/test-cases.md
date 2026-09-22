# Manual Test Cases

This document contains manual test cases for the SauceDemo application used in this QA Automation portfolio project.

## Test Case 1 - Login with valid credentials

**Test Case ID:** TC-LOGIN-001  
**Priority:** High  
**Type:** Positive Testing

### Preconditions

- User is on the SauceDemo login page.

### Test Data

- Username: `standard_user`
- Password: `secret_sauce`

### Steps

1. Open the SauceDemo login page.
2. Enter a valid username.
3. Enter a valid password.
4. Click the **Login** button.

### Expected Result

- User is successfully logged in.
- User is redirected to the Products page.
- The Products section is visible.

---

## Test Case 2 - Login with invalid credentials

**Test Case ID:** TC-LOGIN-002  
**Priority:** High  
**Type:** Negative Testing

### Preconditions

- User is on the SauceDemo login page.

### Test Data

- Username: `wrong_user`
- Password: `wrong_password`

### Steps

1. Open the SauceDemo login page.
2. Enter an invalid username.
3. Enter an invalid password.
4. Click the **Login** button.

### Expected Result

- User is not logged in.
- An error message is displayed.

---

## Test Case 3 - Login with empty username

**Test Case ID:** TC-LOGIN-003  
**Priority:** Medium  
**Type:** Negative Testing

### Steps

1. Open the SauceDemo login page.
2. Leave the username field empty.
3. Enter a valid password.
4. Click the **Login** button.

### Expected Result

- Login should fail.
- An error message indicating that the username is required should be displayed.

---

## Test Case 4 - Login with empty password

**Test Case ID:** TC-LOGIN-004  
**Priority:** Medium  
**Type:** Negative Testing

### Steps

1. Open the SauceDemo login page.
2. Enter a valid username.
3. Leave the password field empty.
4. Click the **Login** button.

### Expected Result

- Login should fail.
- An error message indicating that the password is required should be displayed.

---

## Test Case 5 - Add product to cart

**Test Case ID:** TC-CART-001  
**Priority:** High  
**Type:** Functional Testing

### Preconditions

- User is logged in.

### Steps

1. Open the Products page.
2. Click **Add to cart** for a product.
3. Open the shopping cart.

### Expected Result

- The selected product should appear in the shopping cart.
- Cart quantity should be updated.

---

## Test Case 6 - Remove product from cart

**Test Case ID:** TC-CART-002  
**Priority:** Medium  
**Type:** Functional Testing

### Preconditions

- User is logged in.
- A product has already been added to the shopping cart.

### Steps

1. Open the shopping cart.
2. Click **Remove** for the product.

### Expected Result

- The product should be removed from the cart.
- Cart quantity should be updated.

---

## Test Case 7 - Complete checkout successfully

**Test Case ID:** TC-CHECKOUT-001  
**Priority:** High  
**Type:** End-to-End Testing

### Preconditions

- User is logged in.
- At least one product is in the shopping cart.

### Test Data

- First Name: `Dafina`
- Last Name: `Aliji`
- Postal Code: `10000`

### Steps

1. Open the shopping cart.
2. Click **Checkout**.
3. Enter first name.
4. Enter last name.
5. Enter postal code.
6. Click **Continue**.
7. Review the checkout overview.
8. Click **Finish**.

### Expected Result

- The order should be completed successfully.
- A success message should be displayed.

---

## Test Case 8 - Checkout with missing required information

**Test Case ID:** TC-CHECKOUT-002  
**Priority:** High  
**Type:** Negative Testing

### Preconditions

- User is logged in.
- At least one product is in the shopping cart.

### Steps

1. Open the shopping cart.
2. Click **Checkout**.
3. Leave one or more required fields empty.
4. Click **Continue**.

### Expected Result

- Checkout should not continue.
- A validation error message should be displayed.

---

## Test Case 9 - Invalid API endpoint

**Test Case ID:** TC-API-001  
**Priority:** Medium  
**Type:** Negative API Testing

### Steps

1. Send a GET request to an invalid API endpoint.
2. Check the HTTP response status.

### Expected Result

- API should return HTTP status `404`.

---

## Test Case 10 - Get users API

**Test Case ID:** TC-API-002  
**Priority:** Medium  
**Type:** API Testing

### Steps

1. Send a GET request to `/users`.
2. Check the HTTP response status.
3. Validate the JSON response body.

### Expected Result

- API should return HTTP status `200`.
- Response should contain one or more users.
- User objects should contain fields such as `name` and `email`.
