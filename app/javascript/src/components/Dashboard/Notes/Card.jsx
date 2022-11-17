import React from "react";

import { MenuVertical, Clock } from "@bigbinary/neeto-icons";
import { Tag, Typography, Tooltip, Avatar, Dropdown } from "neetoui";

import { useUserState } from "contexts/user";
import { formatTime, timeAgo } from "utils/time";

import { NOTE_OPTIONS } from "./constants";

const Card = ({ note }) => {
  const { user } = useUserState();

  return (
    <div className="neeto-ui-border-gray-400 w-full cursor-pointer gap-2 border p-4">
      <div className="flex w-full items-center justify-between">
        <Typography
          className="w-11/2 mr-3 truncate leading-tight"
          style="h4"
          weight="semibold"
        >
          {note.title}
        </Typography>
        <Dropdown
          buttonStyle="text"
          icon={() => <MenuVertical size={20} />}
          position="bottom-end"
        >
          {NOTE_OPTIONS.map(option => (
            <li key={option.key}>{option.value}</li>
          ))}
        </Dropdown>
      </div>
      <Typography
        className="neeto-ui-text-gray-600 border-b py-2 leading-5"
        style="body2"
      >
        {note.description}
      </Typography>
      <div className="flex items-center justify-between pt-3">
        <Tag label="Getting Started" />
        <div className="flex items-center">
          <Tooltip
            content={formatTime(note.created_at)}
            position="bottom-start"
          >
            <time className="flex items-center">
              <Clock size={12} />
              <Typography className="mx-1" style="body3">
                Created {timeAgo(note.created_at)}
              </Typography>
            </time>
          </Tooltip>
          <Avatar
            size="small"
            user={{
              name: `${user?.first_name} ${user?.last_name}`,
              imageUrl: user?.profile_image_path,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
