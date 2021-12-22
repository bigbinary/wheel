import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader, Typography } from "neetoui/v2";
import { Container, Header, SubHeader, MenuBar, Scrollable } from "@bigbinary/neetoui/v2/layouts";


import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import DeleteAlert from "./DeleteAlert";
import Note from "./Note";
import FilterBar from "./FilterBar";

import NewNotePane from "../Pane/CreateNote";
import constants from "../constants";

const Notes = () => {
  const [loading, setLoading] = useState(false);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState(constants.notes);
  const [showMenu, setShowMenu] = useState(true);
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  useEffect(() => {
    // fetchNotes();
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
    <>
      <FilterBar showMenu={showMenu}/>
      <Container>
        <Header
          actionBlock={
            <Button
              onClick={() => setShowNewNotePane(true)}
              label="Add New Note"
              icon="ri-add-line"
            />
          }
          searchProps={{
            onChange: setSearchTerm,
            value: ''
          }}
          title="Notes"
          menuBarToggle={() => setShowMenu(!showMenu)}
        />
        {notes.length ? (
            <Scrollable className="w-full">
              {notes.map(note => (
                <Note 
                  id={note.id} 
                  title={note.title} 
                  description={note.description}
                  tags={note.tags}
                  createdAt={note.createdAt}
                  key={note.id}
                />
              ))}
            </Scrollable>
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
            selectedNoteIds={selectedNoteIds}
            onClose={() => setShowDeleteAlert(false)}
            refetch={fetchNotes}
            setSelectedNoteIds={setSelectedNoteIds}
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
