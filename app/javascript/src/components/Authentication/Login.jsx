import React, { useState } from "react";

import { Form, Formik } from "formik";
import { Button, Toastr } from "neetoui";
import { Input } from "neetoui/formik";
import PropTypes from "prop-types";

import authenticationApi from "apis/authentication";
import { setAuthHeaders } from "apis/axios";
import { SIGNUP_PATH, RESET_PASSWORD_PATH } from "components/routeConstants";
import { useAuthDispatch } from "contexts/auth";
import { useUserDispatch } from "contexts/user";

import {
  LOGIN_FORM_INITIAL_VALUES,
  LOGIN_FORM_VALIDATION_SCHEMA,
} from "./constants";

const Login = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const authDispatch = useAuthDispatch();
  const userDispatch = useUserDispatch();

  const onSubmit = async ({ email, password }) => {
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
    <div className="flex h-screen w-screen flex-row items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-100 p-6">
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center sm:max-w-md">
        <h2 className="mb-5 text-center text-3xl font-extrabold text-gray-800">
          Sign In
        </h2>
        <Formik
          initialValues={LOGIN_FORM_INITIAL_VALUES}
          validateOnBlur={submitted}
          validateOnChange={submitted}
          onSubmit={onSubmit}
          validationSchema={LOGIN_FORM_VALIDATION_SCHEMA}
        >
          {({ handleSubmit }) => (
            <Form className="w-full space-y-6 rounded-md border bg-white p-8 shadow">
              <Input
                name="email"
                type="email"
                placeholder="oliver@example.com"
                required
                label="Email"
                data-cy="login-email-text-field"
              />
              <Input
                name="password"
                type="password"
                placeholder="******"
                required
                label="Password"
                data-cy="login-password-text-field"
              />
              <Button
                type="submit"
                onClick={e => {
                  e.preventDefault();
                  setSubmitted(true);
                  handleSubmit();
                }}
                loading={loading}
                fullWidth
                className="h-8"
                label="Login"
                data-cy="login-submit-button"
              />
            </Form>
          )}
        </Formik>
        <div className="mt-4 flex flex-col items-center justify-center space-y-2">
          <div className="flex flex-row items-center justify-start space-x-1">
            <p className="font-normal text-gray-600">{`Don't have an account?`}</p>
            <Button
              label="Signup"
              style="link"
              to={SIGNUP_PATH}
              data-cy="sign-up-link"
            />
          </div>
          <Button
            label="Forgot password?"
            style="link"
            to={RESET_PASSWORD_PATH}
            data-cy="forgot-password-link"
          />
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.object,
};

export default Login;
