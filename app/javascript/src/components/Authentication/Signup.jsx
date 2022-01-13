import React, { useState } from "react";

import { Form, Formik } from "formik";
import { Button, Toastr } from "neetoui";
import { Input } from "neetoui/formik";
import PropTypes from "prop-types";

import authenticationApi from "apis/authentication";
import { LOGIN_PATH } from "components/routeConstants";

import {
  SIGNUP_FORM_INITIAL_VALUES,
  SIGNUP_FORM_VALIDATION_SCHEMA,
} from "./constants";

const Signup = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async formData => {
    const { email, firstName, lastName, password, passwordConfirmation } =
      formData;
    try {
      setLoading(true);
      await authenticationApi.signup({
        user: {
          email,
          first_name: firstName,
          last_name: lastName,
          password,
          password_confirmation: passwordConfirmation,
        },
      });
      Toastr.success("Successfully signed up. Please login.");
      history.push("/login");
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
          Signup
        </h2>
        <Formik
          initialValues={SIGNUP_FORM_INITIAL_VALUES}
          validateOnBlur={submitted}
          validateOnChange={submitted}
          onSubmit={onSubmit}
          validationSchema={SIGNUP_FORM_VALIDATION_SCHEMA}
        >
          {({ handleSubmit }) => (
            <Form className="w-full space-y-6 rounded-md border bg-white p-8 shadow">
              <Input
                name="email"
                type="email"
                label="Email"
                placeholder="oliver@example.com"
                required
              />
              <Input
                name="firstName"
                type="text"
                label="First name"
                placeholder="Sam"
                required
              />
              <Input
                name="lastName"
                type="text"
                placeholder="Smith"
                label="Last name"
                required
              />
              <Input
                name="password"
                type="password"
                label="Password"
                placeholder="******"
                required
              />
              <Input
                name="passwordConfirmation"
                type="password"
                label="Confirm password"
                placeholder="******"
                required
              />
              <Button
                type="submit"
                onClick={e => {
                  e.preventDefault();
                  setSubmitted(true);
                  handleSubmit();
                }}
                className="h-8"
                loading={loading}
                label="Signup"
                fullWidth
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
