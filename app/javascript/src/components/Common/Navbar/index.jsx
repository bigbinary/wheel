import React, { Component } from "react";
import NavItem from "./NavItem";
import { withRouter } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="bg-gray-100 nh-sidebar" key="sidebar">
        <div className="nh-logo">
          <div className="flex items-center justify-center w-8 h-8 rounded-md">
            <i className="text-purple-500 ri-flashlight-fill ri-2x" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full pt-4">
          <NavItem link="/features" icon="ri-coupon-2-line" />
          <NavItem link="/contact" icon="ri-user-line" />
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
