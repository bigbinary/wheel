import React from "react";

import { Input, Textarea, Select } from "@bigbinary/neetoui/v2";
import { Formik, Form } from "formik";

import notesApi from "apis/notes";

export default function NewNoteForm({ onClose, refetch }) {
  const handleSubmit = async values => {
    try {
      await notesApi.create(values);
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };
  return (
    <Formik onSubmit={handleSubmit}>
      <Form className="w-full">
        <Input label="Title" name="title" className="mb-6" required />
        <Textarea
          label="Description"
          name="description"
          rows={1}
          className="mb-6"
          required
        />
        <div className="mb-6">
          <Select
            placeholder="Select Role"
            required
            isSearchable
            label="Assigned Contact"
            name="contactList"
            options={[
              {
                label: "Nuzair",
                value: "value1"
              },
              {
                label: "Sam",
                value: "value2"
              },
              {
                label: "Oliver",
                value: "value3"
              }
            ]}
          />
        </div>
        <div className="mb-6">
          <Select
            placeholder="Select Role"
            isSearchable
            required
            label="Tags"
            name="tagList"
            options={[
              {
                label: "HR",
                value: "value1"
              },
              {
                label: "TB3",
                value: "value2"
              },
              {
                label: "Onboarding",
                value: "value3"
              }
            ]}
          />
        </div>
      </Form>
    </Formik>
  );
}
