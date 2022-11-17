import React from "react";

import { Table as NeetoUITable } from "neetoui";

import Card from "./Card";

const Table = ({ notes = [] }) => {
  const columnData = [
    {
      render: note => <Card note={note} />,
    },
  ];

  return (
    <div className="notes-table-height w-full">
      <NeetoUITable columnData={columnData} rowData={notes} />
    </div>
  );
};

export default Table;
