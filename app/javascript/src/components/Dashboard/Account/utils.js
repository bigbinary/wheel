export const buildProfileFormInitialValues = user => ({
  email: user.email,
  firstName: user.first_name,
  lastName: user.last_name,
  password: "",
});
