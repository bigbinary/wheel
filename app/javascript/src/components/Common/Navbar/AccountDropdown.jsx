import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAuthDispatch } from "contexts/auth";
import { useUserState } from "contexts/user";
import AuthenticationAPI from "apis/authentication";
import { resetAuthTokens } from "apis/axios";

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const authDispatch = useAuthDispatch();
  const { user } = useUserState();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await AuthenticationAPI.logout();
      authDispatch({ type: "LOGOUT" });
      resetAuthTokens();
      history.push("/login");
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div className="relative inline-block ml-6 dropdown">
      <button
        className="flex items-center text-base text-gray-800 nav-link hover:text-teal-600 focus:outline-none"
        data-behavior="dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="mr-1">
          {user && user.first_name + " " + user.last_name}
        </div>
        <svg
          className="w-4 h-4 fill-current"
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
            className="fixed top-0 left-0 z-10 w-full h-full bg-transparent dropdown-overlay"
            data-behavior="dropdown-toggle"
            onClick={() => setIsOpen(false)}
          ></div>
          <ul className="absolute right-0 z-20 pt-1 mt-2 text-gray-700 bg-white border rounded-md shadow-md dropdown-menu">
            <li>
              <Link
                className="block px-4 py-2 whitespace-no-wrap rounded-t hover:bg-gray-200 hover:text-gray-800"
                to="/my/profile"
              >
                My Account
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-2 whitespace-no-wrap rounded-t hover:bg-gray-200 hover:text-gray-800"
                to="/my/password/edit"
              >
                Change Password
              </Link>
            </li>
            <li>
              <button
                className="block w-full px-4 py-2 text-left whitespace-no-wrap rounded-t hover:bg-gray-200 hover:text-gray-800"
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
