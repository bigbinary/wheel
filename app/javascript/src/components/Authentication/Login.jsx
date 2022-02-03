import React, { useState } from "react";

import { Form, Formik } from "formik";
import { Button } from "neetoui";
import { Input } from "neetoui/formik";
import PropTypes from "prop-types";

import authenticationApi from "apis/authentication";
import {
  SIGNUP_PATH,
  RESET_PASSWORD_PATH,
  DASHBOARD_PATH,
} from "components/routeConstants";
import { useAuthDispatch } from "contexts/auth";
import { useUserDispatch } from "contexts/user";

import {
  LOGIN_FORM_INITIAL_VALUES,
  LOGIN_FORM_VALIDATION_SCHEMA,
} from "./constants";

const Login = ({ history }) => {
  const [submitted, setSubmitted] = useState(false);
  const authDispatch = useAuthDispatch();
  const userDispatch = useUserDispatch();

  const handleSubmit = async ({ email, password }) => {
    try {
      const {
        data: { auth_token, user, is_admin },
      } = await authenticationApi.login({ email, password });
      authDispatch({ type: "LOGIN", payload: { auth_token, email, is_admin } });
      userDispatch({ type: "SET_USER", payload: { user } });
      history.push(DASHBOARD_PATH);
    } catch (error) {
      logger.error(error);
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
          onSubmit={handleSubmit}
          validationSchema={LOGIN_FORM_VALIDATION_SCHEMA}
        >
          {({ isSubmitting }) => (
            <Form className="w-full space-y-6 rounded-md border bg-white p-8 shadow">
              <Input
                required
                name="email"
                label="Email"
                type="email"
                placeholder="oliver@example.com"
                data-cy="login-email-text-field"
              />
              <Input
                required
                name="password"
                label="Password"
                type="password"
                placeholder="******"
                data-cy="login-password-text-field"
              />
              <Button
                fullWidth
                type="submit"
                label="Login"
                data-cy="login-submit-button"
                className="h-8"
                loading={isSubmitting}
                disabled={isSubmitting}
                onClick={() => setSubmitted(true)}
              />
            </Form>
          )}
        </Formik>
        <div className="mt-4 flex flex-col items-center justify-center space-y-2">
          <div className="flex flex-row items-center justify-start space-x-1">
            <p className="font-normal text-gray-600">Don't have an account?</p>
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
