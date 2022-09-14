import React from "react";

import ProfilePicture from "images/ContactProfilePicture";
import { MenuHorizontal } from "neetoicons";
import { Typography, Avatar } from "neetoui";

export const COLUMN_DATA = [
  {
    title: "NAME AND ROLE",
    dataIndex: "name_and_role",
    key: "name_and_role",
    width: "30%",
    render: (contact_name, contact) => (
      <div className="flex items-center">
        <Avatar
          size="large"
          user={{
            name: contact_name,
            imageUrl: contact.image,
          }}
        />
        <div className="ml-2 flex flex-col">
          <Typography style="h5">{contact_name}</Typography>
          <Typography style="body2">Owner</Typography>
        </div>
      </div>
    ),
  },
  {
    title: "EMAIL",
    dataIndex: "email",
    key: "email",
    width: "30%",
  },
  {
    title: "CREATED AT",
    dataIndex: "created_at",
    key: "created_at",
    width: "30%",
  },
  {
    title: "",
    dataIndex: "dropdown",
    key: "dropdown",
    width: "10%",
    render: () => <MenuHorizontal />,
  },
];

export const CONTACTS = [
  {
    name_and_role: "Ronald Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
    image: "",
  },
  {
    name_and_role: "Jacob Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
    image: ProfilePicture,
  },
];

export const CONTACT_ROWS = Array(10)
  .fill(CONTACTS)
  .flat()
  .map((item, idx) => ({ ...item, id: idx }));
