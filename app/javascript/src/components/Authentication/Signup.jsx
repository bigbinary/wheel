import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Input } from "neetoui";

import authenticationApi from "apis/authentication";
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
      } = await authenticationApi.signup({
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
    <div className="flex flex-grow wrapper">
      <div className="container flex-col px-4 mx-auto">
        <div className="flex flex-col items-center justify-center flex-grow w-full h-full py-20 mx-auto lg:w-5/12">
          <h2 className="mb-5 text-2xl font-medium text-center text-gray-800">
            Signup
          </h2>

          <form
            className="w-full px-10 py-8 bg-white border rounded-lg shadow-sm"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 form-group email required user_email">
              <Input
                required
                aria-required="true"
                type="email"
                label="Email"
                placeholder="oliver@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                name="email"
                id="user_email"
              />
            </div>

            <div className="mb-4 form-group string required user_first_name">
              <Input
                required
                aria-required="true"
                type="text"
                label="First name"
                placeholder="Sam"
                name="first_name"
                id="user_first_name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </div>

            <div className="mb-4 form-group string required user_last_name">
              <Input
                required
                aria-required="true"
                type="text"
                name="last_name"
                placeholder="Smith"
                label="Last name"
                id="user_last_name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </div>

            <div className="mb-4 form-group password required user_password">
              <Input
                required
                type="password"
                name="password"
                label="Password"
                placeholder="******"
                id="user_password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-4 form-group password required user_password_confirmation">
              <Input
                required
                type="password"
                label="Confirm password"
                placeholder="******"
                name="password_confirmation"
                id="user_password_confirmation"
                value={passwordConfirmation}
                onChange={e => setPasswordConfirmation(e.target.value)}
              />
            </div>

            <Button type="submit" loading={loading} label="Signup" />
          </form>
          <div className="mt-2 text-center">
            <Link
              className="block mt-2 text-teal-600 hover:text-black"
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
