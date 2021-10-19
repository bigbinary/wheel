import React, { useState, useEffect } from "react";

import { Search } from "@bigbinary/neeto-icons";
import EmptyNotesListImage from "images/EmptyNotesList";
import { PageLoader } from "neetoui";
import { Button, Input } from "neetoui/v2";
import { Header, Container } from "neetoui/v2/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";
import { Menubar } from "components/Common/Menubar";

import DeleteAlert from "./DeleteAlert";
import NewNotePane from "./NewNotePane";
import NoteTable from "./NoteTable";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState([]);
  const [toggle, setToggle] = useState(true);

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
    <div className="flex w-full align-bottom">
      <Menubar showMenu={toggle} />
      <Container>
        <Header
          menuBarToggle={() => setToggle(!toggle)}
          title="All Notes"
          actionBlock={
            <div className="flex justify-around mr-2 w-max">
              <Input
                className="w-96 px-4"
                size="large"
                placeholder="Search Name, Email, Phone Number"
                prefix={<Search size={16} />}
                onChange={setSearchTerm}
                value={searchTerm}
              />
              <Button
                className="h-10"
                size="large"
                label="Add New Notes"
                onClick={() => setShowNewNotePane(true)}
                type="button"
                icon="ri-add-line"
              />
            </div>
          }
        />
        {notes.length ? (
          <>
            {/* <SubHeader
              searchProps={{
                value: searchTerm,
                onChange: e => setSearchTerm(e.target.value),
                clear: () => setSearchTerm("")
              }}
              deleteButtonProps={{
                onClick: () => setShowDeleteAlert(true),
                disabled: !selectedNoteIds.length
              }}
            /> */}
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
          />
        )}
      </Container>
    </div>
  );
};

export default Notes;
