import React, { useState } from "react";

import { Table } from "neetoui";

import { NOTES_TABLE_COLUMN_DATA } from "./constants";
import EditNotePane from "./Pane/EditNote";

export default function NoteTable({
  setSelectedNoteIds,
  notes = [],
  fetchNotes,
}) {
  const [showEditNote, setShowEditNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  return (
    <>
      <div className="notes-table-height w-full">
        <Table
          rowData={notes}
          columnData={NOTES_TABLE_COLUMN_DATA}
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
