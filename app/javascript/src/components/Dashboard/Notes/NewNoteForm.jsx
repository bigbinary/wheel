import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { Input, Textarea, Select } from "neetoui/formik";
import { Button, DateInput, Switch, Toastr } from "neetoui";
import {
  TAG_OPTIONS,
  CONTACT_OPTIONS,
  FORM_INITIAL_VALUES,
  VALIDATION_SCHEMA,
} from "./Constants";

export default function NewNoteForm({ onClose, refetch }) {
  const [dueDateCheck, setDueDateCheck] = useState(false);
  const [selectedDueDate, setSelectedDueDate] = useState(new Date());

  const handleSubmit = async () => {
    try {
      refetch();
      onClose();
      Toastr.success("New note added successfully");
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          <Input label="Note Title" name="title" />
          <Select
            label="Tags"
            isCreateable
            defaultValue={[{ value: "internal", label: "Internal" }]}
            placeholder="Select an Option"
            name="tags"
            defaultOptions={TAG_OPTIONS}
          />
          <Textarea label="Note Description" name="description" rows={8} />
          <Select
            label="Assigned Contact"
            isCreateable
            defaultValue={{ value: "internal", label: "Internal" }}
            placeholder="Select a Contact"
            name="assignedContact"
            defaultOptions={CONTACT_OPTIONS}
          />
           
          <div className="flex justify-between">
            <label>Add Due Date to Note</label>
            <Switch
              checked={dueDateCheck}
              onChange={e => setDueDateCheck(e.target.value)}
            />
          </div>
          {dueDateCheck && (
            <DateInput
              value={selectedDueDate}
              label="Due Date"
              onChange={newDate => setSelectedDueDate(newDate)}
            />
          )}
          <div className="nui-pane__footer nui-pane__footer--absolute">
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="secondary"
            />

            <Button
              type="submit"
              label="Save Changes"
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
