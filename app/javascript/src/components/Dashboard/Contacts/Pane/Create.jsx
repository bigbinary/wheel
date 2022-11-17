import React from "react";

import { Pane, Typography, Toastr } from "neetoui";

import Form from "./Form";

import { CONTACT_FORM_INITIAL_FORM_VALUES } from "../constants";

const NewContactPane = ({ showPane, setShowPane }) => {
  const onClose = () => setShowPane(false);

  const onSubmit = () => {
    Toastr.success("Contact created successfully");
    onClose();
  };

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Contact
        </Typography>
      </Pane.Header>
      <Form
        contact={CONTACT_FORM_INITIAL_FORM_VALUES}
        isEdit={false}
        onClose={onClose}
        onSubmit={onSubmit}
      />
    </Pane>
  );
};

export default NewContactPane;
