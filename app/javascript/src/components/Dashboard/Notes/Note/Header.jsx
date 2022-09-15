import React from "react";

import { MenuVertical } from "neetoicons";
import { Typography, Dropdown } from "neetoui";

const Header = ({ note, onClickEdit, onClickDelete }) => {
  const handleEdit = selectedNote => {
    onClickEdit(selectedNote);
  };

  const handleDelete = selectedNoteId => {
    onClickDelete(selectedNoteId);
  };

  return (
    <div className="flex justify-between text-xl font-bold">
      <Typography style="h3">{note.title}</Typography>
      <Dropdown buttonStyle="text" icon={MenuVertical}>
        <li onClick={() => handleEdit(note)}>Edit</li>
        <li onClick={() => handleDelete(note.id)}>Delete</li>
      </Dropdown>
    </div>
  );
};

export default Header;
