import React, { useState } from "react";

import { Table as NeetoUITable } from "neetoui";

import { NOTES_TABLE_COLUMN_DATA } from "./constants";
import EditNotePane from "./Pane/Edit";

export default function Table({ setSelectedNoteIds, notes = [], fetchNotes }) {
  const [showEditNote, setShowEditNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

  return (
    <>
      <div className="w-full notes-table-height">
        <NeetoUITable
          rowData={notes}
          columnData={NOTES_TABLE_COLUMN_DATA}
          onRowSelect={selectedRowKeys => setSelectedNoteIds(selectedRowKeys)}
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
