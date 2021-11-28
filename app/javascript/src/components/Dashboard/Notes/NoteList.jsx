import React, { useEffect, useState } from "react";

import NoteItemCard from "./NoteItemCard";
import EditNotePane from "./Pane/EditNote";

export const COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export default function NoteList({
  setSelectedNoteId,
  selectedNoteId,
  setShowDeleteAlert,
  notes = [],
  fetchNotes,
}) {
  const [showEditNote, setShowEditNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState(
    notes.find(n => n.id === selectedNoteId)
  );
  useEffect(() => {
    setSelectedNote(notes.find(n => n.id === selectedNoteId));
  }, [selectedNoteId]);
  return (
    <>
      <div className="w-full notes-table-height">
        {notes.length > 0 &&
          notes.map(note => (
            <NoteItemCard
              setSelectedNoteId={setSelectedNoteId}
              setShowDeleteAlert={setShowDeleteAlert}
              key={note.id}
              note={note}
            />
          ))}
      </div>
      <EditNotePane
        showPane={showEditNote}
        setShowPane={setShowEditNote}
        fetchNotes={fetchNotes}
        note={selectedNote}
      />
    </>
  );
}
