import React, { useState } from "react";

import { Form, Formik } from "formik";
import { Button, Toastr } from "neetoui";
import { Input } from "neetoui/formik";
import PropTypes from "prop-types";

import authenticationApi from "apis/authentication";
import formInitialValues from "constants/formInitialValues";
import formValidationSchemas from "constants/formValidationSchemas";

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
    <div className="flex flex-row items-center justify-center w-screen h-screen p-6 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full h-full mx-auto sm:max-w-md">
        <h2 className="mb-5 text-3xl font-extrabold text-center text-gray-800">
          Signup
        </h2>
        <Formik
          initialValues={formInitialValues.signupForm}
          validateOnBlur={submitted}
          validateOnChange={submitted}
          onSubmit={onSubmit}
          validationSchema={formValidationSchemas.signupForm}
        >
          {({ handleSubmit }) => (
            <Form className="w-full p-8 space-y-6 bg-white border rounded-md shadow">
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
        <div className="flex flex-row items-center justify-start mt-4 space-x-1">
          <p className="font-normal text-gray-600">Already have an account?</p>
          <Button label="Login" style="link" to="/login" />
        </div>
      </div>
    </div>
  );
};

Signup.propTypes = {
  history: PropTypes.object,
};

export default Signup;
