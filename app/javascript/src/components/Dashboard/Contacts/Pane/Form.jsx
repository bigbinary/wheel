import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane } from "neetoui";
import { Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import { CONTACTS_FORM_VALIDATION_SCHEMA } from "../constants";

const ContactForm = ({ onClose, contact }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    onClose();
    Toastr.success("Form has been successfully saved.");
  };

  return (
    <Formik
      validateOnBlur={submitted}
      validateOnChange={submitted}
      initialValues={contact}
      onSubmit={handleSubmit}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex w-full">
              <Input
                required
                label="First Name"
                name="firstname"
                className="w-[50%]"
              />
              <Input
                required
                label="Last Name"
                name="lastname"
                className="ml-2"
              />
            </div>
            <Input
              required
              label="Email Address"
              name="email"
              className="w-full flex-grow-0"
            />
            <Select
              name="role"
              label="Role"
              className="w-full flex-grow-0"
              options={[
                { value: "Owner", label: "Owner" },
                { value: "Member", label: "Member" },
                { value: "Developer", label: "Developer" },
              ]}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              disabled={isSubmitting}
              loading={isSubmitting}
              type="submit"
              label="Save Changes"
              size="large"
              style="primary"
              className="mr-3"
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
};
export default ContactForm;
