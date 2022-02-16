import React, { useMemo } from "react";

import { Form, Formik } from "formik";
import { Button } from "neetoui";
import { Input } from "neetoui/formik";
import { Container, Header } from "neetoui/layouts";

import profilesApi from "apis/profiles";
import { LOGIN_PATH } from "components/routeConstants";
import { useAuthDispatch } from "contexts/auth";
import { useUserState } from "contexts/user";

import ConfirmPasswordFormModal from "./ConfirmPasswordFormModal";
import { EMAIL_FORM_VALIDATION_SCHEMA } from "./constants";
import { useFormikPasswordConfirmationModal } from "./hooks/useFormikPasswordConfirmationModal";
import { buildEmailFormInitialValues } from "./utils";

const Email = () => {
  const formikPasswordContext = useFormikPasswordConfirmationModal();
  const { user } = useUserState();

  const authDispatch = useAuthDispatch();
  const initialFormValues = useMemo(
    () => buildEmailFormInitialValues(user),
    [user]
  );

  const handleSubmit = async (data, { resetForm }) => {
    try {
      await profilesApi.updateEmail({
        ...data,
        password: formikPasswordContext.password,
      });
      authDispatch({ type: "LOGOUT" });
      window.location.href = LOGIN_PATH;
    } catch (err) {
      resetForm();
      formikPasswordContext.setShowPasswordModal(false);
      logger.error(err);
    }
  };

  const promptPassword = async (e, validateForm) => {
    e.preventDefault();
    const { email } = await validateForm();
    if (!email) formikPasswordContext.setShowPasswordModal(true);
  };

  return (
    <Container>
      <Header title="Update Email" className="border-b border-gray-200" />
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center sm:max-w-md">
        <Formik
          initialValues={initialFormValues}
          onSubmit={handleSubmit}
          innerRef={formikPasswordContext.formRef}
          validationSchema={EMAIL_FORM_VALIDATION_SCHEMA}
        >
          {({ dirty, isSubmitting, validateForm }) => (
            <Form className="w-full space-y-6 rounded-lg border bg-white p-8 shadow-sm">
              <Input required name="email" label="Email" type="email" />
              <Button
                fullWidth
                type="submit"
                onClick={e => promptPassword(e, validateForm)}
                label="Update"
                className="h-8"
                loading={isSubmitting}
                disabled={!dirty || isSubmitting}
              />
            </Form>
          )}
        </Formik>
        <ConfirmPasswordFormModal
          isOpen={formikPasswordContext.showPasswordModal}
          onClose={formikPasswordContext.closeModal}
          header="Are you sure you want to update your email?"
          onSubmit={formikPasswordContext.handlePasswordConfirmation}
          alertMessage="You will be logged out upon updating your email! Please enter your password to continue."
        />
      </div>
    </Container>
  );
};

export default Email;
