import React from "react";

//import { Checkbox } from "neetoui";
import { MenuVertical, Clock } from "@bigbinary/neeto-icons";
import { Typography } from "@bigbinary/neetoui/v2";
import { Label } from "@bigbinary/neetoui/v2";
import { Tag } from "@bigbinary/neetoui/v2";
import { Avatar } from "@bigbinary/neetoui/v2";

export default function NoteTable({
  //  selectedNoteIds,
  //  setSelectedNoteIds,
  notes = []
}) {
  return (
    <div className="w-full px-4">
      {/* <table className="nui-table nui-table--checkbox">
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
          </tr>
        </thead>
        <tbody>
          {notes.map(note => (
            <tr
              key={note.id}
              className={"cursor-pointer bg-white hover:bg-gray-50 border px-8 py-4"}
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
                        ...selectedNoteIds.slice(index + 1)
                      ]);
                    } else {
                      setSelectedNoteIds([...selectedNoteIds, note.id]);
                    }
                  }}
                />
              </td>
              <td >
                <div className="flex flex-row items-center justify-start text-gray-900">
                  {note.title}
                </div>
              </td>
              <td>{note.description}</td>
            </tr>
          ))}
        </tbody>
      </table> */}

      {notes.map((note, i) => {
        return (
          <div
            key={i}
            className={
              "cursor-pointer bg-white hover:bg-gray-50 border px-8 py-4"
            }
          >
            <div className="border-b-2 mb-2 relative">
              <div className="absolute top-0 right-0">
                <MenuVertical />
              </div>
              <Typography style="h4" weight="bold" className="mb-2">
                {note.title}
              </Typography>
              <Typography style="body3" className="mb-2">
                {note.description}
              </Typography>
            </div>
            <div className="flex flex-row justify-between">
              <Tag label="Getting Started"></Tag>
              <div className="flex flex-row justify-between space-x-1 items-center">
                <Clock size={15} />
                <Label>Created 2 hours ago</Label>
                <Avatar
                  size="small"
                  user={{
                    imageUrl: "https://randomuser.me/api/portraits/women/90.jpg"
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
