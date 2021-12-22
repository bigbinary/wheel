import React, { useState } from "react";

import { Tag, Avatar, Tooltip, Dropdown, Typography } from "@bigbinary/neetoui/v2";

import { Clock, MenuVertical } from "@bigbinary/neeto-icons";


const Note = ({id, title, description, tags, createdAt}) => {
  return (
    <div className="w-full my-5" key={id}>
      <div className="p-5 rounded-md neeto-ui-shadow-s">
        <div className="flex items-center justify-between">
          <Typography style="h5">
            {title}
          </Typography>
          <Dropdown
            icon={MenuVertical}
            label=""
            buttonStyle="text"
            position="bottom-end"
          >
            <li>
              Edit
            </li>
            <li>
              Delete
            </li>
          </Dropdown>
        </div>
        <Typography style="body3" weight="light">
          {description}
        </Typography>
        <hr className="my-2" color="text-gray-500"/>
        <div className="flex items-center justify-between">
          <div>
            {
              tags.map(tag => ( <Tag
                style="outline"
                label={tag}
                size="large"
                key={tag}
              />
              ))
            }
          </div>
          <div className="flex items-center text-gray-500 justify-evenly text-s">
            <Clock color="#6b7280" size={24} />
            <Tooltip
              content={createdAt.date}
              followCursor="horizontal"
              position="top"
            >
              <span className="mx-1">{createdAt.timeAgo}</span>
            </Tooltip>
            <Avatar
              size="small"
              user={{
                name: 'neeto UI',
                imageUrl: "https://i.pravatar.cc/300"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Note;
