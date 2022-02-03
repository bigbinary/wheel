import React, { useState } from "react";

import { Form, Formik } from "formik";
import { Button } from "neetoui";
import { Input } from "neetoui/formik";
import PropTypes from "prop-types";

import authenticationApi from "apis/authentication";
import { LOGIN_PATH } from "components/routeConstants";

import {
  SIGNUP_FORM_INITIAL_VALUES,
  SIGNUP_FORM_VALIDATION_SCHEMA,
} from "./constants";

const Signup = ({ history }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async formData => {
    try {
      await authenticationApi.signup(formData);
      history.push(LOGIN_PATH);
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <div className="flex h-screen w-screen flex-row items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-100 p-6">
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center sm:max-w-md">
        <h2 className="mb-5 text-center text-3xl font-extrabold text-gray-800">
          Signup
        </h2>
        <Formik
          initialValues={SIGNUP_FORM_INITIAL_VALUES}
          validateOnBlur={submitted}
          validateOnChange={submitted}
          onSubmit={handleSubmit}
          validationSchema={SIGNUP_FORM_VALIDATION_SCHEMA}
        >
          {({ isSubmitting }) => (
            <Form className="w-full space-y-6 rounded-md border bg-white p-8 shadow">
              <Input
                required
                name="email"
                type="email"
                label="Email"
                placeholder="oliver@example.com"
              />
              <Input
                required
                name="firstName"
                type="text"
                label="First name"
                placeholder="Oliver"
              />
              <Input
                required
                name="lastName"
                type="text"
                placeholder="Smith"
                label="Last name"
              />
              <Input
                required
                name="password"
                type="password"
                label="Password"
                placeholder="******"
              />
              <Input
                required
                name="passwordConfirmation"
                type="password"
                label="Confirm password"
                placeholder="******"
              />
              <Button
                fullWidth
                type="submit"
                onClick={() => setSubmitted(true)}
                className="h-8"
                loading={isSubmitting}
                disabled={isSubmitting}
                label="Signup"
              />
            </Form>
          )}
        </Formik>
        <div className="mt-4 flex flex-row items-center justify-start space-x-1">
          <p className="font-normal text-gray-600">Already have an account?</p>
          <Button label="Login" style="link" to={LOGIN_PATH} />
        </div>
      </div>
    </div>
  );
};

Signup.propTypes = {
  history: PropTypes.object,
};

export default Signup;
