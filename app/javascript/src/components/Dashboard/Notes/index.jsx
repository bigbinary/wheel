import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";
import Menubar from "components/Common/Menubar";

import Card from "./Card";
import { MENUBAR_DATA } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NewNotePane from "./Pane/Create";

const convertDateToWeekdayTime = date => {
  const dateTime = new Date(date);
  const weekday = dateTime.toLocaleString("en-us", { weekday: "long" });
  const time = dateTime.toLocaleString("en-US", {
    hour: "numeric",
    hour12: true,
  });
  return `${weekday}, ${time}`;
};

const calculateHoursAgo = date => {
  const dateTime = new Date(date);
  const currentDateTime = new Date();
  const hours = Math.abs(currentDateTime.getTime() - dateTime.getTime()) / 36e5;
  return Math.round(hours);
};

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleDeleteSelection = id => {
    setSelectedNoteIds([id]);
    setShowDeleteAlert(true);
  };

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const { data } = await notesApi.fetch();
      const populatedNotes = data.notes.map(note => ({
        ...note,
        time: convertDateToWeekdayTime(note.created_at),
        createdAgo: calculateHoursAgo(note.created_at),
      }));
      setNotes(populatedNotes);
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
      <Menubar title="Notes" options={MENUBAR_DATA} setCategory={setCategory} />
      <Container>
        <Header
          title={category}
          actionBlock={
            <Button
              onClick={() => setShowNewNotePane(true)}
              label="Add New Note"
              size="large"
              icon="ri-add-line"
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
          menuBarToggle
        />
        {notes.length ? (
          <>
            {notes?.map(note => (
              <Card
                key={note?.id}
                note={note}
                action={{ delete: handleDeleteSelection }}
              />
            ))}
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
            setSelectedNoteIds={setSelectedNoteIds}
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
