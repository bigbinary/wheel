import React from "react";

import { Form, Formik } from "formik";
import { Button } from "neetoui";
import { Input } from "neetoui/formik";
import { Container, Header } from "neetoui/layouts";

import profilesApi from "apis/profiles";

import {
  CHANGE_PASSWORD_FORM_INITIAL_VALUES,
  CHANGE_PASSWORD_FORM_VALIDATION_SCHEMA,
  CHANGE_PASSWORD_FORM_INPUT_ATTRIBUTES,
} from "./constants";

const Password = () => {
  const handleSubmit = async (data, { resetForm }) => {
    try {
      await profilesApi.updatePassword(data);
      resetForm();
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <Container>
      <Header
        className="neeto-ui-border-gray-200 border-b"
        title="Change password"
      />
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center sm:max-w-md">
        <Formik
          initialValues={CHANGE_PASSWORD_FORM_INITIAL_VALUES}
          validationSchema={CHANGE_PASSWORD_FORM_VALIDATION_SCHEMA}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, dirty }) => (
            <Form className="neeto-ui-rounded-lg neeto-ui-bg-white neeto-ui-shadow-s w-full space-y-6 border p-8">
              <Input
                {...CHANGE_PASSWORD_FORM_INPUT_ATTRIBUTES}
                label="Current password"
                name="currentPassword"
              />
              <Input
                {...CHANGE_PASSWORD_FORM_INPUT_ATTRIBUTES}
                label="New password"
                name="password"
              />
              <Input
                {...CHANGE_PASSWORD_FORM_INPUT_ATTRIBUTES}
                label="Confirm password"
                name="passwordConfirmation"
              />
              <Button
                fullWidth
                className="h-8"
                disabled={!dirty || isSubmitting}
                label="Update"
                loading={isSubmitting}
                name="submit"
                size="small"
                type="submit"
              />
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default Password;
