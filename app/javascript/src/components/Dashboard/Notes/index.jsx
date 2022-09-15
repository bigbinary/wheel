import React, { useState } from "react";

import { Button } from "@bigbinary/neetoui";
import { Container, Header } from "@bigbinary/neetoui/layouts";

import { NOTES as notes } from "components/constants";

import DeleteAlert from "./DeleteAlert";
import NotesList from "./NotesList";
import NotesMenuBar from "./NotesMenuBar";
import NewNotePane from "./Pane/Create";

const Notes = () => {
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [showMenu, setshowMenu] = useState(true);

  return (
    <div className="flex">
      <NotesMenuBar showMenu={showMenu} />
      <Container>
        <Header
          title="All Notes"
          actionBlock={
            <Button
              onClick={() => setShowNewNotePane(true)}
              label="Add Note"
              icon="ri-add-line"
            />
          }
          menuBarToggle={
            (onclick = () => {
              setshowMenu(!showMenu);
            })
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <NotesList notes={notes} />
        <NewNotePane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
          fetchNotes={notes}
        />
        {showDeleteAlert && (
          <DeleteAlert
            selectedNoteIds={selectedNoteIds}
            onClose={() => setShowDeleteAlert(false)}
            refetch={notes}
            setSelectedNoteIds={setSelectedNoteIds}
          />
        )}
      </Container>
    </div>
  );
};

export default Notes;
