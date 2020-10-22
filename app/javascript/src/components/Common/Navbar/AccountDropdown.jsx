import React from "react";
import { Avatar, Dropdown } from "nitroui";
import { NavLink } from "react-router-dom";
import { useUserState } from "contexts/user";

export default function AccountDropdown({ handleLogout }) {
  const { user } = useUserState();
  const name = `${user.first_name} ${user.last_name}`;
  return (
    <Dropdown
      popoverClassName="pl-6"
      position="right-top"
      interactionKind="hover"
      customTarget={() => (
        <Avatar className="cursor-pointer" size={32} contact={{ name }} />
      )}
      closeOnSelect
    >
      <li className="font-semibold text-gray-800 pointer-events-none">
        {name}
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
