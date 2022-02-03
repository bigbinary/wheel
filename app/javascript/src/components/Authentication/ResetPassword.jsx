import React, { useState } from "react";

import { Form, Formik } from "formik";
import { Button } from "neetoui";
import { Input } from "neetoui/formik";

import { LOGIN_PATH, SIGNUP_PATH } from "components/routeConstants";

import {
  RESET_PASSWORD_FORM_INITIAL_VALUES,
  RESET_PASSWORD_FORM_VALIDATION_SCHEMA,
} from "./constants";

const ResetPassword = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex h-screen w-screen flex-row items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-100 p-6">
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center sm:max-w-md">
        <h2 className="mb-5 text-center text-3xl font-extrabold text-gray-800">
          Forgot your password?
        </h2>
        <div className="mb-5 -mt-4 w-2/3 text-center text-gray-700">
          Enter your email address below and we&apos;ll send you a link to reset
          your password.
        </div>
        <Formik
          initialValues={RESET_PASSWORD_FORM_INITIAL_VALUES}
          validateOnBlur={submitted}
          validateOnChange={submitted}
          onSubmit={() => null}
          validationSchema={RESET_PASSWORD_FORM_VALIDATION_SCHEMA}
        >
          {({ isSubmitting }) => (
            <Form
              className="w-full space-y-6 rounded-md border bg-white p-8 shadow"
              id="new_user"
            >
              <Input name="email" label="Email" type="email" required />
              <div className="flex flex-col items-center justify-center space-y-2">
                <Button
                  fullWidth
                  className="h-8"
                  type="submit"
                  label="Send reset password email"
                  data-disable-with="Send reset password email"
                  onClick={() => setSubmitted(true)}
                  loading={isSubmitting}
                  disabled={isSubmitting}
                />
                <Button label="Back" style="link" to={LOGIN_PATH} />
              </div>
            </Form>
          )}
        </Formik>
        <div className="mt-4 flex flex-row items-center justify-start space-x-1">
          <p className="font-normal text-gray-600">{`Don't have an account?`}</p>
          <Button label="Signup" style="link" to={SIGNUP_PATH} />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
