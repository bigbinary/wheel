import React from "react";
import { Checkbox, Badge, Avatar, Button, Tooltip } from "neetoui";

export default function NoteTable({
  selectedNoteIds,
  setSelectedNoteIds,
  notes = [],
  setShowDeleteAlert,
  setNoteToEdit,
}) {
  const deleteSingleNote = id => () => {
    setSelectedNoteIds([id]);
    setShowDeleteAlert(true);
  };

  return (
    <div className="w-full px-4">
      <table className="nui-table nui-table--checkbox">
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
            <th className="text-left">Title</th>
            <th className="text-left">Description</th>
            <th className="text-center">Tags</th>
            <th className="text-center">Created Date</th>
            <th className="text-center">Due Date</th>
            <th className="text-center">Contact</th>
            <th />
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
              <td
                className="overflow-ellipsis truncate"
                style={{ maxWidth: 200 }}
              >
                {note.description}
              </td>
              <td className="text-center">
                <Badge color={note.tag.color}>{note.tag.name}</Badge>
              </td>
              <td className="text-center">{note.createdDate}</td>
              <td className="text-center">{note.dueDate || "--"}</td>
              <td className="flex justify-center items-center">
                <Avatar
                  size={36}
                  contact={{ name: note.contact }}
                  bgClassName="bg-blue-300"
                />
              </td>
              <td className="hover:opacity-100 opacity-0">
                <div className="flex flex-row space-x-3 items-center">
                  <Tooltip content="Edit" position="bottom">
                    <Button
                      style="icon"
                      icon="ri-pencil-line"
                      onClick={() => setNoteToEdit(note)}
                    />
                  </Tooltip>
                  <Tooltip content="delete" position="bottom">
                    <Button
                      style="icon"
                      icon="ri-delete-bin-line"
                      onClick={deleteSingleNote(note.id)}
                    />
                  </Tooltip>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
