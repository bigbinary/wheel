import React, { useState, useEffect } from "react";
import { Button, PageLoader } from "neetoui";
import EmptyState from "components/Common/EmptyState";
import EmptyNotesListImage from "images/EmptyNotesList";
import { Header, SubHeader } from "neetoui/layouts";

import NoteTable from "./NoteTable";
import NewNotePane from "./NewNotePane";
import DeleteAlert from "./DeleteAlert";

const InitialNotesData = [
  {
    id: 1,
    title: "Change Support Email",
    description: "forward all internal mails...",
    tag: "Internal",
    createdDate: "April 10, 2021",
    isDueDate: false,
    contact: "Neeraj Singh",
  },
  {
    id: 2,
    title: "Feedback",
    description: "Feedback v1.0",
    tag: "Agile Workflow",
    createdDate: "April 10, 2021",
    isDueDate: true,
    dueDate: "April 10, 2021",
    contact: "Vinay V",
  },
  {
    id: 3,
    title: "Feedback Hover",
    description: "Feedback V2.0......",
    tag: "Bug",
    createdDate: "April 10, 2021",
    isDueDate: false,
    contact: "Charlie Smith",
  },
];

const Notes = () => {
  const [loading, setLoading] = useState(false);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setLoading(true);
    const notesTimeout = setTimeout(() => {
      setNotes(InitialNotesData);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(notesTimeout);
  }, []);

  const addNewNote = newNote => {
    newNote.id = notes.length + 1;
    setNotes([...notes, newNote]);
  };

  const deleteNotes = () => {
    const updatedNotes = notes.filter(
      note => !selectedNoteIds.includes(note.id)
    );
    setNotes(updatedNotes);
  };

  if (loading) {
    return <PageLoader />;
  }
  return (
    <>
      <Header
        title="Notes"
        actionBlock={
          <Button
            onClick={() => setShowNewNotePane(true)}
            label="New Note"
            icon="ri-add-line"
          />
        }
      />
      {notes.length ? (
        <>
          <SubHeader
            searchProps={{
              value: searchTerm,
              onChange: e => setSearchTerm(e.target.value),
              clear: () => setSearchTerm(""),
            }}
            deleteButtonProps={{
              onClick: () => setShowDeleteAlert(true),
              disabled: !selectedNoteIds.length,
            }}
            sortProps={{
              options: [
                { label: "Tags", value: "tags" },
                { label: "Name", value: "name" },
                { label: "Created Date", value: "createdDate" },
              ],
            }}
            paginationProps={{
              count: 250,
              pageNo: 1,
              pageSize: 50,
            }}
            showMenu={false}
          />
          <NoteTable
            selectedNoteIds={selectedNoteIds}
            setSelectedNoteIds={setSelectedNoteIds}
            setShowDeleteAlert={setShowDeleteAlert}
            notes={notes}
          />
        </>
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          title="Looks like you don't have any notes!"
          subtitle="Add your notes to send customized emails to them."
          primaryAction={() => setShowNewNotePane(true)}
          primaryActionLabel="Add New Note"
        />
      )}
      <NewNotePane
        showPane={showNewNotePane}
        setShowPane={setShowNewNotePane}
        addNewNote={addNewNote}
      />
      {showDeleteAlert && (
        <DeleteAlert
          selectedNoteIds={selectedNoteIds}
          onClose={() => setShowDeleteAlert(false)}
          deleteNotes={deleteNotes}
        />
      )}
    </>
  );
};

export default Notes;
