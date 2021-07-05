import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Input, Textarea, Select } from "neetoui/formik";
import { Button, DateInput, Switch, Toastr } from "neetoui";
import {
  DEPARTMENT_OPTIONS,
  FORM_INITIAL_VALUES,
  VALIDATION_SCHEMA,
} from "./Constants";

export default function NewContactForm({ onClose, refetch }) {
  const [addToBasecamp, setAddToBasecamp] = useState(true);
  const [selectedDueDate, setSelectedDueDate] = useState(new Date());

  const handleSubmit = async () => {
    try {
      // refetch();
      console.log("amal");
      onClose();
      Toastr.success("New contact added successfully");
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
          <Input label="Name" name="name" />
          <Input label="Email" name="email" />
          <Input label="Contact Number" name="contact" />
          <Select
            label="Department"
            defaultValue={{ value: "engineering", label: "Engineering" }}
            placeholder="Select a Department"
            name="department"
            defaultOptions={DEPARTMENT_OPTIONS}
          />
           
          <div className="flex justify-between">
            <label>Add to Basecamp</label>
            <Switch
              checked={addToBasecamp}
              onChange={e => setAddToBasecamp(!addToBasecamp)}
            />
          </div>
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
