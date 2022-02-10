import React, { useMemo, useState } from "react";

import { Form, Formik } from "formik";
import { Button } from "neetoui";
import { Input } from "neetoui/formik";
import { Container, Header } from "neetoui/layouts";
import { equals } from "ramda";

import profilesApi from "apis/profiles";
import { useUserState } from "contexts/user";
import { useUserDispatch } from "contexts/user";

import ConfirmPasswordModal from "./ConfirmPasswordModal";
import { PROFILE_FORM_VALIDATION_SCHEMA } from "./constants";
import { buildProfileFormInitialValues } from "./utils";

const Profile = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { user } = useUserState();
  const userDispatch = useUserDispatch();
  const initialFormValues = useMemo(
    () => buildProfileFormInitialValues(user),
    [user]
  );

  const handleSubmit = async (data, { resetForm }) => {
    try {
      const {
        data: { user },
      } = await profilesApi.updateProfile(data);
      userDispatch({ type: "SET_USER", payload: { user } });
    } catch (err) {
      logger.error(err);
    } finally {
      resetForm({
        values: buildProfileFormInitialValues({
          first_name: data.firstName,
          last_name: data.lastName,
        }),
      });
      setShowPasswordModal(false);
    }
  };

  const promptPassword = async (e, validateForm) => {
    e.preventDefault();
    setSubmitted(true);
    const { firstName, lastName } = await validateForm();
    if (!firstName && !lastName) setShowPasswordModal(true);
  };

  const closeModal = (values, resetForm) => {
    setShowPasswordModal(false);
    resetForm({
      values: { ...values, password: "" },
      errors: {},
    });
  };

  return (
    <Container>
      <Header title="My Profile" className="border-b border-gray-200" />
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center sm:max-w-md">
        <Formik
          initialValues={initialFormValues}
          onSubmit={handleSubmit}
          validateOnBlur={submitted}
          validateOnChange={submitted}
          validationSchema={PROFILE_FORM_VALIDATION_SCHEMA}
        >
          {({
            values,
            isSubmitting,
            handleSubmit: submitForm,
            validateForm,
            resetForm,
          }) => (
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
                disabled={equals(values, initialFormValues) || isSubmitting}
              />
              <ConfirmPasswordModal
                isOpen={showPasswordModal}
                onClose={() => closeModal(values, resetForm)}
                header="Please enter your password to continue."
                onSubmit={submitForm}
                isSubmitting={isSubmitting}
                disabled={isSubmitting || !values.password}
              >
                <Input
                  required
                  name="password"
                  label="Current password"
                  type="password"
                  className="my-2"
                />
              </ConfirmPasswordModal>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default Profile;
