import React from "react";

import { Table as NeetoUITable } from "neetoui";

import Card from "./Card";

const Table = ({ notes = [] }) => {
  const columnData = notes.map(note => ({
    key: note.title,
    dataIndex: note.title,
    render: () => <Card note={note} />,
  }));

  return (
    <div className="notes-table-height w-full">
      <NeetoUITable allowRowClick columnData={columnData} rowData={notes} />
    </div>
  );
};

export default Table;
