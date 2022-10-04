import Email from "./Email";
import Password from "./Password";
import Profile from "./Profile";

// Note: This is not kept in constants.js to avoid dependency cycle
export const SETTINGS_NAVLINKS = [
  {
    key: "profile",
    label: "Profile",
    description: "Manage user",
    path: "/settings?tab=profile",
    component: Profile,
  },
  {
    key: "email",
    label: "Email",
    description: "Manage email",
    path: "/settings?tab=email",
    component: Email,
  },
  {
    key: "password",
    label: "Password",
    description: "Manage password",
    path: "/settings?tab=password",
    component: Password,
  },
];
