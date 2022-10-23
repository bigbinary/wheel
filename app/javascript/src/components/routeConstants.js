import Login from "components/Authentication/Login";
import PasswordReset from "components/Authentication/ResetPassword";
import Signup from "components/Authentication/Signup";
import Dashboard from "components/Dashboard";
import Abbreviations from "components/Dashboard/Abbreviations";
import Annexures from "components/Dashboard/Annexures";
import Introductions from "components/Dashboard/Introductions";
import MainSections from "components/Dashboard/MainSections";
import Notes from "components/Dashboard/Notes";
import Settings from "components/Dashboard/Settings";
import Users from "components/Dashboard/Users";

export const DASHBOARD_PATH = "/";
export const NOTES_PATH = "/notes";
export const INTRODUCTION_PATH = "/introductions";
export const ABBREVIATIONS_PATH = "/abbreviations";
export const MAIN_SECTIONS_PATH = "/main_sections";
export const ANNEXURES_PATH = "/annexures";
export const USERS_PATH = "/users";
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
    path: INTRODUCTION_PATH,
    component: Introductions,
  },
  {
    path: ABBREVIATIONS_PATH,
    component: Abbreviations,
  },
  {
    path: MAIN_SECTIONS_PATH,
    component: MainSections,
  },
  {
    path: ANNEXURES_PATH,
    component: Annexures,
  },
  {
    path: USERS_PATH,
    component: Users,
  },
  {
    path: SETTINGS_PATH,
    component: Settings,
  },
];
