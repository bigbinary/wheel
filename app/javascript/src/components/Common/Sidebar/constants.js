import {
  Notes,
  Settings,
  ListDot,
  BookOpen,
  UserCircle,
  Column,
} from "neetoicons";

export const APP_NAME = "Wheel";

export const PASSWORD_PATH = "/my/password/edit";
export const PROFILE_PATH = "/my/profile";
export const LOGOUT_PATH = "/logout";

export const SIDENAV_LINKS = [
  {
    label: "Introduction",
    to: "/introductions",
    icon: Notes,
  },
  {
    label: "Abbreviations",
    to: "/abbreviations",
    icon: ListDot,
  },
  {
    label: "Main Sections",
    to: "/main_sections",
    icon: BookOpen,
  },
  {
    label: "Annexures",
    to: "/annexures",
    icon: Column,
  },
  {
    label: "Users",
    to: "/users",
    icon: UserCircle,
  },
  {
    label: "Settings",
    to: "/settings",
    icon: Settings,
  },
];
