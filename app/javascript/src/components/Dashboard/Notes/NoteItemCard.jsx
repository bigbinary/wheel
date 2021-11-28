import React from "react";

import { MenuVertical, Clock } from "@bigbinary/neeto-icons";
import { Dropdown, Tag, Avatar, Tooltip } from "neetoui/v2";

import { USR_IMG_TMP } from "../../Common/Sidebar/constants";

//const { user } = useUserState();
const getTimeSince = timestamp => {
  var date = new Date(timestamp);
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = seconds / 31536000;

  if (interval > 1) {
    const floored = Math.floor(interval);
    return +" year" + (floored > 1 ? "s" : "");
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    const floored = Math.floor(interval);
    return floored + " month" + (floored > 1 ? "s" : "");
  }
  interval = seconds / 86400;
  if (interval > 1) {
    const floored = Math.floor(interval);
    return floored + " day" + (floored > 1 ? "s" : "");
  }
  interval = seconds / 3600;
  if (interval > 1) {
    const floored = Math.floor(interval);
    return floored + " hour" + (floored > 1 ? "s" : "");
  }
  interval = seconds / 60;
  if (interval > 1) {
    const floored = Math.floor(interval);
    return floored + " minute" + (floored > 1 ? "s" : "");
  }
  const floored = Math.floor(seconds);
  return Math.floor(seconds) + " second" + (floored > 1 ? "s" : "");
};

function NoteItemCard({ note }) {
  return (
    <>
      <div className="border neeto-ui-shadow-s px-3.5 py-4 mb-4">
        <div className="flex">
          <h4>{note.title}</h4>
          <div className="ml-auto">
            <Dropdown
              buttonProps={{
                onClick: function noRefCheck() {},
              }}
              buttonStyle="text"
              icon={MenuVertical}
            >
              <li> Edit </li>
              <li> Delete </li>
            </Dropdown>
          </div>
        </div>
        <p className="text-textGray mb-3 pb-3 border-b-2 border-gray-100">
          {note.description}
        </p>
        <div className="flex">
          <div className="labels">
            <Tag className="bg-gray-100" label="Getting Started" />
          </div>
          <div className="ml-auto flex items-center">
            <Tooltip position="bottom-start" content="Tooltip">
              <>
                <Clock color="#1e1e20" size={14} />
                <span className="text-textGray ml-1 mr-2 text-xs">
                  Created {getTimeSince(note.created_at)} ago
                </span>
              </>
            </Tooltip>
            <Avatar
              size="small"
              user={{
                name: "Ashley Cooper",
                imageUrl: USR_IMG_TMP,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NoteItemCard;
