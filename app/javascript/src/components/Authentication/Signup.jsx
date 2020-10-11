import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { signup } from "apis/users";
import { useAuthDispatch } from "contexts/auth";
import { useUserDispatch } from "contexts/user";

const Signup = ({ history }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [loading, setLoading] = useState(false);

  const authDispatch = useAuthDispatch();
  const userDispatch = useUserDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setLoading(true);
      const {
        data: { user, auth_token },
      } = await signup({
        user: {
          email,
          first_name: firstName,
          last_name: lastName,
          password: password,
          password_confirmation: passwordConfirmation,
        },
      });
      authDispatch({
        type: "LOGIN",
        payload: { auth_token, email, is_admin: false },
      });
      userDispatch({ type: "SET_USER", payload: { user } });
      history.push("/");
    } catch (error) {
      alert(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrapper flex flex-grow">
      <div className="flex-col container mx-auto px-4">
        <div className="flex flex-col flex-grow h-full w-full items-center justify-center lg:w-5/12 mx-auto py-20">
          <h2 className="text-2xl text-center font-medium mb-5 text-gray-800">
            Signup
          </h2>

          <form
            className="simple_form bg-white border shadow-sm rounded-lg px-10 py-8 w-full"
            onSubmit={handleSubmit}
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
                  name="first_name"
                  id="user_first_name"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
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
                  name="last_name"
                  id="user_last_name"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group mb-8 password required user_password">
              <div>
                <label
                  className="password required control-label block mb-1 font-medium text-gray-600 text-sm tracking"
                  htmlFor="user_password"
                >
                  Password
                </label>
              </div>
              <div className="controls">
                <input
                  className="password required form-control border border-gray-400 text-gray-800 focus:text-black / w-full px-3 py-2 rounded-md / hover:border-gray-600 focus:border-gray-600 focus:outline-none / transition duration-200 ease-in-out"
                  required
                  aria-required="true"
                  type="password"
                  name="password"
                  id="user_password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group mb-8 password required user_password_confirmation">
              <div>
                <label
                  className="password required control-label block mb-1 font-medium text-gray-600 text-sm tracking"
                  htmlFor="user_password_confirmation"
                >
                  Password confirmation
                </label>
              </div>
              <div className="controls">
                <input
                  className="password required form-control border border-gray-400 text-gray-800 focus:text-black / w-full px-3 py-2 rounded-md / hover:border-gray-600 focus:border-gray-600 focus:outline-none / transition duration-200 ease-in-out"
                  required
                  aria-required="true"
                  type="password"
                  name="password_confirmation"
                  id="user_password_confirmation"
                  value={passwordConfirmation}
                  onChange={e => setPasswordConfirmation(e.target.value)}
                />
              </div>
            </div>

            <input
              type="submit"
              name="commit"
              value={loading ? "Loading..." : "Get started"}
              className="btn btn font-semibold text-base text-white / px-4 py-2 w-full rounded-md / bg-teal-600 border border-teal-600 / cursor-pointer / hover:opacity-75 / transition duration-200 ease-in-out"
              data-disable-with="Get started"
            />
          </form>
          <div className="mt-2 text-center">
            <Link
              className="block text-teal-600 hover:text-black mt-2"
              to="/login"
            >
              Sign in instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Signup.propTypes = {
  history: PropTypes.object,
};

export default Signup;
