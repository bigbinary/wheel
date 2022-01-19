import React from "react";

import { Pane, Typography } from "neetoui";

import formInitialValues from "constants/formInitialValues";

import Form from "./Form";

export default function NewNotePane({ fetchNotes, showPane, setShowPane }) {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Create a New Note
        </Typography>
      </Pane.Header>
      <Form
        onClose={onClose}
        refetch={fetchNotes}
        note={formInitialValues.notesForm}
        isEdit={false}
      />
    </Pane>
  );
}
