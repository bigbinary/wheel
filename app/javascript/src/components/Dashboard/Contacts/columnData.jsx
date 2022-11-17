import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Avatar } from "neetoui";

import { formatDate } from "utils/time";

export const COLUMN_DATA = [
  {
    title: "Name & Role",
    key: "name",
    render: ({ name, role }) => (
      <div className="flex flex-row items-center justify-start">
        <Avatar
          size="large"
          user={{
            name,
            imageUrl: "",
          }}
        />
        <div className="ml-2">
          <p className="font-bold">{name}</p>
          <p>{role}</p>
        </div>
      </div>
    ),
  },
  {
    title: "EMAIL",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "CREATED AT",
    dataIndex: "created_at",
    key: "created_at",
    render: created_at => (
      <div className="flex flex-row items-center justify-start">
        {formatDate(created_at)}
      </div>
    ),
  },
  {
    dataIndex: "icon",
    key: "icon",
    render: () => <MenuHorizontal />,
  },
];
