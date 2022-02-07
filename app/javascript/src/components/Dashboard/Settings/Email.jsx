import React, { useState } from "react";

import { Form, Formik } from "formik";
import { Button } from "neetoui";
import { Input } from "neetoui/formik";
import { Container, Header } from "neetoui/layouts";

import profilesApi from "apis/profiles";
import { LOGIN_PATH } from "components/routeConstants";
import { useAuthDispatch } from "contexts/auth";
import { useUserState } from "contexts/user";

import ConfirmPasswordModal from "./ConfirmPasswordModal";
import { EMAIL_FORM_VALIDATION_SCHEMA } from "./constants";
import { buildEmailFormInitialValues } from "./utils";

const Email = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { user } = useUserState();
  const authDispatch = useAuthDispatch();

  const handleSubmit = async (data, { resetForm }) => {
    try {
      await profilesApi.updateEmail(data);
      authDispatch({ type: "LOGOUT" });
      window.location.href = LOGIN_PATH;
    } catch (err) {
      resetForm("password");
      setShowPasswordModal(false);
      logger.error(err);
    }
  };

  const promptPassword = async (e, validateForm) => {
    e.preventDefault();
    setSubmitted(true);
    const { email } = await validateForm();
    if (!email) setShowPasswordModal(true);
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
              <Button
                fullWidth
                type="submit"
                onClick={e => promptPassword(e, validateForm)}
                label="Update"
                className="h-8"
                loading={isSubmitting}
                disabled={isSubmitting}
              />
              <ConfirmPasswordModal
                isOpen={showPasswordModal}
                onClose={() => setShowPasswordModal(false)}
                header="Are you sure you want to update your email?"
                onSubmit={submitForm}
                isSubmitting={isSubmitting}
              >
                <>
                  <p className="my-2">
                    You will be logged out upon updating your email! Please
                    enter your password to continue.
                  </p>
                  <Input
                    required
                    name="password"
                    label="Current password"
                    type="password"
                    className="my-2"
                  />
                </>
              </ConfirmPasswordModal>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default Email;
