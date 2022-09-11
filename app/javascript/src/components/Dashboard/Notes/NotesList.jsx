import React from "react";

import EmptyNotesListImage from "images/EmptyNotesList";

import EmptyState from "components/Common/EmptyState";

import Table from "./Table";

const NotesList = ({ notes, setShowNewNotePane }) => (
  <>
    {notes?.length ? (
      <Table notes={notes} />
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
