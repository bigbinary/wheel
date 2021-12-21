import React, { useState, useEffect } from "react";

import { Plus } from "@bigbinary/neeto-icons";
import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui/v2";
import { Header } from "neetoui/v2/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import ContactTable from "./ContactTable";
import DeleteAlert from "./DeleteAlert";
import Filter from "./Filter";
import NewContactPane from "./Pane/CreateContact";

const Contacts = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showMenuBar, setShowMenuBar] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState([]);

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
    <div className="flex w-11/12">
      <div>
        <Filter showMenu={showMenuBar} />
      </div>
      <div className="flex flex-col p-4">
        <Header
          title="All Contacts"
          menuBarToggle={() => setShowMenuBar(!showMenuBar)}
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
            placeholder: "Search Name, Email, Phone Number, Ect.",
          }}
          actionBlock={
            <Button
              onClick={() => setShowNewNotePane(true)}
              label="Add Contact"
              icon={Plus}
            />
          }
        />
        {notes.length ? (
          <ContactTable setShowDeleteAlert={setShowDeleteAlert} />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            title="Looks like you don't have any notes!"
            subtitle="Add your notes to send customized emails to them."
            primaryAction={() => setShowNewNotePane(true)}
            primaryActionLabel="Add New Note"
          />
        )}
        <NewContactPane
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
      </div>
    </div>
  );
};

export default Contacts;
