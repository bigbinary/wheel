import React from "react";
import { Checkbox, Badge, Avatar, Button, Tooltip } from "neetoui";
import dayjs from "dayjs";

export default function NoteTable({
  selectedNoteIds,
  setSelectedNoteIds,
  notes,
}) {
  const editPopup = <span>Edit</span>;
  const deletePopup = <span>Delete</span>;
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
            <th className="text-left">Title</th>
            <th className="text-left">Description</th>
            <th className="text-center">Tag</th>
            <th className="text-center">Created Date</th>
            <th className="text-center">Due Date</th>
            <th className="text-center">Contact</th>
            <th className="text-center"></th>
          </tr>
        </thead>
        <tbody>
          {notes.map(note => (
            <tr key={note.id}>
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
                <div className="flex flex-row items-center justify-start">
                  {note.title}
                </div>
              </td>
              <td>
                <div className="flex flex-row items-center justify-start">
                  {note.description}
                </div>
              </td>
              <td>
                <div className="flex flex-row items-center justify-center">
                  <Badge color={note.tags.color}>{note.tags.text}</Badge>
                </div>
              </td>
              <td>
                <div className="flex flex-row items-center justify-center">
                  {note.createdDate
                    ? dayjs(note.createdDate).format("MMM D, YYYY")
                    : "--"}
                </div>
              </td>
              <td>
                <div className="flex flex-row items-center justify-center">
                  {note.dueDate
                    ? dayjs(note.dueDate).format("MMM D, YYYY")
                    : "--"}
                </div>
              </td>
              <td>
                <div className="flex flex-row items-center justify-center">
                  <Avatar size={30} contact={{ name: note.contact }} />
                </div>
              </td>
              <td>
                <div className="flex flex-row items-end justify-center space-x-4">
                  <Tooltip content={editPopup} position="bottom">
                    <Button style="icon" icon="ri-pencil-line" />
                  </Tooltip>
                  <Tooltip content={deletePopup} position="bottom">
                    <Button style="icon" icon="ri-delete-bin-line" />
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
