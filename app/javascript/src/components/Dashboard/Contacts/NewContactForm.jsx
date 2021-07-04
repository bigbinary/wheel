import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { Input, Textarea, Select } from "neetoui/formik";
import { Button, DateInput, Switch, Toastr } from "neetoui";

export default function NewContactForm({ onClose, refetch }) {
  const [dueDateCheck, setDueDateCheck] = useState(false);
  const [selectedDueDate, setSelectedDueDate] = useState(new Date());

  const handleSubmit = async () => {
    try {
      refetch();
      onClose();
      Toastr.success("New contact added successfully");
    } catch (err) {
      logger.error(err);
    }
  };

  const tagOptions = [
    { label: "Internal", value: "internal" },
    { label: "External", value: "external" },
  ];

  const contactOptions = [
    { label: "Amal Dinesh", value: "amaldinesh" },
    { label: "Karthik Menon", value: "karthikmenon" },
  ];
  return (
    <Formik
      initialValues={{
        title: "React Onboarding Challenge",
        tags: tagOptions[0],
        description: "Please use neeto-ui and tailwindCSS.",
        assignedContact: contactOptions[0],
      }}
      onSubmit={handleSubmit}
      validationSchema={yup.object({
        title: yup.string().required("Title is required"),
        tags: yup.object().required("Tag is required"),
        description: yup.string().required("Description is required"),
        assignedContact: yup.object().required("Contact is required"),
      })}
    >
      {({ isSubmitting }) => (
        <Form>
          <Input label="Note Title" name="title" className="mb-6" />
          <Select
            label="Tags"
            isCreateable
            defaultValue={[{ value: "internal", label: "Internal" }]}
            placeholder="Select an Option"
            name="tags"
            defaultOptions={tagOptions}
            className="mb-6"
          />
          <Textarea
            label="Note Description"
            name="description"
            rows={8}
            className="mb-6"
          />
          <Select
            label="Assigned Contact"
            isCreateable
            defaultValue={{ value: "internal", label: "Internal" }}
            placeholder="Select a Contact"
            name="assignedContact"
            defaultOptions={contactOptions}
          />
           
          <div className="flex justify-between mb-6">
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
