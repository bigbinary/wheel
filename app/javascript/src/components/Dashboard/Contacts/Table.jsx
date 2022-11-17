import React, { useState } from "react";

import { Table as NeetoUITable } from "neetoui";

import { COLUMN_DATA } from "./columnData";
import { DEFAULT_PAGE_SIZE } from "./constants";

const Table = ({ contacts = [] }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [selectedContactsIds, setSelectedContactsIds] = useState([]);

  return (
    <div className="w-full">
      <NeetoUITable
        allowRowClick
        rowSelection
        columnData={COLUMN_DATA}
        currentPageNumber={currentPageNumber}
        defaultPageSize={DEFAULT_PAGE_SIZE}
        handlePageChange={pageNo => setCurrentPageNumber(pageNo)}
        rowData={contacts}
        selectedRowKeys={selectedContactsIds}
        onRowSelect={selectedRowKeys => setSelectedContactsIds(selectedRowKeys)}
      />
    </div>
  );
};

export default Table;
