import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";

import formValidationSchemas from "constants/formValidationSchemas";

import { ROLE_OPTS, FORM_INIT } from "./constants";

export default function ContactForm({ onClose, setContacts }) {
  const [submitted, setSubmitted] = useState(false);

  const getFormattedDate = () => {
    const options = { weekday: "short", day: "2-digit", year: "numeric" };
    const stringDateArray = new Date()
      .toLocaleDateString("en-US", options)
      .split(" ");
    return (
      stringDateArray[1] + " " + stringDateArray[0] + ", " + stringDateArray[2]
    );
  };

  const handleSubmit = values => {
    setContacts(contacts => [
      { ...values, role: values.role.label, createdAt: getFormattedDate() },
      ...contacts,
    ]);
    setSubmitted(true);
    onClose();
  };

  return (
    <Formik
      initialValues={FORM_INIT}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={formValidationSchemas.contactsForm}
    >
      {({ isSubmitting, handleSubmit }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex justify-between flex-grow-0 w-full gap-x-3.5">
              <Input
                label="First Name"
                name="firstName"
                className="flex-grow-0 w-1/2"
                required
              />
              <Input
                label="Second Name"
                name="secondName"
                className="flex-grow-0 w-1/2"
                rows={8}
                required
              />
            </div>
            <Input
              label="Email Address"
              name="email"
              className="flex-grow-0 w-full"
              rows={8}
              required
            />
            <Select
              isSearchable
              label="Role"
              className="flex-grow-0 w-full"
              name="role"
              required
              options={ROLE_OPTS}
              placeholder="Select Role"
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
              onClick={e => {
                e.preventDefault();
                setSubmitted(true);
                handleSubmit();
              }}
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
