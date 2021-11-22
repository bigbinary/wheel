import React from "react";

const NotesIcon = () => <i className="text-2xl ri-file-text-line" />;
const SettingsIcon = () => <i className="text-2xl ri-settings-2-line" />;

export const APP_NAME = "Wheel";

export const PASSWORD_PATH = "/my/password/edit";
export const PROFILE_PATH = "/my/profile";
export const LOGOUT_PATH = "/logout";

export const SIDENAV_LINKS = [
  {
    label: "Notes",
    to: "/notes",
    icon: NotesIcon,
  },
  {
    label: "Settings",
    to: "/settings",
    icon: SettingsIcon,
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
