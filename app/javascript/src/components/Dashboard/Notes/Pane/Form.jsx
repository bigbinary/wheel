import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane, Select } from "neetoui";
import { Input, Textarea } from "neetoui/formik";

import notesApi from "apis/notes";

import {
  NOTES_FORM_VALIDATION_SCHEMA,
  ASSIGN_CONTACT_OPTIONS,
  NOTE_TAG_OPTIONS,
} from "../constants";

const NoteForm = ({ onClose, refetch, note, isEdit }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async values => {
    try {
      if (isEdit) {
        await notesApi.update(note.id, values);
      } else {
        await notesApi.create(values);
      }
      refetch();
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
            <Textarea
              required
              className="w-full flex-grow-0"
              label="Description"
              name="description"
              rows={2}
            />
            <Select
              required
              className="w-full flex-grow-0"
              isSearchable={false}
              label="Assigned Contact"
              name="assigned_contact"
              options={ASSIGN_CONTACT_OPTIONS}
            />
            <Select
              isMulti
              isSearchable
              required
              className="w-full flex-grow-0"
              label="Assigned Contact"
              name="tags"
              options={NOTE_TAG_OPTIONS}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label={isEdit ? "Update" : "Save changes"}
              loading={isSubmitting}
              style="primary"
              type="submit"
              onClick={() => setSubmitted(true)}
            />
            <Button label="Cancel" style="text" onClick={onClose} />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
};

export default NoteForm;
