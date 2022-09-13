import React from "react";

import { Table } from "neetoui";

import { COLUMN_DATA } from "./constants";

const ContactsList = ({ contacts }) => (
  <Table
    columnData={COLUMN_DATA}
    currentPageNumber={1}
    defaultPageSize={9}
    handlePageChange={() => {}}
    rowData={contacts}
    onRowClick={() => {}}
    onRowSelect={() => {}}
  />
);

export default ContactsList;
