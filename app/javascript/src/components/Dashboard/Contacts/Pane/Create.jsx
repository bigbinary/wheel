import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

import { CONTACTS_FORM_INITIAL_FORM_VALUES } from "../constants";

export default function NewContactPane({ showPane, setShowPane }) {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Note
        </Typography>
      </Pane.Header>
      <Form onClose={onClose} contact={CONTACTS_FORM_INITIAL_FORM_VALUES} />
    </Pane>
  );
}
