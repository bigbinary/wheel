import React, { useState } from "react";

import { Form, Formik } from "formik";
import { Button } from "neetoui";
import { Input } from "neetoui/formik";
import { Container, Header } from "neetoui/layouts";

import formValidationSchemas from "constants/formValidationSchemas";
import { useUserState } from "contexts/user";

const Profile = () => {
  const { user } = useUserState();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = () => {
    // submit form
  };

  return (
    <Container>
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
              <Input name="email" label="Email" type="email" required />
              <Input name="firstName" label="First Name" required />
              <Input name="lastName" label="Last name" required />
              <Input
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
                className="h-8"
                fullWidth
              />
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default Profile;
