# Regression Checklist

This checklist is used to verify that the core functionality of the SauceDemo application still works after changes or bug fixes.

## Login

- [ ] Valid user can log in successfully
- [ ] Invalid user cannot log in
- [ ] Empty username shows validation error
- [ ] Empty password shows validation error
- [ ] User is redirected to the Products page after successful login

## Products

- [ ] Products page loads successfully
- [ ] Product names are visible
- [ ] Product prices are displayed
- [ ] User can add a product to the cart
- [ ] Cart badge updates correctly

## Cart

- [ ] Added products appear in the cart
- [ ] User can remove a product from the cart
- [ ] Cart quantity updates after removing a product
- [ ] Checkout button is available

## Checkout

- [ ] User can open the checkout page
- [ ] First name field accepts input
- [ ] Last name field accepts input
- [ ] Postal code field accepts input
- [ ] Missing required fields show validation errors
- [ ] User can continue to checkout overview
- [ ] Order can be completed successfully
- [ ] Success message is displayed after order completion

## API

- [ ] GET users returns HTTP 200
- [ ] Users response contains expected data
- [ ] POST user returns HTTP 201
- [ ] Invalid endpoint returns HTTP 404

## Cross-Browser

- [ ] Core tests pass in Chromium
- [ ] Core tests pass in Firefox
- [ ] Core tests pass in WebKit
