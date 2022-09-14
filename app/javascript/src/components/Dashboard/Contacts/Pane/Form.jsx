import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane } from "neetoui";
import { Input, Select } from "neetoui/formik";

import { CONTACTS_FORM_VALIDATION_SCHEMA } from "../constants";

const ContactForm = ({ onClose, contact }) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Formik
      initialValues={contact}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
      onSubmit={() => {}}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex w-full gap-4">
              <Input
                required
                label="First Name"
                name="first_name"
                placeholder="Enter first name"
              />
              <Input
                required
                label="Last Name"
                name="last_name"
                placeholder="Enter last name"
              />
            </div>
            <Input
              required
              className="w-full flex-grow-0"
              label="Email"
              name="email"
              placeholder="Enter your email address"
            />
            <Select
              className="w-full flex-grow-0"
              label="Role"
              name="role"
              placeholder="Select Role"
              options={[
                {
                  label: "Value One",
                  value: "value1",
                },
                {
                  label: "Value Two",
                  value: "value2",
                },
              ]}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label={"Save Changes"}
              loading={isSubmitting}
              size="large"
              style="primary"
              type="submit"
              onClick={() => setSubmitted(true)}
            />
            <Button
              label="Cancel"
              size="large"
              style="text"
              onClick={onClose}
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
