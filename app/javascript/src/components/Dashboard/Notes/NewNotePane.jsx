import React from "react";
import { Pane } from "neetoui";
import NewNoteForm from "./NewNoteForm";

export default function NewNotePane({ fetchNotes, showPane, setShowPane }) {
  const onClose = () => setShowPane(false);
  return (
    <Pane title="Create a new note" isOpen={showPane} onClose={onClose}>
      <div className="p-6">
        <NewNoteForm onClose={onClose} refetch={fetchNotes} />
      </div>
    </Pane>
  );
}
