import Login from "components/Authentication/Login";
import PasswordReset from "components/Authentication/ResetPassword";
import Signup from "components/Authentication/Signup";
import Dashboard from "components/Dashboard";
import PasswordEdit from "components/Dashboard/Account/Password/Edit";
import Profile from "components/Dashboard/Account/Profile";
import Notes from "components/Dashboard/Notes";

export const DASHBOARD_PATH = "/";
export const NOTES_PATH = "/notes";
export const CHANGE_PASSWORD_PATH = "/my/password/edit";
export const PROFILE_PATH = "/my/profile";
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
    path: CHANGE_PASSWORD_PATH,
    component: PasswordEdit,
  },
  {
    path: PROFILE_PATH,
    component: Profile,
  },
];
