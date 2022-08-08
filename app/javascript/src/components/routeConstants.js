import Login from "components/Authentication/Login";
import PasswordReset from "components/Authentication/ResetPassword";
import Signup from "components/Authentication/Signup";
import Dashboard from "components/Dashboard";
import Contacts from "components/Dashboard/Contacts";
import Notes from "components/Dashboard/Notes";
import Settings from "components/Dashboard/Settings";

export const DASHBOARD_PATH = "/";
export const NOTES_PATH = "/notes";
export const CONTACTS_PATH = "/contacts";
export const CHANGE_PASSWORD_PATH = "/settings?tab=password";
export const PROFILE_PATH = "/settings?tab=profile";
export const SETTINGS_PATH = "/settings";
export const LOGIN_PATH = "/login";
export const SIGNUP_PATH = "/signup";
export const RESET_PASSWORD_PATH = "/my/password/new";

export const AUTH_ROUTES = [
  {
    path: RESET_PASSWORD_PATH,
    component: PasswordReset,
  },
  {
    path: SIGNUP_PATH,
    component: Signup,
  },
  {
    path: LOGIN_PATH,
    component: Login,
  },
];

export const PRIVATE_ROUTES = [{ path: DASHBOARD_PATH, component: Dashboard }];

export const DASHBOARD_ROUTES = [
  {
    path: NOTES_PATH,
    component: Notes,
  },
  {
    path: CONTACTS_PATH,
    component: Contacts,
  },
  {
    path: SETTINGS_PATH,
    component: Settings,
  },
];
