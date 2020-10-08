import React from "react";
import { Link } from "react-router-dom";

import { useAuthState } from "contexts/auth-context";
import AccountDropdown from "./AccountDropdown";

const Navbar = () => {
  const { isLoggedIn } = useAuthState();

  return (
    <div className="header bg-white border-b shadow-sm py-4 mb-6">
      <nav className="container mx-auto flex flex-grow-1 px-4">
        <Link className="text-2xl font-semibold hover:text-teal-600" to="/">
          Wheel
        </Link>
        <div className="flex ml-auto items-center">
          <div className="nav-item">
            <Link
              className="nav-link text-base text-gray-800 ml-6 hover:text-teal-600"
              to="/features"
            >
              Features
            </Link>
          </div>
          <div className="nav-item">
            <Link
              className="nav-link text-base text-gray-800 ml-6 hover:text-teal-600"
              to="/contact"
            >
              Contact
            </Link>
          </div>
          {isLoggedIn ? (
            <AccountDropdown />
          ) : (
            <div className="nav-item">
              <Link
                className="nav-link text-base text-gray-800 ml-6 hover:text-teal-600"
                to="/login"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
