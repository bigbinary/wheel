import React, { useState } from "react";

import { Table as NeetoUITable } from "neetoui";

import { ABBREVIATIONS_TABLE_COLUMN_DATA } from "./constants";
import EditAbbreviationPane from "./Pane/Edit";

const Table = ({
  selectedAbbreviationIds,
  setSelectedAbbreviationIds,
  abbreviations = [],
  fetchAbbreviations,
}) => {
  const [showEditAbbreviation, setShowEditAbbreviation] = useState(false);
  const [selectedAbbreviation, setSelectedAbbreviation] = useState({});

  return (
    <>
      <div className="notes-table-height w-full">
        <NeetoUITable
          allowRowClick
          rowSelection
          columnData={ABBREVIATIONS_TABLE_COLUMN_DATA}
          rowData={abbreviations}
          selectedRowKeys={selectedAbbreviationIds}
          onRowClick={(_, abbreviation) => {
            setSelectedAbbreviation(abbreviation);
            setShowEditAbbreviation(true);
          }}
          onRowSelect={selectedRowKeys =>
            setSelectedAbbreviationIds(selectedRowKeys)
          }
        />
      </div>
      <EditAbbreviationPane
        abbreviation={selectedAbbreviation}
        fetchAbbreviations={fetchAbbreviations}
        setShowPane={setShowEditAbbreviation}
        showPane={showEditAbbreviation}
      />
    </>
  );
};

export default Table;
