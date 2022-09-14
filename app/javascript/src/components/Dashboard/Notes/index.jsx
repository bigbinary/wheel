import React, { useState, useEffect } from "react";

import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { NOTES } from "./constants";
import NotesList from "./NotesList";
import NotesMenu from "./NotesMenu";
import NewNotePane from "./Pane/Create";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([{}]);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setNotes(NOTES);
    setLoading(false);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <Container>
      <NotesMenu showMenu={showMenu} />
      <Header
        title="All Notes"
        actionBlock={
          <Button
            icon="ri-add-line"
            label="Add New Note"
            onClick={() => setShowNewNotePane(true)}
          />
        }
        menuBarToggle={() => {
          setShowMenu(!showMenu);
        }}
        searchProps={{
          value: searchTerm,
          onChange: e => setSearchTerm(e.target.value),
        }}
      />
      <NotesList notes={notes} setShowNewNotePane={setShowNewNotePane} />
      <NewNotePane
        setShowPane={setShowNewNotePane}
        showPane={showNewNotePane}
      />
      {/* {showDeleteAlert && (
        <DeleteAlert
          onClose={() => setShowDeleteAlert(false)}
        />
      )} */}
    </Container>
  );
};

export default Notes;
