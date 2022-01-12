import React from "react";

import { Form, Formik } from "formik";
import { Button, Toastr } from "neetoui";
import { Input } from "neetoui/formik";
import { Container, Header } from "neetoui/layouts";
import * as yup from "yup";

import registrationsApi from "apis/registrations";

const Edit = () => {
  const validationSchema = yup.object({
    currentPassword: yup.string().required("Current password is required"),
    password: yup.string().required("New password is required"),
    passwordConfirmation: yup
      .string()
      .required("Password confirmation is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const formikInputAttrs = {
    type: "password",
    "aria-required": "true",
    placeholder: "******",
  };

  const handleSubmit = async data => {
    try {
      await registrationsApi.updatePassword({
        user: {
          current_password: data.currentPassword,
          password: data.password,
          password_confirmation: data.passwordConfirmation,
        },
      });
      Toastr.success("Password updated successfully");
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <Container>
      <Header title="Change Password" className="border-b border-gray-200" />
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center sm:max-w-md">
        <Formik
          initialValues={{
            currentPassword: "",
            password: "",
            passwordConfirmation: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="w-full space-y-6 rounded-lg border bg-white p-8 shadow-sm">
            <Input
              {...formikInputAttrs}
              name="currentPassword"
              label="Current password"
            />
            <Input {...formikInputAttrs} name="password" label="New password" />
            <Input
              {...formikInputAttrs}
              name="passwordConfirmation"
              label="Confirm password"
            />
            <Button
              name="submit"
              type="submit"
              label="Update"
              className="h-8"
              fullWidth
            />
          </Form>
        </Formik>
      </div>
    </Container>
  );
};

export default Edit;
