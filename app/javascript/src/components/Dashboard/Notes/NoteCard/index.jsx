import React from "react";

import { Clock, MenuVertical } from "@bigbinary/neeto-icons";
import { Avatar, Tag, Typography, Dropdown, Tooltip } from "neetoui/v2";

export const NoteCard = ({
  selectedNoteIds,
  setSelectedNoteIds,
  setShowDeleteAlert,
  notes = []
}) => {
  const imageUrl = "https://randomuser.me/api/portraits/women/90.jpg";

  return (
    <div className="flex flex-col space-y-4 w-full mt-8">
      {notes.map((note, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded neeto-ui-shadow-s p-4"
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
          <div className="flex flex-row justify-between">
            <h3 className="mb-4">{note.title}</h3>
            <Dropdown
              buttonStyle="text"
              icon={function noRefCheck() {
                return <MenuVertical size={20} className="text-gray-500" />;
              }}
            >
              <li>Edit</li>
              <li onClick={() => setShowDeleteAlert(true)}>Delete</li>
            </Dropdown>
          </div>
          <p className="mb-2">{note.description}</p>
          <hr className="bg-gray-300" />
          <div className="flex flex-row justify-between mt-4">
            <Tag
              className="self-center text-gray-500 py-1"
              style="outline"
              size="small"
              color="grey"
              label="Getting Started"
            />
            <div className="flex flex-row">
              <i className="self-center text-gray-500">
                <Clock size={12} />
              </i>
              <Tooltip
                content="Tuesday, 6:45AM "
                followCursor="horizontal"
                placement="bottom"
              >
                <div className="self-center px-2">
                  <Typography style="body3">Created 2 hours ago</Typography>
                </div>
              </Tooltip>
              <Avatar
                className="self-center"
                size="small"
                user={{
                  name: "neeto UI",
                  imageUrl
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
