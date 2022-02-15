import React, { useMemo } from "react";

import { Form, Formik } from "formik";
import { Button } from "neetoui";
import { Input } from "neetoui/formik";
import { Container, Header } from "neetoui/layouts";

import profilesApi from "apis/profiles";
import { useUserState } from "contexts/user";
import { useUserDispatch } from "contexts/user";

import ConfirmPasswordFormModal from "./ConfirmPasswordFormModal";
import { PROFILE_FORM_VALIDATION_SCHEMA } from "./constants";
import { useFormikPasswordConfirmationModal } from "./hooks/useFormikPasswordConfirmationModal";
import { buildProfileFormInitialValues } from "./utils";

const Profile = () => {
  const formikPasswordContext = useFormikPasswordConfirmationModal();
  const { user } = useUserState();

  const userDispatch = useUserDispatch();
  const initialFormValues = useMemo(
    () => buildProfileFormInitialValues(user),
    [user]
  );

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const {
        data: { user },
      } = await profilesApi.updateProfile({
        ...values,
        password: formikPasswordContext.password,
      });
      userDispatch({ type: "SET_USER", payload: { user } });
    } catch (err) {
      resetForm();
      formikPasswordContext.setShowPasswordModal(false);
      logger.error(err);
    }
  };

  const promptPassword = async (e, validateForm) => {
    e.preventDefault();
    const { firstName, lastName } = await validateForm();
    if (!firstName && !lastName) {
      formikPasswordContext.setShowPasswordModal(true);
    }
  };

  return (
    <Container>
      <Header title="My Profile" className="border-b border-gray-200" />
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center sm:max-w-md">
        <Formik
          enableReinitialize
          innerRef={formikPasswordContext.formRef}
          initialValues={initialFormValues}
          onSubmit={handleSubmit}
          validationSchema={PROFILE_FORM_VALIDATION_SCHEMA}
        >
          {({ dirty, isSubmitting, validateForm }) => (
            <Form className="w-full space-y-6 rounded-lg border bg-white p-8 shadow-sm">
              <Input required name="firstName" label="First Name" />
              <Input required name="lastName" label="Last name" />
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
          header="Please enter your password to continue."
          onSubmit={formikPasswordContext.handlePasswordConfirmation}
        />
      </div>
    </Container>
  );
};

export default Profile;
