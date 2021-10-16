import React from "react";

import dayjs from "dayjs";
import relativeTimePlugin from "dayjs/plugin/relativeTime";
import { Typography, Button, Avatar, Tooltip } from "neetoui/v2";

import KebabMenu from "components/Common/KebabMenu";

dayjs.extend(relativeTimePlugin);

const ListItem = ({ item, onEdit, onDelete }) => {
  const {
    created_at,
    title,
    description,
    avatar = "https://picsum.photos/id/237/200/300"
  } = item;

  const createdDate = dayjs(created_at);

  return (
    <div className="p-3 border divide-y ">
      <div className="mb-2">
        <div className="flex items-center justify-between">
          <Typography style="h4" className="mb-1">
            {title}
          </Typography>
          <KebabMenu>
            <KebabMenu.Item label="Edit" onClick={onEdit} />
            <KebabMenu.Item label="Delete" onClick={onDelete} />
          </KebabMenu>
        </div>
        <Typography style="body3" className="text-gray-500">
          {description}
        </Typography>
      </div>

      <div className="flex items-center justify-between pt-4">
        <Button
          style="secondary"
          label="Getting Started"
          className="h-1 text-xs text-gray-500 rounded"
        />
        <Tooltip
          content={createdDate.format("dddd, hh:MMA")}
          placement="bottom"
        >
          <div className="flex items-center">
            <Typography style="body3" className="px-2 text-gray-500">
              {`Drafted ${createdDate.fromNow()}`}
            </Typography>
            <Avatar user={{ imageUrl: avatar, name: "UNKNOWN" }} size="small" />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default ListItem;
