import React from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { Input } from "nitroui/formik";
import { Button } from "nitroui";
import ContactsAPI from "apis/contacts";

export default function NewContactForm({ onClose, refetch }) {
  const handleSubmit = async values => {
    try {
      await ContactsAPI.create(values);
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={yup.object({
        name: yup.string().required("Name is required"),
        email: yup
          .string()
          .email()
          .required("Email is required"),
      })}
    >
      {({ isSubmitting }) => (
        <Form>
          <Input label="Name" name="name" className="mb-3" />
          <Input label="Email" name="email" />
          <div className="absolute bottom-0 left-0 w-full bg-white nui-pane--footer">
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="secondary"
            />

            <Button
              type="submit"
              label="Submit"
              size="large"
              style="primary"
              className="ml-2"
              disabled={isSubmitting}
              loading={isSubmitting}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}
