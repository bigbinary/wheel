import React from "react";

import { Pane, Typography } from "neetoui/v2";

import ContactForm from "./Form";

export default function NewContactPane({ showPane, setShowPane, setContacts }) {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Create a New Note
        </Typography>
      </Pane.Header>
      <ContactForm setContacts={setContacts} onClose={onClose} />
    </Pane>
  );
}
