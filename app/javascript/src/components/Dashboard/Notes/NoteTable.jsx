import React, { useState } from "react";

import { Table } from "neetoui";

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
  return (
    <>
      <div className="w-full notes-table-height">
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
