import React from "react";

// import { Toastr } from "neetoui";

// import authenticationApi from "apis/authentication";
// import { resetAuthTokens } from "apis/axios";
//import { useAuthDispatch } from "contexts/auth";

//import AccountDropdown from "./AccountDropdown";
//import NavItem from "./NavItem";

import { UserCircle } from "@bigbinary/neeto-icons";
import { Sidebar } from "@bigbinary/neetoui/v2/layouts";
import { withRouter } from "react-router-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import MenubarC from "components/Common/MenubarC";
import MenubarN from "components/Common/MenubarN";

import icon from "./Group.png";
import inbox from "./Inbox.jpg";
//import { none } from "ramda";

const NavBar = () => {
  //const authDispatch = useAuthDispatch();
  // const handleLogout = async () => {
  //   try {
  //     await authenticationApi.logout();
  //     authDispatch({ type: "LOGOUT" });
  //     resetAuthTokens();
  //     window.location.href = "/";
  //   } catch (error) {
  //     Toastr.error(error);
  //   }
  // };

  return (
    <BrowserRouter>
      <div className="flex flex-row items-start justify-start">
        <Sidebar
          // organizationInfo={{
          //   name: 'neetoUI',
          //   subdomain: 'neetoui.netlify.app'
          // }}
          profileInfo={{
            dropdownProps: [
              {
                label: "Edit",
                onClick: function noRefCheck() {}
              },
              {
                label: "Logout",
                onClick: function noRefCheck() {}
              }
            ],
            email: "kieranmiller@gmail.com",
            imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
            name: "Kieran Miller"
          }}
          navLinks={[
            {
              icon: function noRefCheck() {
                return <img src={icon} />;
              },
              label: "Notes",
              to: "/components/Common/MenubarN"
            },
            {
              icon: function noRefCheck() {
                return <UserCircle />;
              },
              label: "Contact",
              to: "/components/Common/MenubarC"
            },
            {
              label: "Settings",
              to: "/",
              icon: function noRefCheck() {
                return <img src={inbox} />;
              }
            }
          ]}
        />
        <div className="relative flex flex-col flex-grow h-screen overflow-auto">
          <Switch>
            <Route
              component={function noRefCheck() {
                return <MenubarN />;
              }}
              path="/components/Common/MenubarN"
            />
            <Route
              component={function noRefCheck() {
                return <MenubarC />;
              }}
              path="/components/Common/MenubarC"
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>

    // <div className="bg-gray-100 nh-sidebar" key="sidebar">
    //   <div className="nh-logo">
    //     <div className="flex items-center justify-center w-8 h-8 rounded-md">
    //       <i className="text-purple-500 ri-flashlight-fill ri-2x" />
    //     </div>
    //   </div>
    //   <div className="flex flex-col items-center justify-between w-full h-full">
    //     <div className="flex flex-col items-center justify-start w-full pt-4">
    //       <NavItem title="Notes" link="/notes" icon="ri-file-text-line" />
    //       <NavItem
    //         title="Settings"
    //         link="/settings"
    //         icon="ri-settings-2-line"
    //         subLinks={[
    //           { title: "Change password", link: "/my/password/edit" },
    //           { title: "My Profile", link: "/my/profile" }
    //         ]}
    //       />
    //       <UserCircle />
    //     </div>
    //     <div className="mb-4">
    //       <AccountDropdown handleLogout={handleLogout} />
    //     </div>
    //   </div>
    // </div>
  );
};

export default withRouter(NavBar);
