import React from "react";

import EmptyNotesListImage from "images/EmptyNotesList";

import EmptyState from "components/Common/EmptyState";

import Note from "./Note";

const NotesList = ({
  notes,
  setShowNewNotePane,
  setShowDeleteAlert,
  setDeleteNoteId,
  setIsOpen,
}) => (
  <>
    {notes?.length ? (
      <div className="notes-table-height flex w-full flex-col">
        {notes.map(note => (
          <Note
            avatar={note.avatar}
            created_at={note.created_at}
            description={note.description}
            id={note.id}
            key={note.id}
            setDeleteNoteId={setDeleteNoteId}
            setIsOpen={setIsOpen}
            setShowDeleteAlert={setShowDeleteAlert}
            status={note.status}
            tag={note.tag}
            title={note.title}
          />
        ))}
      </div>
    ) : (
      <EmptyState
        image={EmptyNotesListImage}
        primaryAction={() => setShowNewNotePane(true)}
        primaryActionLabel="Add New Note"
        subtitle="Add your notes to send customized emails to them."
        title="Looks like you don't have any notes!"
      />
    )}
  </>
);

export default NotesList;
