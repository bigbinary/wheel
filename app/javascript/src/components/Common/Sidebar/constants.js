import { Text, UserCircle, Report } from "@bigbinary/neeto-icons";

export const APP_NAME = "Wheel";

export const PASSWORD_PATH = "/my/password/edit";
export const PROFILE_PATH = "/my/profile";
export const LOGOUT_PATH = "/logout";

export const SIDENAV_LINKS = [
  {
    label: "Notes",
    to: "/notes",
    icon: Text,
  },
  {
    label: "Contact",
    to: "/contacts",
    icon: UserCircle,
  },
  {
    label: "Settings",
    to: "/settings",
    icon: Report,
    items: [
      {
        label: "My Profile",
        to: "/my/profile",
      },
      {
        label: "Change Password",
        to: "/my/password/edit",
      },
    ],
  },
];
