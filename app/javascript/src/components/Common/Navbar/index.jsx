import React from "react";
import AccountDropdown from "./AccountDropdown";
import NavItem from "./NavItem";
import { withRouter } from "react-router-dom";
import { useAuthDispatch } from "contexts/auth";
import authenticationApi from "apis/authentication";
import { resetAuthTokens } from "apis/axios";
import { Toastr } from "neetoui";

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
    <div className="bg-gray-100 nh-sidebar" key="sidebar">
      <div className="nh-logo">
        <div className="flex items-center justify-center w-8 h-8 rounded-md">
          <i className="text-purple-500 ri-flashlight-fill ri-2x" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between w-full h-full">
        <div className="flex flex-col items-center justify-start w-full pt-4">
          <NavItem title="Notes" link="/notes" icon="ri-file-text-line" />
          <NavItem title="Contacts" link="/contacts" icon="ri-group-line" />
          <NavItem
            title="Settings"
            link="/settings"
            icon="ri-settings-2-line"
            subLinks={[
              { title: "Change password", link: "/my/password/edit" },
              { title: "My Profile", link: "/my/profile" },
            ]}
          />
        </div>
        <div className="mb-4">
          <AccountDropdown handleLogout={handleLogout} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(NavBar);
