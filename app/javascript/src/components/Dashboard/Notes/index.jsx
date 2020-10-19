import React, { useState, useEffect } from "react";
import { PageHeading } from "nitroui/layouts";
import { Button, PageLoader } from "nitroui";
import NotesAPI from "apis/notes";
import EmptyState from "components/Common/EmptyState";
import SubHeading from "./SubHeading";
import NoteTable from "./NoteTable";
import NewNotePane from "./NewNotePane";
import DeleteAlert from "./DeleteAlert";
import EmptyNotesListImage from "images/EmptyNotesList";

export default function index() {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await NotesAPI.fetch();
      setNotes(response.data);
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
    <div>
      <PageHeading
        title="Notes"
        rightButton={() => (
          <Button
            onClick={() => setShowNewNotePane(true)}
            label="Add new note"
            icon="ri-add-line"
          />
        )}
      />
      {notes.length ? (
        <>
          <SubHeading
            loading={loading}
            selectedNoteIds={selectedNoteIds}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setShowDeleteAlert={setShowDeleteAlert}
          />
          <NoteTable
            selectedNoteIds={selectedNoteIds}
            setSelectedNoteIds={setSelectedNoteIds}
            notes={notes}
          />
        </>
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          title="Looks like you don't have any notes!"
          subtitle="Add your notes to send customized emails to them."
          primaryAction={() => setShowNewNotePane(true)}
          primaryActionLabel="Add new note"
        />
      )}
      <NewNotePane
        showPane={showNewNotePane}
        setShowPane={setShowNewNotePane}
        fetchNotes={fetchNotes}
      />
      {showDeleteAlert && (
        <DeleteAlert
          selectedNoteIds={selectedNoteIds}
          onClose={() => setShowDeleteAlert(false)}
          refetch={fetchNotes}
        />
      )}
    </div>
  );
}
