import React from "react";

const NotesIcon = () => <i className="text-2xl ri-file-text-line" />;
const SettingsIcon = () => <i className="text-2xl ri-settings-2-line" />;

export default {
  APP_NAME: "Wheel",

  PASSWORD_PATH: "/my/password/edit",
  PROFILE_PATH: "/my/profile",
  LOGOUT_PATH: "/logout",

  SIDENAV_LINKS: [
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
  ],
};
