import { SETTINGS_NAVLINKS } from "./constants";

export const getActiveNavLink = key =>
  SETTINGS_NAVLINKS.find(navlink => key === navlink.key);

export const buildProfileFormInitialValues = user => ({
  firstName: user.first_name,
  lastName: user.last_name,
});

export const buildEmailFormInitialValues = user => ({
  email: user.email,
});
