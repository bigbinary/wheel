import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane } from "neetoui/v2";
import { Input, Textarea, Select } from "neetoui/v2/formik";

import notesApi from "apis/notes";
import formValidationSchemas from "constants/formValidationSchemas";

import { ASSIGNED_CONTACTS_OPTS, ROLE_TAG_OPTS } from "./constants";

export default function NoteForm({ onClose, refetch, note, isEdit }) {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async values => {
    try {
      setSubmitted(true);
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
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={formValidationSchemas.notesForm}
    >
      {({ isSubmitting, handleSubmit }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              label="Title"
              name="title"
              className="flex-grow-0 w-full"
              required
            />
            <Textarea
              label="Description"
              name="description"
              className="flex-grow-0 w-full"
              rows={8}
              required
            />
            <Select
              isSearchable
              label="Assigned Contact"
              className="flex-grow-0 w-full"
              name="contact"
              required
              options={ASSIGNED_CONTACTS_OPTS}
              placeholder="Select Role"
            />
            <Select
              isSearchable
              label="Tags"
              className="flex-grow-0 w-full"
              name="tags"
              required
              options={ROLE_TAG_OPTS}
              placeholder="Select Role"
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
