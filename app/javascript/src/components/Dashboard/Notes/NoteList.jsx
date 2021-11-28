import React from "react";

import NoteItemCard from "./NoteItemCard";

export const COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export default function NoteList({ notes = [] }) {
  return (
    <>
      <div className="w-full notes-table-height">
        {notes.length > 0 &&
          notes.map(note => (
            <NoteItemCard key={note.id} note={note}></NoteItemCard>
          ))}
      </div>
    </>
  );
}
