import React from "react";
import { Button } from "neetoui";
import { Form, Formik } from "formik";
import { Input as FormikInput } from "neetoui/formik";
import { Header } from "neetoui/layouts";
import { useUserState } from "contexts/user";

const Profile = () => {
  const { user } = useUserState();

  const handleSubmit = () => {
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
          onSubmit={handleSubmit}
        >
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
            <Button type="submit" label="Update" fullWidth />
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Profile;
