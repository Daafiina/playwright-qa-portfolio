export const users = {
  validUser: {
    username: process.env.VALID_USERNAME!,
    password: process.env.VALID_PASSWORD!,
  },

  invalidUser: {
    username: process.env.INVALID_USERNAME!,
    password: process.env.INVALID_PASSWORD!,
  },

  lockedUser: {
    username: "locked_out_user",
    password: "secret_sauce",
  },
};

export const checkoutData = {
  firstName: process.env.FIRST_NAME!,
  lastName: process.env.LAST_NAME!,
  postalCode: process.env.POSTAL_CODE!,
};
