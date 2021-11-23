import React, { useState } from "react";

import { Form, Formik } from "formik";
import { Button } from "neetoui/v2";
import { Input as FormikInput } from "neetoui/v2/formik";
import { Header } from "neetoui/v2/layouts";

import formValidationSchemas from "constants/formValidationSchemas";
import { useUserState } from "contexts/user";

const Profile = () => {
  const { user } = useUserState();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = () => {
    // submit form
  };

  return (
    <>
      <Header title="My Profile" className="border-b border-gray-200" />
      <div className="flex flex-col items-center justify-center w-full h-full mx-auto sm:max-w-md">
        <Formik
          initialValues={{
            email: user.email,
            firstName: user.first_name,
            lastName: user.last_name,
            password: "",
          }}
          onSubmit={onSubmit}
          validateOnBlur={submitted}
          validateOnChange={submitted}
          validationSchema={formValidationSchemas.profileForm}
        >
          {({ handleSubmit }) => (
            <Form className="w-full p-8 space-y-6 bg-white border rounded-lg shadow-sm">
              <FormikInput name="email" label="Email" type="email" required />
              <FormikInput name="firstName" label="First Name" required />
              <FormikInput name="lastName" label="Last name" required />
              <FormikInput
                name="password"
                label="Current password"
                type="password"
                required
              />
              <Button
                type="submit"
                onClick={e => {
                  e.preventDefault();
                  setSubmitted(true);
                  handleSubmit();
                }}
                label="Update"
                fullWidth
              />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Profile;
