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
      <Header
        className="neeto-ui-border-gray-200 border-b"
        title="Update email"
      />
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center sm:max-w-md">
        <Formik
          initialValues={initialFormValues}
          innerRef={formikPasswordContext.formRef}
          validationSchema={EMAIL_FORM_VALIDATION_SCHEMA}
          onSubmit={handleSubmit}
        >
          {({ dirty, isSubmitting, validateForm }) => (
            <Form className="neeto-ui-rounded-lg neeto-ui-bg-white neeto-ui-shadow-s w-full space-y-6 border p-8">
              <Input required label="Email" name="email" type="email" />
              <Button
                fullWidth
                className="h-8"
                disabled={!dirty || isSubmitting}
                label="Update"
                loading={isSubmitting}
                size="small"
                type="submit"
                onClick={e => promptPassword(e, validateForm)}
              />
            </Form>
          )}
        </Formik>
        <ConfirmPasswordFormModal
          alertMessage="You will be logged out upon updating your email! Please enter your password to continue."
          header="Are you sure you want to update your email?"
          isOpen={formikPasswordContext.showPasswordModal}
          onClose={formikPasswordContext.closeModal}
          onSubmit={formikPasswordContext.handlePasswordConfirmation}
        />
      </div>
    </Container>
  );
};

export default Email;
