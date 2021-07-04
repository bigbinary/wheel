import React from "react";
import { Pane } from "neetoui";
import NewNoteForm from "./NewNoteForm";

export default function NewNotePane({ fetchNotes, showPane, setShowPane }) {
  const onClose = () => setShowPane(false);
  return (
    <Pane title="Add Note" isOpen={showPane} onClose={onClose}>
      <div className="px-6">
        <NewNoteForm onClose={onClose} refetch={fetchNotes} />
      </div>
    </Pane>
  );
}
