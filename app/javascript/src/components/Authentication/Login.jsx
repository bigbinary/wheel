import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { showToastr, showErrorToastr } from "common";

import { login } from "apis/authentication";
import { useAuthDispatch } from "contexts/auth";
import { useUserDispatch } from "contexts/user";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const authDispatch = useAuthDispatch();
  const userDispatch = useUserDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setLoading(true);
      const {
        data: { auth_token, user, is_admin },
      } = await login({ user: { email, password } });
      authDispatch({ type: "LOGIN", payload: { auth_token, email, is_admin } });
      userDispatch({ type: "SET_USER", payload: { user } });
      history.push("/");
      showToastr("Logged in successfully.");
    } catch (error) {
      showErrorToastr(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-grow wrapper">
      <div className="container flex-col px-4 mx-auto">
        <div className="flex flex-col items-center justify-center flex-grow w-full h-full py-20 mx-auto lg:w-5/12">
          <h2 className="mb-5 text-2xl font-medium text-center text-gray-800">
            Sign In
          </h2>

          <form
            className="w-full px-10 py-8 bg-white border rounded-lg shadow-sm simple_form"
            onSubmit={handleSubmit}
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
                  name="email"
                  id="user_email"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-8 form-group password required user_password">
              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-600 password required control-label tracking"
                  htmlFor="user_password"
                >
                  Password
                </label>
              </div>
              <div className="controls">
                <input
                  className="w-full px-3 py-2 text-gray-800 transition duration-200 ease-in-out border border-gray-400 rounded-md password required form-control focus:text-black / hover:border-gray-600 focus:border-gray-600 focus:outline-none"
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

            <div className="flex items-center justify-between">
              <input
                type="submit"
                name="commit"
                value={loading ? "Loading..." : "Login"}
                className="w-full px-4 py-2 text-base font-semibold text-white transition duration-200 ease-in-out bg-teal-600 border border-teal-600 rounded-md cursor-pointer btn / hover:opacity-75"
                data-disable-with="Login"
              />
            </div>
          </form>
          <div className="mt-2 text-center">
            <Link
              className="block mt-2 text-teal-600 hover:text-black"
              to="/signup"
            >
              Signup
            </Link>
            <Link
              className="block mt-2 text-teal-600 hover:text-black"
              to="/users/password/new"
            >
              Forgot password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.object,
};

export default Login;
