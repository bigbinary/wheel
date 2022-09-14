import React from 'react'

import { Typography, Dropdown } from 'neetoui'
import { MenuVertical } from 'neetoicons'

const Header = ({note, onClickEdit, onClickDelete}) => {

  const handleEdit = (selectedNote) => {
    onClickEdit(selectedNote);
  }

  const handleDelete = (selectedNoteId) => {
    onClickDelete(selectedNoteId);
  }

  return (
    <>
      <div className="text-xl flex font-bold justify-between">
        <Typography style="h3" >
          {note.title}
        </Typography>
        <Dropdown icon={MenuVertical} buttonStyle="text">
          <li onClick={()=> handleEdit(note)}>Edit</li>
          <li onClick={() => handleDelete(note.id)}>Delete</li>
        </Dropdown>
      </div>
    </>
  );
}

export default Header;
