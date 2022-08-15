import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input } from "neetoui/formik";

import { CONTACTS_FORM_VALIDATION_SCHEMA } from "../constants";

export default function ContactForm({ onClose, contact }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    try {
      Toastr.success("Contact has been successfully created.");
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={contact}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex w-full justify-between space-x-4">
              <Input
                label="First Name"
                name="first_name"
                className="float-left flex"
                placeholder="Add Title"
                required
              />
              <Input
                label="Last Name"
                name="last_name"
                className="float-right flex"
                placeholder="Add Description"
                required
              />
            </div>
            <Input
              label="Email"
              name="email"
              className="w-full flex-grow-0"
              placeholder="Add Email"
              required
            />
            <Input
              label="Address"
              name="address"
              className="w-full flex-grow-0"
              placeholder="Add Address"
              required
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              type="submit"
              label="Save Changes"
              size="large"
              style="primary"
              className="mr-3"
              disabled={isSubmitting}
              loading={isSubmitting}
              onClick={() => setSubmitted(true)}
            />
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="text"
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
}
