import React from "react";
import { Checkbox, Avatar, Badge, Button } from "neetoui";

const GetBadgeColor = tag => {
  switch (tag) {
  case "Agile Workflow":
    return "green";
  case "Bug":
    return "red";
  default:
    return "blue";
  }
};

export default function NoteTable({
  selectedNoteIds,
  setSelectedNoteIds,
  setShowDeleteAlert,
  notes = [],
}) {
  const handleDeleteNote = noteId => {
    setSelectedNoteIds([noteId]);
    setShowDeleteAlert(true);
  };

  return (
    <div className="w-full px-4">
      <table className="nui-table nui-table--checkbox nui-table--actions">
        <thead>
          <tr>
            <th>
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
            <th className="text-left text-gray-400">title</th>
            <th className="text-left text-gray-400">description</th>
            <th className="text-center text-gray-400">tags</th>
            <th className="text-center text-gray-400">created date</th>
            <th className="text-center text-gray-400">due date</th>
            <th className="text-center text-gray-400">contact</th>
            <th></th>
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
              <td className="text-center">
                <Badge color={GetBadgeColor(note.tag)}>{note.tag}</Badge>
              </td>
              <td className="text-center">{note.createdDate}</td>
              <td className="text-center">
                {note.isDueDate ? note.dueDate : "--"}
              </td>
              <td>
                <Avatar
                  contact={{ name: note.contact }}
                  bgClassName="bg-purple-300"
                  className="m-auto"
                />
              </td>
              <td>
                <div className="flex flex-row">
                  <Button style="icon" icon="ri-edit-line" className="mx-2" />
                  <Button
                    style="icon"
                    icon="ri-delete-bin-5-line"
                    className="mx-2"
                    onClick={() => handleDeleteNote(note.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
