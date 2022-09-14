import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane } from "neetoui";
import { Input, Select } from "neetoui/formik";

import notesApi from "apis/notes";

import { NOTES_FORM_VALIDATION_SCHEMA } from "../constants";

const NoteForm = ({ onClose, note, isEdit }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async values => {
    try {
      if (isEdit) {
        await notesApi.update(note.id, values);
      } else {
        await notesApi.create(values);
      }
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={note}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label="Title"
              name="title"
            />
            <Input
              required
              className="w-full flex-grow-0"
              label="Description"
              name="description"
              rows={8}
            />
            <Select
              className="w-full flex-grow-0"
              label="Assigned Contact"
              name="assigned_contact"
              placeholder="Select an Option"
              options={[
                {
                  label: "Value One",
                  value: "value1",
                },
                {
                  label: "Value Two",
                  value: "value2",
                },
                {
                  label: "Value Three",
                  value: "value3",
                },
                {
                  label: "Value Four",
                  value: "value4",
                },
                {
                  label: "Value Five",
                  value: "value5",
                },
              ]}
            />
            <Select
              className="w-full flex-grow-0"
              label="Tags"
              name="tag"
              placeholder="Select an Option"
              options={[
                {
                  label: "Getting Started",
                  value: "getting_started",
                },
                {
                  label: "Onboarding",
                  value: "onboarding",
                },
                {
                  label: "User Flow",
                  value: "user_flow",
                },
                {
                  label: "UX",
                  value: "ux",
                },
                {
                  label: "Bugs",
                  value: "bugs",
                },
                {
                  label: "V2",
                  value: "v2",
                },
              ]}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label={isEdit ? "Update" : "Save Changes"}
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

export default NoteForm;
