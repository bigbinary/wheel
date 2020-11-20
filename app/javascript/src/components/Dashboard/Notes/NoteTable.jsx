import React from "react";
import { Checkbox } from "neetoui";

export default function NoteTable({
  selectedNoteIds,
  setSelectedNoteIds,
  notes = [],
}) {
  return (
    <table className="nui-table nui-table--checkbox nui-table--avatar">
      <thead>
        <tr>
          <th className="px-2">
            <Checkbox
              checked={
                selectedNoteIds.length === notes.map(note => note.id).length
              }
              onClick={() => {
                const noteIds = notes.map(note => note.id);
                if (selectedNoteIds.length === noteIds.length) {
                  setSelectedNoteIds([]);
                } else {
                  setSelectedNoteIds(noteIds);
                }
              }}
            />
          </th>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {notes.map(note => (
          <tr
            key={note.id}
            className={"cursor-pointer bg-white hover:bg-gray-50"}
          >
            <td>
              <Checkbox
                checked={selectedNoteIds.includes(note.id)}
                onClick={event => {
                  event.stopPropagation();
                  const index = selectedNoteIds.indexOf(note.id);

                  if (index > -1) {
                    setSelectedNoteIds([
                      ...selectedNoteIds.slice(0, index),
                      ...selectedNoteIds.slice(index + 1),
                    ]);
                  } else {
                    setSelectedNoteIds([...selectedNoteIds, note.id]);
                  }
                }}
              />
            </td>
            <td>
              <div className="flex flex-row items-center justify-start text-gray-900">
                {note.title}
              </div>
            </td>
            <td>{note.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
