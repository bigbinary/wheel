import React, { useState } from "react";

import { Form, Formik } from "formik";
import { Button } from "neetoui";
import { Input } from "neetoui/formik";
import { Container, Header } from "neetoui/layouts";

import profilesApi from "apis/profiles";
import { LOGIN_PATH } from "components/routeConstants";
import { useAuthDispatch } from "contexts/auth";
import { useUserState } from "contexts/user";

import { EMAIL_FORM_VALIDATION_SCHEMA } from "./constants";

const Email = () => {
  const [submitted, setSubmitted] = useState(false);
  const { user } = useUserState();
  const authDispatch = useAuthDispatch();

  const handleSubmit = async data => {
    try {
      await profilesApi.updateEmail(data);
      authDispatch({ type: "LOGOUT" });
      window.location.href = LOGIN_PATH;
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Container>
      <Header title="Update Email" className="border-b border-gray-200" />
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center sm:max-w-md">
        <Formik
          initialValues={{ email: user.email }}
          onSubmit={handleSubmit}
          validateOnBlur={submitted}
          validateOnChange={submitted}
          validationSchema={EMAIL_FORM_VALIDATION_SCHEMA}
        >
          {({ isSubmitting }) => (
            <Form className="w-full space-y-6 rounded-lg border bg-white p-8 shadow-sm">
              <Input required name="email" label="Email" type="email" />
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

export default Email;
