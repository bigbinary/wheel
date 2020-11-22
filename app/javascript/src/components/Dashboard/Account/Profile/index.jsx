import React, { useEffect, useState } from "react";

import { useUserState } from "contexts/user";

const Profile = () => {
  const { user } = useUserState();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setFirstName(user.first_name);
      setLastName(user.last_name);
    }
  }, [user]);

  return (
    <div className="flex flex-grow w-full wrapper">
      <div className="w-full px-4">
        <div className="flex flex-col items-center justify-center flex-grow w-full h-full py-20 mx-auto lg:w-5/12">
          <h2 className="mb-5 text-2xl font-medium text-center text-gray-800">
            Basic Details
          </h2>
          <form
            className="w-full px-10 py-8 bg-white border rounded-lg shadow-sm"
            id="edit_user"
          >
            <div className="mb-8 form-group email required user_email">
              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-600 email required control-label tracking"
                  htmlFor="user_email"
                >
                  Email
                </label>
              </div>
              <div className="controls">
                <input
                  className="w-full px-3 py-2 text-gray-800 transition duration-200 ease-in-out border border-gray-400 rounded-md string email required form-control focus:text-black / hover:border-gray-600 focus:border-gray-600 focus:outline-none"
                  autoFocus
                  required
                  aria-required="true"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  name="email"
                  id="user_email"
                />
              </div>
            </div>
            <div className="mb-8 form-group string required user_first_name">
              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-600 string required control-label tracking"
                  htmlFor="user_first_name"
                >
                  First name
                </label>
              </div>
              <div className="controls">
                <input
                  className="w-full px-3 py-2 text-gray-800 transition duration-200 ease-in-out border border-gray-400 rounded-md string required form-control focus:text-black / hover:border-gray-600 focus:border-gray-600 focus:outline-none"
                  required
                  aria-required="true"
                  type="text"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  name="first_name"
                  id="user_first_name"
                />
              </div>
            </div>
            <div className="mb-8 form-group string required user_last_name">
              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-600 string required control-label tracking"
                  htmlFor="user_last_name"
                >
                  Last name
                </label>
              </div>
              <div className="controls">
                <input
                  className="w-full px-3 py-2 text-gray-800 transition duration-200 ease-in-out border border-gray-400 rounded-md string required form-control focus:text-black / hover:border-gray-600 focus:border-gray-600 focus:outline-none"
                  required
                  aria-required="true"
                  type="text"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  name="last_name"
                  id="user_last_name"
                />
              </div>
            </div>
            <div className="mb-8 form-group password required user_current_password">
              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-600 password required control-label tracking"
                  htmlFor="user_current_password"
                >
                  Current password
                </label>
              </div>
              <div className="controls">
                <input
                  className="w-full px-3 py-2 text-gray-800 transition duration-200 ease-in-out border border-gray-400 rounded-md password required form-control focus:text-black / hover:border-gray-600 focus:border-gray-600 focus:outline-none"
                  required
                  aria-required="true"
                  type="password"
                  name="current_password"
                  id="user_current_password"
                  value={currentPassword}
                  onChange={e => setCurrentPassword(e.target.value)}
                />
              </div>
            </div>
            <input
              type="submit"
              name="commit"
              value="Update"
              className="w-full px-4 py-2 text-base font-semibold text-white transition duration-200 ease-in-out bg-teal-600 border border-teal-600 rounded-md cursor-pointer btn / hover:opacity-75"
              data-disable-with="Update"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
