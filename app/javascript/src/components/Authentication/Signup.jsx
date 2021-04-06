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

  const linkBaseClass =
    "block mt-2 text-base text-indigo-500 no-underline transition-all duration-300 ease-in-out hover:text-indigo-600";

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
    <div className="w-screen h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center h-full mx-auto lg:w-4/12">
        <h2 className="mb-5 text-3xl font-semibold text-center text-gray-800">
          Signup
        </h2>

        <form
          className="w-full p-8 space-y-4 bg-white border rounded-md shadow"
          onSubmit={handleSubmit}
        >
          <Input
            required
            type="email"
            label="Email"
            placeholder="oliver@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            required
            type="text"
            label="First name"
            placeholder="Sam"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <Input
            required
            placeholder="Smith"
            label="Last name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <Input
            required
            type="password"
            label="Password"
            placeholder="******"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Input
            required
            type="password"
            label="Confirm password"
            placeholder="******"
            value={passwordConfirmation}
            onChange={e => setPasswordConfirmation(e.target.value)}
          />
          <Button type="submit" loading={loading} label="Signup" fullWidth />
        </form>
        <div className="mt-2 text-center">
          <Link className={linkBaseClass} to="/login">
            Sign in instead
          </Link>
        </div>
      </div>
    </div>
  );
};

Signup.propTypes = {
  history: PropTypes.object,
};

export default Signup;
