import React, { useState } from "react";

import { Form, Formik } from "formik";
import { Button, Alert } from "neetoui";
import { Input } from "neetoui/formik";
import { Container, Header } from "neetoui/layouts";

import profilesApi from "apis/profiles";
import { LOGIN_PATH } from "components/routeConstants";
import { useAuthDispatch } from "contexts/auth";
import { useUserState } from "contexts/user";

import { EMAIL_FORM_VALIDATION_SCHEMA } from "./constants";
import { buildEmailFormInitialValues } from "./utils";

const Email = () => {
  const [showUpdateAlert, setShowUpdateAlert] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { user } = useUserState();
  const authDispatch = useAuthDispatch();

  const handleSubmit = async data => {
    try {
      await profilesApi.updateEmail(data);
      authDispatch({ type: "LOGOUT" });
      window.location.href = LOGIN_PATH;
    } catch (err) {
      setShowUpdateAlert(false);
      logger.error(err);
    }
  };

  const showUpdateConfirmation = async (e, validateForm) => {
    e.preventDefault();
    setSubmitted(true);
    const errors = await validateForm();
    if (Object.keys(errors).length < 1) {
      setShowUpdateAlert(true);
    }
  };

  return (
    <Container>
      <Header title="Update Email" className="border-b border-gray-200" />
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center sm:max-w-md">
        <Formik
          initialValues={buildEmailFormInitialValues(user)}
          onSubmit={handleSubmit}
          validateOnBlur={submitted}
          validateOnChange={submitted}
          validationSchema={EMAIL_FORM_VALIDATION_SCHEMA}
        >
          {({ isSubmitting, handleSubmit: submitForm, validateForm }) => (
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
                onClick={e => showUpdateConfirmation(e, validateForm)}
                label="Update"
                className="h-8"
                loading={isSubmitting}
                disabled={isSubmitting}
              />
              <Alert
                isOpen={showUpdateAlert}
                message="Are you sure you want to continue? You will need to login to continue."
                onClose={() => setShowUpdateAlert(false)}
                onSubmit={submitForm}
                title="You will be logged out upon updating your email!"
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
