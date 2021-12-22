import React, { useState } from "react";

import { Scrollable } from "@bigbinary/neetoui/v2/layouts"

import Note from "./Note";

export default function NoteList({
  notes = []
}) {
  const [showEditNote, setShowEditNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  return (
    <>
      <Scrollable className="w-full">
        {notes.map(note => (
          <Note 
            id={note.id} 
            title={note.title} 
            description={note.description}
            tags={note.tags}
            createdAt={note.createdAt}
          />
        ))}
      </Scrollable>
      
    </>
  );
}