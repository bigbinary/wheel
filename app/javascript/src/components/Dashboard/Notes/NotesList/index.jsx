import React from "react";

import ListItem from "./ListItem";

const NotesList = ({ notes, noteApi }) => {
  const { onEdit, onDelete } = noteApi;

  return (
    <div className="m-2">
      {notes.map(note => (
        <ListItem
          key={note.id}
          item={note}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default NotesList;
