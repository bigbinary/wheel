import React from "react";
import NavItem from "./NavItem";
import { withRouter } from "react-router-dom";
import { useAuthDispatch } from "contexts/auth";
import { logout } from "apis/authentication";
import { Toastr } from "common";

const NavBar = props => {
  const authDispatch = useAuthDispatch();
  const handleLogout = async () => {
    try {
      await logout();
      authDispatch({ type: "LOGOUT" });
      props.history.push("/login");
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
          <NavItem title="Features" link="/features" icon="ri-star-line" />
          <NavItem title="Users" link="/users" icon="ri-group-line" />
          <NavItem
            title="Contact"
            link="/contact"
            icon="ri-contacts-book-2-line"
          />
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
        <NavItem
          title="Logout"
          onClick={handleLogout}
          className="mb-4"
          icon="ri-logout-circle-line"
        />
      </div>
    </div>
  );
};

export default withRouter(NavBar);
