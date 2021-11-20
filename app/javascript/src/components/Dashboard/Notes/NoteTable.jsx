import React from "react";

import { Table } from "neetoui/v2";

export const COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    sorter: true,
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    sorter: true,
    width: "70%",
  },
];

export default function NoteTable({ setSelectedNoteIds, notes = [] }) {
  //ToDo: Fix in neetoUI inorder to resolve warning
  notes = notes.map(note => ({
    ...note,
    key: note.id,
  }));

  return (
    <div className="w-full">
      <Table
        rowData={notes}
        columnData={COLUMN_DATA}
        onRowSelect={selectedRowKeys => {
          setSelectedNoteIds(selectedRowKeys);
        }}
        // onRowClick={(event, note) => {
        //   ToDo: Show Update Pane
        // }}
        allowRowClick={true}
      />
    </div>
  );
}
