import { test, expect } from '@playwright/test';

test('GET users API returns successful response', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  expect(response.status()).toBe(200);

  const users = await response.json();

  expect(users.length).toBeGreaterThan(0);

  expect(users[0]).toHaveProperty('name');
  expect(users[0]).toHaveProperty('email');

});

test('POST API creates a new user', async ({ request }) => {

  const response = await request.post(
    'https://jsonplaceholder.typicode.com/users',
    {
      data: {
        name: 'Dafina Aliji',
        email: 'dafina@test.com'
      }
    }
  );

  expect(response.status()).toBe(201);

  const user = await response.json();

  expect(user.name).toBe('Dafina Aliji');
  expect(user.email).toBe('dafina@test.com');
  expect(user).toHaveProperty('id');

});

test("GET invalid endpoint returns 404", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/invalid-endpoint"
  );

  expect(response.status()).toBe(404);
});