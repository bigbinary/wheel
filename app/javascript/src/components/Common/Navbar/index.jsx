import React, { useState } from "react";

import { UserCircle, Inbox, Text } from "@bigbinary/neeto-icons";
import { Toastr } from "neetoui/v2";
import { Sidebar } from "neetoui/v2/layouts";
import { withRouter, useHistory } from "react-router-dom";

import authenticationApi from "apis/authentication";
import { resetAuthTokens } from "apis/axios";
import { useAuthDispatch } from "contexts/auth";
import { useUserState } from "contexts/user";

const NavBar = () => {
  const authDispatch = useAuthDispatch();
  const { user } = useUserState();
  const [isCollapsed, setCollapsed] = useState(true);
  const history = useHistory();
  const userProfile = user ? `${user.first_name} ${user.last_name}` : null;

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

  const dropdownRedirect = url => {
    history.push(url);
  };

  return (
    <>
      <Sidebar
        appName="neetoui challange"
        isCollapsed={isCollapsed}
        navLinks={[
          {
            icon: Text,
            label: "Notes",
            to: "/notes",
          },
          {
            icon: UserCircle,
            label: "Contacts",
            to: "/contacts",
          },
          {
            icon: Inbox,
            label: "Settings",
            to: "/settings",
          },
        ]}
        onCollapse={() => setCollapsed(!isCollapsed)}
        organizationInfo={{
          logo: <NeetoLogo />,
        }}
        profileInfo={{
          dropdownProps: [
            {
              label: "Edit",
              onClick: () => dropdownRedirect("/my/profile"),
            },
            {
              label: "Logout",
              onClick: handleLogout,
            },
          ],
          imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
          name: userProfile,
        }}
      />
    </>
  );
};

export default withRouter(NavBar);

export const NeetoLogo = () => (
  <svg
    width="36"
    height="40"
    viewBox="0 0 36 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 1.8025C19.1436 0.730708 16.8564 0.730708 15 1.8025L3.6795 8.3384C1.8231 9.4102 0.679504 11.391 0.679504 13.5346V23.075L10.2572 13.4973C11.9024 11.8521 14.7131 12.6248 15.2861 14.8799L18.3368 26.8867C18.5431 27.699 19.5972 27.9123 20.1032 27.2442L33.64 9.37001C33.2558 8.9714 32.8133 8.62289 32.3205 8.3384L21 1.8025ZM34.817 11.1286L21.6975 28.4517C20.1796 30.4559 17.0175 29.816 16.3984 27.3792L13.3477 15.3724C13.1567 14.6207 12.2198 14.3631 11.6714 14.9115L0.679504 25.9034V26.6064C0.679504 28.7499 1.8231 30.7307 3.6795 31.8025L15 38.3384C16.8564 39.4102 19.1436 39.4102 21 38.3384L32.3205 31.8025C34.1769 30.7307 35.3205 28.7499 35.3205 26.6064V13.5346C35.3205 12.6923 35.144 11.8753 34.817 11.1286Z"
      fill="#2F3941"
    />
  </svg>
);
