import React, { useState, useEffect } from "react";

import { Plus } from "@bigbinary/neeto-icons";
import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader, Input } from "neetoui/v2";
import { Container, Header } from "neetoui/v2/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import DeleteAlert from "./DeleteAlert";
import NoteList from "./NoteList";
import NotesMenu from "./NotesMenu";
import NewNotePane from "./Pane/CreateNote";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState(0);
  const [notes, setNotes] = useState([]);
  const [showNotesMenu, setShowNotesMenu] = useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const { data } = await notesApi.fetch();
      setNotes(data.notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <section className="flex w-full">
      <section>
        <NotesMenu showNotesMenu={showNotesMenu}></NotesMenu>
      </section>
      <Container>
        <Header
          title="All Notes"
          menuBarToggle={() => setShowNotesMenu(value => !value)}
          actionBlock={
            <>
              <Input
                className="mr-4 w-72"
                placeholder="Search Name, Email, Phone Number, Ect."
              />
              <Button
                onClick={() => setShowNewNotePane(true)}
                label="Add New Note"
                icon={Plus}
              />
            </>
          }
        />
        {notes.length ? (
          <NoteList
            selectedNoteId={selectedNoteId}
            setSelectedNoteId={setSelectedNoteId}
            setShowDeleteAlert={setShowDeleteAlert}
            notes={notes}
            fetchNotes={fetchNotes}
          />
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
          fetchNotes={fetchNotes}
        />
        {showDeleteAlert && (
          <DeleteAlert
            selectedNoteId={selectedNoteId}
            onClose={() => setShowDeleteAlert(false)}
            refetch={fetchNotes}
            setSelectedNoteId={setSelectedNoteId}
          />
        )}
      </Container>
    </section>
  );
};

export default Notes;
