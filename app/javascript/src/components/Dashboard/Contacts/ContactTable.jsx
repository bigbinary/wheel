import React from "react";

import { Table } from "neetoui/v2";

import { columnData, ROW_DATA } from "./data";

export default function ContactTable({ setShowDeleteAlert }) {
  return (
    <div className="mx-auto contacts-table-height w-11/12">
      <Table
        className="w-full mx-auto"
        columnData={columnData(setShowDeleteAlert)}
        currentPageNumber={1}
        defaultPageSize={9}
        handlePageChange={function noRefCheck() {}}
        onRowClick={function noRefCheck() {}}
        onRowSelect={function noRefCheck() {}}
        rowData={ROW_DATA}
      />
    </div>
  );
}
