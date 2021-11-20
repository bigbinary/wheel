import React from "react";

import { Pane, Typography } from "neetoui/v2";

import NewNoteForm from "./Form";

export default function NewNotePane({ fetchNotes, showPane, setShowPane }) {
  const onClose = () => setShowPane(false);
  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Create a New Note
        </Typography>
      </Pane.Header>
      <NewNoteForm onClose={onClose} refetch={fetchNotes} />
    </Pane>
  );
}
