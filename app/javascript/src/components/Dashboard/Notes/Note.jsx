import React from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Typography, Dropdown, Tag, Tooltip, Avatar } from "neetoui";

const Note = ({
  id,
  title,
  description,
  tag,
  status,
  created_at,
  avatar,
  setShowDeleteAlert,
  setDeleteNoteId,
  setIsOpen,
}) => {
  const deleteHelper = () => {
    setIsOpen(true);
    setShowDeleteAlert(true);
    setDeleteNoteId(id);
  };
  return (
    <div className="mb-3 w-full border p-4 shadow-md">
      <div className="flex justify-between">
        <Typography component="h4">{title}</Typography>
        <Dropdown buttonStyle="text" icon={MenuVertical} position="bottom-end">
          <li>Edit</li>
          <li onClick={deleteHelper}>Delete</li>
        </Dropdown>
      </div>
      <div className="mb-3">
        <Typography style="body2" weight="light">
          {description}
        </Typography>
      </div>
      <hr />
      <div className="mt-3 flex justify-between">
        <Tag className="capitalize" color="gray" label={tag} size="small" />
        <div className="flex items-center space-x-1.5">
          <Clock size={14} />
          <Tooltip content="Friday, 05:36PM" position="bottom">
            <Typography className="capitalize" style="body2">
              {status} {created_at}
            </Typography>
          </Tooltip>
          <Avatar
            size="small"
            user={{
              imageUrl: avatar,
            }}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
