import React, { useState } from "react";

import { Form, Formik } from "formik";
import { Button } from "neetoui";
import { Input } from "neetoui/formik";
import { Container, Header } from "neetoui/layouts";

import profilesApi from "apis/profiles";
import { useUserState } from "contexts/user";

import { PROFILE_FORM_VALIDATION_SCHEMA } from "./constants";
import { buildProfileFormInitialValues } from "./utils";

const Profile = () => {
  const [submitted, setSubmitted] = useState(false);
  const { user } = useUserState();

  const handleSubmit = async data => {
    try {
      await profilesApi.updateProfile(data);
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Container>
      <Header title="My Profile" className="border-b border-gray-200" />
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center sm:max-w-md">
        <Formik
          initialValues={buildProfileFormInitialValues(user)}
          onSubmit={handleSubmit}
          validateOnBlur={submitted}
          validateOnChange={submitted}
          validationSchema={PROFILE_FORM_VALIDATION_SCHEMA}
        >
          {({ isSubmitting }) => (
            <Form className="w-full space-y-6 rounded-lg border bg-white p-8 shadow-sm">
              <Input required name="firstName" label="First Name" />
              <Input required name="lastName" label="Last name" />
              <Input
                required
                name="password"
                label="Current password"
                type="password"
              />
              <Button
                fullWidth
                type="submit"
                onClick={() => setSubmitted(true)}
                label="Update"
                className="h-8"
                loading={isSubmitting}
                disabled={isSubmitting}
              />
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default Profile;
