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
    <div className="flex flex-row items-center justify-center w-screen h-screen p-6 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full h-full mx-auto sm:max-w-md">
        <h2 className="mb-5 text-3xl font-extrabold text-center text-gray-800">
          Forgot your password?
        </h2>
        <div className="w-2/3 mb-5 -mt-4 text-center text-gray-700">
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
              className="w-full p-8 space-y-6 bg-white border rounded-md shadow"
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
        <div className="flex flex-row items-center justify-start mt-4 space-x-1">
          <p className="font-normal text-gray-600">{`Don't have an account?`}</p>
          <Button label="Signup" style="link" to="/signup" />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
