import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { PageLoader } from "neetoui";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";
import { getInitialSidebarLink } from "helpers/notes";

import DeleteAlert from "./DeleteAlert";
import NewNotePane from "./NewNotePane";
import NotesCategories from "./NotesCategories";
import NotesHeader from "./NotesHeader";
import NotesList from "./NotesList";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showCategoryPane, setShowCategoryPane] = useState(true);
  const [selectedNoteCategory, setSelectedNoteCategory] = useState(
    getInitialSidebarLink()
  );
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await notesApi.fetch();
      setNotes(response.data.notes);
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
      {notes.length ? (
        <div className="flex w-full">
          <NotesCategories
            visible={showCategoryPane}
            selectedCategory={selectedNoteCategory}
            onChangeCategory={setSelectedNoteCategory}
          />
          <div className="flex-1 p-4">
            <NotesHeader
              activeCategory={selectedNoteCategory}
              onToggleMenu={() => setShowCategoryPane(!showCategoryPane)}
              addButtonProps={{
                onClick: () => setShowNewNotePane(true)
              }}
            />
            <NotesList
              notes={notes}
              noteApi={{ onDelete: () => setShowDeleteAlert(true) }}
            />
          </div>
        </div>
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
          selectedNoteIds={[]}
          onClose={() => setShowDeleteAlert(false)}
          refetch={fetchNotes}
        />
      )}
    </>
  );
};

export default Notes;
