import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Input, Toastr } from "neetoui";
import { setAuthHeaders } from "apis/axios";

import authenticationApi from "apis/authentication";
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
      } = await authenticationApi.login({ user: { email, password } });
      authDispatch({ type: "LOGIN", payload: { auth_token, email, is_admin } });
      userDispatch({ type: "SET_USER", payload: { user } });
      setAuthHeaders();
      history.push("/");
      Toastr.success("Logged in successfully.");
    } catch (error) {
      logger.error(error);
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
            className="w-full px-10 py-8 bg-white border rounded-lg shadow-sm"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 form-group email required user_email">
              <Input
                required
                type="email"
                value={email}
                label="Email"
                placeholder="oliver@example.com"
                id="user_email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4 form-group password required user_password">
              <Input
                type="password"
                name="password"
                id="user_password"
                label="Password"
                placeholder="******"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-center">
              <Button type="submit" loading={loading} label="Login" />
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
              to="/my/password/new"
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
