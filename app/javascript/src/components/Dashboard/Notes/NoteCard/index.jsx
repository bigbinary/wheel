import React from "react";

import { Button } from "neetoui/v2";

export const NoteCard = ({
  selectedNoteIds,
  setSelectedNoteIds,
  notes = []
}) => {
  return (
    <div className="flex flex-col space-y-4 w-full mt-8">
      {notes.map((note, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded shadow-md p-4"
          onClick={event => {
            event.stopPropagation();
            const index = selectedNoteIds.indexOf(note.id);

            if (index > -1) {
              setSelectedNoteIds([
                ...selectedNoteIds.slice(0, index),
                ...selectedNoteIds.slice(index + 1)
              ]);
            } else {
              setSelectedNoteIds([...selectedNoteIds, note.id]);
            }
          }}
        >
          {" "}
          <h3 className="mb-4">{note.title}</h3>
          <p className="mb-2">{note.description}</p>
          <hr className="bg-gray-300" />
          <Button
            className="mt-4"
            iconPosition="left"
            label="Getting Started"
            size="small"
            style="secondary"
            type="button"
          />
        </div>
      ))}
    </div>
  );
};
