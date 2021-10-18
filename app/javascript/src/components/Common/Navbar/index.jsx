import React from "react";

import { Keyboard, Settings, UserCircle } from "@bigbinary/neeto-icons";
import { Toastr } from "neetoui";
import { Sidebar } from "neetoui/v2/layouts";
import { withRouter } from "react-router-dom";

import authenticationApi from "apis/authentication";
import { resetAuthTokens } from "apis/axios";
import { useAuthDispatch } from "contexts/auth";

//import AccountDropdown from "./AccountDropdown";
//import NavItem from "./NavItem";

const NavBar = () => {
  const authDispatch = useAuthDispatch();
  const handleLogout = async () => {
    try {
      await authenticationApi.logout();
      authDispatch({ type: "LOGOUT" });
      resetAuthTokens();
      window.location.href = "/";
    } catch (error) {
      Toastr.error(error);
    }
  };

  return (
    <div className="flex flex-row items-start justify-start">
      <Sidebar
        appName=""
        collapsible
        isCollapsed
        navLinks={[
          {
            icon: function noRefCheck() {
              return <Keyboard />;
            },
            label: "Notes",
            to: "/notes"
          },
          {
            icon: function noRefCheck() {
              return <UserCircle />;
            },
            label: "Contacts",
            to: "/contacts"
          },
          {
            icon: function noRefCheck() {
              return <Settings />;
            },
            label: "Settings",
            to: "/settings"
          }
        ]}
        profileInfo={{
          dropdownProps: [
            {
              label: "Edit",
              onClick: null
            },
            {
              label: "Logout",
              onClick: { handleLogout }
            }
          ],
          email: "oliver.smith@gmail.com",
          imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
          name: "Kieran Miller"
        }}
      />
    </div>
  );
};

export default withRouter(NavBar);
