import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import { NOTES_FORM_VALIDATION_SCHEMA } from "../constants";

export default function NoteForm({ onClose, note, isEdit }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    try {
      Toastr.success("Note has been successfully created.");
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={note}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              label="Title"
              name="title"
              className="w-full flex-grow-0"
              placeholder="Add Title"
              required
            />
            <Input
              label="Description"
              name="description"
              className="w-full flex-grow-0"
              placeholder="Add Description"
              required
            />
            <Select
              label="Assigned Contact"
              name="contact"
              className="w-full flex-grow-0"
              placeholder="Select Role"
              required
            />
            <Select
              label="Tags"
              name="tags"
              className="w-full flex-grow-0"
              placeholder="Select Tag"
              required
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              type="submit"
              label={isEdit ? "Update" : "Save Changes"}
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
