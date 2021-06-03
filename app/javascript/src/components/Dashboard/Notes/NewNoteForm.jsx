import React from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { Input, Textarea } from "neetoui/formik";
import { Button } from "neetoui";
import notesApi from "apis/notes";

export default function NewNoteForm({ onClose, refetch, noteToEdit }) {
  const handleSubmit = async values => {
    try {
      await notesApi.create(values);
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  const initialValues = {
    id: noteToEdit.id ?? "",
    title: noteToEdit.title ?? "",
    description: noteToEdit.description ?? "",
    tag: noteToEdit.tag ?? "",
    createdDate: noteToEdit.createdDate ?? "",
    dueDate: noteToEdit.dueDate ?? "",
    contact: noteToEdit.contact ?? "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={yup.object({
        title: yup.string().required("Title is required"),
        description: yup.string().required("Description is required"),
      })}
    >
      {({ isSubmitting }) => (
        <Form>
          <Input label="Note Title" name="title" className="mb-6" />
          <Textarea label="Note Description" name="description" rows={8} />
          <div className="nui-pane__footer nui-pane__footer--absolute">
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
