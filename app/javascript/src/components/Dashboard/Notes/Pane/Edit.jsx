import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

export default function EditNotePane({
  fetchNotes,
  showPane,
  setShowPane,
  note,
}) {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Edit Note
        </Typography>
      </Pane.Header>
      <Form isEdit onClose={onClose} refetch={fetchNotes} note={note} />
    </Pane>
  );
}
