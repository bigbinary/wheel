import React, { useState } from "react";
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
    <div className="flex flex-row items-center justify-center w-screen h-screen p-6 bg-gray-100 overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col items-center justify-center w-full h-full mx-auto sm:max-w-md">
        <h2 className="mb-5 text-3xl font-extrabold text-center text-gray-800">
          Signup
        </h2>

        <form
          className="w-full p-8 space-y-6 bg-white border rounded-md shadow"
          onSubmit={handleSubmit}
        >
          <Input
            id="user_email"
            type="email"
            label="Email"
            placeholder="oliver@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <Input
            id="user_first_name"
            type="text"
            label="First name"
            placeholder="Sam"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
          />
          <Input
            id="user_last_name"
            type="text"
            placeholder="Smith"
            label="Last name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required
          />
          <Input
            id="user_password"
            type="password"
            label="Password"
            placeholder="******"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <Input
            id="user_password_confirmation"
            type="password"
            label="Confirm password"
            placeholder="******"
            value={passwordConfirmation}
            onChange={e => setPasswordConfirmation(e.target.value)}
            required
          />
          <Button type="submit" loading={loading} label="Signup" fullWidth />
        </form>
        <div className="flex flex-row items-center justify-start mt-4 space-x-1">
          <p className="font-normal text-gray-600">Already have an account?</p>
          <Button
            label="Login"
            style="link"
            to="/login"
          />
        </div>
      </div>
    </div>
  );
};

Signup.propTypes = {
  history: PropTypes.object,
};

export default Signup;
