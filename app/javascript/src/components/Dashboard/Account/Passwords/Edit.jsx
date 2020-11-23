import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { Input as FormikInput } from "neetoui/formik";
import { Button, Toastr } from "neetoui";

import registrationsApi from "apis/registrations";

const Edit = () => {
  const validationSchema = Yup.object({
    currentPassword: Yup.string().required("Current password is required"),
    password: Yup.string().required("New password is required"),
    passwordConfirmation: Yup.string()
      .required("Password confirmation is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
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
    <div className="flex flex-grow w-full wrapper">
      <div className="w-full px-4">
        <div className="flex flex-col items-center justify-center flex-grow w-full h-full py-20 mx-auto lg:w-5/12">
          <h2 className="mb-5 text-2xl font-medium text-center text-gray-800">
            Change password
          </h2>
          <Formik
            initialValues={{
              currentPassword: "",
              password: "",
              passwordConfirmation: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="w-full px-10 py-8 bg-white border rounded-lg shadow-sm">
              <FormikInput
                {...formikInputAttrs}
                name="currentPassword"
                id="current_password"
                label="Current password"
              />
              <FormikInput
                {...formikInputAttrs}
                name="password"
                id="password"
                label="New password"
              />
              <FormikInput
                {...formikInputAttrs}
                name="passwordConfirmation"
                id="password_confirmation"
                label="Confirm password"
              />
              <div className="flex justify-center items-center w-full pt-2">
                <Button
                  name="submit"
                  type="submit"
                  className="w-full"
                  label="Login"
                />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Edit;
