import React from "react";
import { Button, Input } from "nitroui";

export default function SubHeading({
  selectedNoteIds,
  searchTerm,
  setSearchTerm,
  setShowDeleteAlert,
}) {
  return (
    <div className="py-1 nui-subheader">
      <div className="flex flex-row items-center justify-start">
        <i className="ri-search-line ml-1.5 mr-2.5 text-gray-400"></i>
        <Input
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search"
          naked
        />
      </div>
      <div className="flex flex-row items-center justify-end w-full">
        <div className="flex flex-row items-center justify-start py-1 pr-4">
          <Button
            disabled={!selectedNoteIds.length}
            style="text"
            label="Delete"
            onClick={() => setShowDeleteAlert(true)}
            icon="ri-delete-bin-line"
          />
        </div>
        {/* <Pagination
          count={totalCount}
          pageNo={pageIndex}
          pageSize={pageSize}
          navigate={updatePageIndex}
        /> */}
      </div>
    </div>
  );
}
