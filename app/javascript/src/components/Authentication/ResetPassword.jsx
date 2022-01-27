import React, { useState } from "react";

import { Form, Formik } from "formik";
import { Button } from "neetoui";
import { Input } from "neetoui/formik";

import formInitialValues from "constants/formInitialValues";
import formValidationSchemas from "constants/formValidationSchemas";

const ResetPassword = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = () => {
    // trigger api call for reset password
  };

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
          initialValues={formInitialValues.resetPasswordForm}
          validateOnBlur={submitted}
          validateOnChange={submitted}
          onSubmit={onSubmit}
          validationSchema={formValidationSchemas.resetPasswordForm}
        >
          {({ handleSubmit }) => (
            <Form
              className="w-full space-y-6 rounded-md border bg-white p-8 shadow"
              id="new_user"
            >
              <Input name="email" label="Email" type="email" required />
              <div className="flex flex-col items-center justify-center space-y-2">
                <Button
                  type="submit"
                  onClick={e => {
                    e.preventDefault();
                    setSubmitted(true);
                    handleSubmit();
                  }}
                  label="Send reset password email"
                  data-disable-with="Send reset password email"
                  className="h-8"
                  fullWidth
                />
                <Button label="Back" style="link" to="/login" />
              </div>
            </Form>
          )}
        </Formik>
        <div className="mt-4 flex flex-row items-center justify-start space-x-1">
          <p className="font-normal text-gray-600">{`Don't have an account?`}</p>
          <Button label="Signup" style="link" to="/signup" />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
