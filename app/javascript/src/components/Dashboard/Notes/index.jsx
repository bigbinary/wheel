import React, { useState, useEffect } from "react";

import { Search } from "@bigbinary/neeto-icons";
import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader, Input } from "neetoui";
import { Header, SubHeader, Container } from "neetoui/layouts";

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
    <div className="flex w-full">
      <Menubar showMenu={toggle} />
      <Container>
        <Header
          actionBlock={
            <div className="flex justify-around mr-2">
              <Input
                className="p-5"
                label="Search"
                prefix={<Search size={16} />}
              />
              <Button
                label="Add New Note"
                icon="ri-add-line"
                onClick={() => setShowNewNotePane(true)}
              />
            </div>
          }
          menuBarToggle={() => setToggle(!toggle)}
          title="All Notes"
        />
        {notes.length ? (
          <>
            <SubHeader
              searchProps={{
                value: searchTerm,
                onChange: e => setSearchTerm(e.target.value),
                clear: () => setSearchTerm("")
              }}
              deleteButtonProps={{
                onClick: () => setShowDeleteAlert(true),
                disabled: !selectedNoteIds.length
              }}
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
