import React from "react";

import { Table } from "@bigbinary/neetoui";

import { CONTACTS_COLUMNS as columns } from "./constants";
import { CONTACTS_ROWS as rows } from "./constants";

export default function ContactsList() {
  return (
    <Table
      columnData={columns}
      currentPageNumber={1}
      defaultPageSize={10}
      handlePageChange={function noRefCheck() {}}
      onRowClick={function noRefCheck() {}}
      onRowSelect={function noRefCheck() {}}
      rowData={rows}
    />
  );
}
