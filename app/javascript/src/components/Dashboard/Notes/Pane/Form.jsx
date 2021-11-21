import React from "react";

import { Formik, Form } from "formik";
import { Button, Pane } from "neetoui/v2";
import { Input, Textarea } from "neetoui/v2/formik";

import notesApi from "apis/notes";
import formValidationSchemas from "constants/formValidationSchemas";

export default function NoteForm({ onClose, refetch, note, isEdit }) {
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
      onSubmit={handleSubmit}
      validationSchema={formValidationSchemas.notesForm}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input label="Title" name="title" className="flex-grow-0 w-full" />
            <Textarea
              label="Description"
              name="description"
              className="flex-grow-0 w-full"
              rows={8}
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
