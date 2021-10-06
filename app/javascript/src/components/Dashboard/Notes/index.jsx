import React, { useState, useEffect } from "react";

import * as neetoIcons from "@bigbinary/neeto-icons";
import * as v2 from "@bigbinary/neetoui/v2";
import EmptyNotesListImage from "images/EmptyNotesList";
import { PageLoader } from "neetoui";
import { Header } from "neetoui/layouts";
// SubHeader

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import Card from "./Card";
import DeleteAlert from "./DeleteAlert";
import NewNotePane from "./NewNotePane";
// import NoteTable from "./NoteTable";

const Notes = ({ setShowNotesMenuBar }) => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedNoteIds, setSelectedNoteIds] = useState([]);
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
      <Header
        title={
          <div className="flex items-center gap-3">
            <neetoIcons.MenuHorizontal
              onClick={() => setShowNotesMenuBar(prevState => !prevState)}
            />
            <v2.Typography style="h2">All Notes</v2.Typography>
          </div>
        }
        actionBlock={
          <div className="flex gap-3">
            <v2.Input
              prefix={<neetoIcons.Search />}
              size="small"
              placeholder="Search Name, Email, Phone Number, Ect."
            />
            <v2.Button
              onClick={() => setShowNewNotePane(true)}
              label="Add Note"
              icon="ri-add-line"
            />
          </div>
        }
      />
      {notes.length ? (
        <div className="mt-7 w-full">
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
          {/* <NoteTable
            selectedNoteIds={selectedNoteIds}
            setSelectedNoteIds={setSelectedNoteIds}
            notes={notes}
          /> */}
          {[0, 1, 2, 3].map(item => (
            <Card key={item} />
          ))}
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
          // selectedNoteIds={selectedNoteIds}
          onClose={() => setShowDeleteAlert(false)}
          refetch={fetchNotes}
        />
      )}
    </>
  );
};

export default Notes;
