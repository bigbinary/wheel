import React, { useState } from "react";

import { Table } from "neetoui/v2";

import EditNotePane from "./Pane/EditNote";

export const COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export default function NoteTable({
  setSelectedNoteIds,
  notes = [],
  fetchNotes,
}) {
  const [showEditNote, setShowEditNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  //ToDo: Fix in neetoUI inorder to resolve warning
  notes = notes.map(note => ({
    ...note,
    key: note.id,
  }));

  return (
    <>
      <div className="w-full">
        <Table
          rowData={notes}
          columnData={COLUMN_DATA}
          onRowSelect={selectedRowKeys => {
            setSelectedNoteIds(selectedRowKeys);
          }}
          onRowClick={(_, note) => {
            setSelectedNote(note);
            setShowEditNote(true);
          }}
          allowRowClick={true}
        />
      </div>
      <EditNotePane
        showPane={showEditNote}
        setShowPane={setShowEditNote}
        fetchNotes={fetchNotes}
        note={selectedNote}
      />
    </>
  );
}
