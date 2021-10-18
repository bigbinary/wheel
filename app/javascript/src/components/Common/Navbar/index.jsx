import React from "react";

import { UserCircle, NeetoInsights } from "@bigbinary/neeto-icons";
import { Sidebar } from "@bigbinary/neetoui/v2/layouts";
import { withRouter } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-row items-start justify-start">
      <Sidebar
        isCollapsed={true}
        organizationInfo={{}}
        navLinks={[
          {
            label: "Notes",
            to: "/notes",
            icon: () => NotesIcon
          },
          {
            label: "Contacts",
            to: "/login",
            icon: () => <UserCircle color="#1e1e20" size={24} />
          },
          {
            label: "Settings",
            to: "/my/profile",
            icon: () => <NeetoInsights color="#1e1e20" size={24} />
          }
        ]}
        profileInfo={{
          dropdownProps: [
            {
              label: "Edit"
            },
            {
              label: "Logout"
            }
          ],
          name: "Kieran Miller",
          email: "kieran@miller.com",
          imageUrl: "https://randomuser.me/api/portraits/women/90.jpg"
        }}
      />
    </div>
  );
};

// sidebar icons

const NotesIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_81:3035)">
      <path
        d="M20.42 20.0187L16 10.6853L11.5787 20.0173"
        stroke="#68737D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4627 18.1507H19.5333"
        stroke="#68737D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 28.0187H8C5.79067 28.0187 4 26.228 4 24.0187V8.01868C4 5.80934 5.79067 4.01868 8 4.01868H24C26.2093 4.01868 28 5.80934 28 8.01868V24.0187C28 26.228 26.2093 28.0187 24 28.0187Z"
        stroke="#68737D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_81:3035">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default withRouter(NavBar);
