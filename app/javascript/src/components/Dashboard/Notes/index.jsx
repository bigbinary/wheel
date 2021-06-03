import React, { useState, useEffect } from "react";
import notesApi from "apis/notes";
import { Button, PageLoader } from "neetoui";
import {
  notes as hardCodedNotes,
  paginationProps as mockPaginationProps,
  sortProps as mockSortProps,
} from "common/mock-values";
import EmptyState from "components/Common/EmptyState";
import EmptyNotesListImage from "images/EmptyNotesList";
import { Header, SubHeader } from "neetoui/layouts";

import NoteTable from "./NoteTable";
import NewNotePane from "./NewNotePane";
import DeleteAlert from "./DeleteAlert";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState(hardCodedNotes);
  const [noteToEdit, setNoteToEdit] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => setShowNewNotePane(!!noteToEdit), [noteToEdit]);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      await notesApi.fetch();
      setNotes(hardCodedNotes);
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
    <>
      <Header
        title="Notes"
        actionBlock={
          <Button
            onClick={() => setShowNewNotePane(true)}
            label="Add New Note"
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
            sortProps={mockSortProps}
            paginationProps={mockPaginationProps}
            toggleFilter={() => {}}
          />
          <NoteTable
            selectedNoteIds={selectedNoteIds}
            setSelectedNoteIds={setSelectedNoteIds}
            notes={notes}
            setShowDeleteAlert={setShowDeleteAlert}
            setNoteToEdit={setNoteToEdit}
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
        fetchNotes={fetchNotes}
        noteToEdit={noteToEdit}
      />
      {showDeleteAlert && (
        <DeleteAlert
          selectedNoteIds={selectedNoteIds}
          onClose={() => setShowDeleteAlert(false)}
          refetch={fetchNotes}
        />
      )}
    </>
  );
};

export default Notes;
