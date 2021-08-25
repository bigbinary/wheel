import React from "react";

import { Avatar, Dropdown } from "neetoui";
import { NavLink } from "react-router-dom";

import { useUserState } from "contexts/user";

export default function AccountDropdown({ handleLogout }) {
  const { user } = useUserState();
  const contact = user
    ? { name: `${user.first_name} ${user.last_name}` }
    : null;
  return (
    <Dropdown
      position="right-top"
      interactionKind="hover"
      customTarget={() => (
        <Avatar className="cursor-pointer" size={32} contact={contact} />
      )}
      closeOnSelect
    >
      <li className="font-semibold text-gray-800 pointer-events-none">
        Account Settings
      </li>
      <div>
        <NavLink
          to="/my/profile"
          className="w-full nui-dropdown--item"
          activeClassName="active"
        >
          <span>My profile</span>
        </NavLink>
        <NavLink
          to="/my/password/edit"
          className="w-full nui-dropdown--item"
          activeClassName="active"
        >
          <span>Change password</span>
        </NavLink>
        <div onClick={handleLogout} className="w-full nui-dropdown--item">
          Logout
        </div>
      </div>
    </Dropdown>
  );
}
