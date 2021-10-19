import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Pane, Typography, Button, Toastr } from "@bigbinary/neetoui/v2";

import NewNoteForm from "./NewNoteForm";

export default function NewNotePane({ fetchNotes, showPane, setShowPane }) {
  const onClose = () => setShowPane(false);
  const handleSubmit = () => {
    Toastr.success("Notes successfully created.");
  };
  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Note
        </Typography>
      </Pane.Header>
      <Pane.Body>
        <NewNoteForm onClose={onClose} refetch={fetchNotes} />
      </Pane.Body>
      <Pane.Footer className="flex items-center space-x-2">
        <Button
          type="submit"
          label="Save Changes"
          icon={Check}
          iconPosition="right"
          size="large"
          style="primary"
          className="ml-2"
          onClick={handleSubmit}
        />
        <Button onClick={onClose} label="Cancel" size="large" style="text" />
      </Pane.Footer>
    </Pane>
  );
}
