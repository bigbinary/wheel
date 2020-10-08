import React, { useEffect, useState } from "react";

import { useUserState } from "contexts/user-context";

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
    <div className="wrapper flex flex-grow">
      <div className="flex-col container mx-auto px-4">
        <div className="flex flex-col flex-grow h-full w-full items-center justify-center lg:w-5/12 mx-auto py-20">
          <h2 className="text-2xl text-center font-medium mb-5 text-gray-800">
            Basic Details
          </h2>
          <form
            className="simple_form bg-white / border shadow-sm / rounded-lg px-10 py-8 / w-full"
            id="edit_user"
          >
            <div className="form-group mb-8 email required user_email">
              <div>
                <label
                  className="email required control-label block mb-1 font-medium text-gray-600 text-sm tracking"
                  htmlFor="user_email"
                >
                  Email
                </label>
              </div>
              <div className="controls">
                <input
                  className="string email required form-control border border-gray-400 text-gray-800 focus:text-black / w-full px-3 py-2 rounded-md hover:border-gray-600 focus:border-gray-600 focus:outline-none transition duration-200 ease-in-out"
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
            <div className="form-group mb-8 string required user_first_name">
              <div>
                <label
                  className="string required control-label block mb-1 font-medium text-gray-600 text-sm tracking"
                  htmlFor="user_first_name"
                >
                  First name
                </label>
              </div>
              <div className="controls">
                <input
                  className="string required form-control border border-gray-400 text-gray-800 focus:text-black / w-full px-3 py-2 rounded-md / hover:border-gray-600 focus:border-gray-600 focus:outline-none / transition duration-200 ease-in-out"
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
            <div className="form-group mb-8 string required user_last_name">
              <div>
                <label
                  className="string required control-label block mb-1 font-medium text-gray-600 text-sm tracking"
                  htmlFor="user_last_name"
                >
                  Last name
                </label>
              </div>
              <div className="controls">
                <input
                  className="string required form-control border border-gray-400 text-gray-800 focus:text-black / w-full px-3 py-2 rounded-md / hover:border-gray-600 focus:border-gray-600 focus:outline-none / transition duration-200 ease-in-out"
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
            <div className="form-group mb-8 password required user_current_password">
              <div>
                <label
                  className="password required control-label block mb-1 font-medium text-gray-600 text-sm tracking"
                  htmlFor="user_current_password"
                >
                  Current password
                </label>
              </div>
              <div className="controls">
                <input
                  className="password required form-control border border-gray-400 text-gray-800 focus:text-black / w-full px-3 py-2 rounded-md / hover:border-gray-600 focus:border-gray-600 focus:outline-none / transition duration-200 ease-in-out"
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
              className="btn btn font-semibold text-base text-white / px-4 py-2 w-full rounded-md / bg-teal-600 border border-teal-600 / cursor-pointer / hover:opacity-75 / transition duration-200 ease-in-out"
              data-disable-with="Update"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
