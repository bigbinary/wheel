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
          validationSchema={SIGNUP_FORM_VALIDATION_SCHEMA}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="w-full space-y-6 rounded-md border bg-white p-8 shadow">
              <Input
                required
                label="Email"
                name="email"
                placeholder="oliver@example.com"
                type="email"
              />
              <Input
                required
                label="First name"
                name="firstName"
                placeholder="Oliver"
                type="text"
              />
              <Input
                required
                label="Last name"
                name="lastName"
                placeholder="Smith"
                type="text"
              />
              <Input
                required
                label="Password"
                name="password"
                placeholder="******"
                type="password"
              />
              <Input
                required
                label="Confirm password"
                name="passwordConfirmation"
                placeholder="******"
                type="password"
              />
              <Button
                fullWidth
                className="h-8"
                disabled={isSubmitting}
                label="Signup"
                loading={isSubmitting}
                type="submit"
                onClick={() => setSubmitted(true)}
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
