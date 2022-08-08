import React from "react";

import { MenuVertical, Clock } from "@bigbinary/neeto-icons";
import { Typography, Dropdown, Tooltip, Avatar } from "@bigbinary/neetoui";
import PropTypes from "prop-types";

const Card = props => {
  const { note, action } = props;
  return (
    <div className="mb-3 w-full rounded border-2 p-3">
      <div className="flex justify-between">
        <Typography style="h4">{note.title}</Typography>
        <Dropdown
          buttonStyle="text"
          position="bottom-start"
          icon={MenuVertical}
        >
          <li className="m-1">Edit</li>
          <li className="m-1" onClick={() => action.delete(note.id)}>
            Delete
          </li>
        </Dropdown>
      </div>
      <Typography style="body2" className="mb-3 h-10">
        {note?.description}
      </Typography>
      <hr />
      <div className="mt-3 flex justify-between align-middle">
        <button className=" rounded border-2 border-gray-800 bg-gray-50 px-2 py-1 text-xs text-gray-500">
          Getting Started
        </button>
        <div className="flex items-center space-x-2">
          <Clock color="#68737D" size={14} />
          <Tooltip position="bottom" content={note?.time}>
            <Typography style="body3" className="text-gray-500">
              Created {note?.createdAgo} hours ago
            </Typography>
          </Tooltip>
          <Avatar
            onClick={function noRefCheck() {}}
            size="medium"
            user={{
              name: "Oliver Smith",
            }}
          />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  note: PropTypes.object,
  action: PropTypes.object,
};

export default Card;
