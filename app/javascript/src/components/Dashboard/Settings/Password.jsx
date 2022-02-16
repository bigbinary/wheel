import React, { useState } from "react";

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
  const [submitted, setSubmitted] = useState(false);

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
      <Header title="Change Password" className="border-b border-gray-200" />
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center sm:max-w-md">
        <Formik
          initialValues={CHANGE_PASSWORD_FORM_INITIAL_VALUES}
          validationSchema={CHANGE_PASSWORD_FORM_VALIDATION_SCHEMA}
          onSubmit={handleSubmit}
          validateOnBlur={submitted}
          validateOnChange={submitted}
        >
          {({ isSubmitting, dirty }) => (
            <Form className="w-full space-y-6 rounded-lg border bg-white p-8 shadow-sm">
              <Input
                {...CHANGE_PASSWORD_FORM_INPUT_ATTRIBUTES}
                name="currentPassword"
                label="Current password"
              />
              <Input
                {...CHANGE_PASSWORD_FORM_INPUT_ATTRIBUTES}
                name="password"
                label="New password"
              />
              <Input
                {...CHANGE_PASSWORD_FORM_INPUT_ATTRIBUTES}
                name="passwordConfirmation"
                label="Confirm password"
              />
              <Button
                fullWidth
                name="submit"
                type="submit"
                label="Update"
                className="h-8"
                loading={isSubmitting}
                disabled={!dirty || isSubmitting}
                onClick={() => setSubmitted(true)}
              />
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default Password;
