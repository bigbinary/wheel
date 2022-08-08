import React, { useState } from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Formik, Form } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";

import notesApi from "apis/notes";

import { NOTES_FORM_VALIDATION_SCHEMA } from "../constants";

export default function NoteForm({ onClose, refetch, note, isEdit }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async values => {
    try {
      if (isEdit) {
        await notesApi.update(note.id, values);
      } else {
        await notesApi.create(values);
      }
      Toastr.success("Form has been successfully saved.");
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
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              label="Title"
              name="title"
              className="w-full flex-grow-0"
            />
            <Textarea
              required
              label="Description"
              name="description"
              placeholder="Enter note description"
              className="w-full flex-grow-0"
              rows={3}
            />
            <Select
              defaultValue={{
                label: "Jacob Jones",
                value: "Jacob Jones",
              }}
              isSearchable
              label="Assigned Contact"
              name="assignedContact"
              required
              className="w-full flex-grow-0"
              options={[
                {
                  label: "Jacob Jones",
                  value: "Jacob Jones",
                },
                {
                  label: "Ronald Richards",
                  value: "Ronald Richards",
                },
              ]}
              placeholder="Select contact"
            />
            <Select
              defaultValue={{
                label: "Sales",
                value: "Sales",
              }}
              isSearchable
              label="Tags"
              name="ValueList"
              className="w-full flex-grow-0"
              isMulti
              required
              options={[
                {
                  label: "Sales",
                  value: "Sales",
                },
                {
                  label: "Finance",
                  value: "Finance",
                },
              ]}
              placeholder="Select tags"
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
              icon={Check}
              iconPosition="right"
              iconSize={14}
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
