import React, { useState, useEffect } from "react";

import { Button, PageLoader, Toastr } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { NOTES } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NotesList from "./NotesList";
import NotesMenu from "./NotesMenu";
import NewNotePane from "./Pane/Create";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [deleteNoteId, setDeleteNoteId] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setNotes(NOTES);
    setLoading(false);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  const handleDeleteNote = async () => {
    try {
      const newNotes = notes.filter(note => note.id !== deleteNoteId);
      setNotes(newNotes);
      setIsOpen(false);
      Toastr.success("Note Successfully Deleted");
    } catch (error) {
      logger.error(error);
      Toastr.success("Some Error Occured! Note not deleted");
    }
  };

  const handleCloseDeleteAlert = () => {
    setDeleteNoteId(null);
    setShowDeleteAlert(false);
  };

  return (
    <div className="flex w-full">
      <NotesMenu showMenu={showMenu} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenu(show => !show)}
          title="Notes"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add New Note"
              onClick={() => setShowNewNotePane(true)}
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <NotesList
          notes={notes}
          setDeleteNoteId={setDeleteNoteId}
          setIsOpen={setIsOpen}
          setShowDeleteAlert={setShowDeleteAlert}
          setShowNewNotePane={setShowNewNotePane}
        />
        <NewNotePane
          setShowPane={setShowNewNotePane}
          showPane={showNewNotePane}
        />
        {showDeleteAlert && (
          <DeleteAlert
            isOpen={isOpen}
            onClose={handleCloseDeleteAlert}
            onDelete={handleDeleteNote}
          />
        )}
      </Container>
    </div>
  );
};

export default Notes;
