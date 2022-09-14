import React from "react";

import Note from "./Note";

const Table = ({ notes = [] }) => (
  <>
    <div className="notes-table-height flex w-full flex-col">
      {notes.map(note => (
        <Note
          avatar={note.avatar}
          created_at={note.created_at}
          description={note.description}
          key={note.id}
          status={note.status}
          tag={note.tag}
          title={note.title}
        />
      ))}
    </div>
    {/* <EditNotePane
        fetchNotes={fetchNotes}
        note={selectedNote}
        setShowPane={setShowEditNote}
        showPane={showEditNote}
      /> */}
  </>
);

export default Table;
