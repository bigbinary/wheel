import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAuthDispatch } from "contexts/auth-context";
import { useUserState } from "contexts/user-context";
import { logout } from "apis/authentication";

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const authDispatch = useAuthDispatch();
  const { user } = useUserState();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      authDispatch({ type: "LOGOUT" });
      history.push("/login");
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div className="dropdown inline-block relative ml-6">
      <button
        className="nav-link text-base text-gray-800 flex items-center hover:text-teal-600 focus:outline-none"
        data-behavior="dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="mr-1">
          {user && user.first_name + " " + user.last_name}
        </div>
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>{" "}
        </svg>
      </button>
      {isOpen && (
        <div
          className={"overflow-hidden " + isOpen ? "" : "hidden"}
          data-behavior="dropdown-menu"
        >
          <div
            className="dropdown-overlay bg-transparent top-0 left-0 w-full h-full fixed z-10"
            data-behavior="dropdown-toggle"
            onClick={() => setIsOpen(false)}
          ></div>
          <ul className="dropdown-menu bg-white shadow-md border absolute right-0 text-gray-700 pt-1 mt-2 rounded-md z-20">
            <li>
              <Link
                className="rounded-t hover:bg-gray-200 hover:text-gray-800 py-2 px-4 block whitespace-no-wrap"
                to="/my/profile"
              >
                My Account
              </Link>
            </li>
            <li>
              <Link
                className="rounded-t hover:bg-gray-200 hover:text-gray-800 py-2 px-4 block whitespace-no-wrap"
                to="/my/password/edit"
              >
                Change Password
              </Link>
            </li>
            <li>
              <button
                className="w-full text-left rounded-t hover:bg-gray-200 hover:text-gray-800 py-2 px-4 block whitespace-no-wrap"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
