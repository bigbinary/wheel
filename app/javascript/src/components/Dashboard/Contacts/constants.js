import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Avatar, Typography, Dropdown } from "neetoui";
import * as yup from "yup";

export const CONTACTS_COLUMNS = [
  {
    title: "NAME & ROLE",
    dataIndex: "name_role",
    key: "title",
    width: "30%",
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
    dataIndex: "actions",
    key: "actions",
    width: "10%",
  },
];

export const ROWS = [
  {
    name_role: (
      <div className="flex space-x-2">
        <Avatar
          size="large"
          user={{
            name: "Ronalds Richards",
          }}
        />
        <div className="flex flex-col">
          <Typography style="h4">Ronalds Richards</Typography>
          <Typography style="body2">Owner</Typography>
        </div>
      </div>
    ),
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
    actions: (
      <Dropdown icon={MenuHorizontal} buttonStyle="text">
        <li>Edit</li>
        <li>Delete</li>
      </Dropdown>
    ),
  },
  {
    name_role: (
      <div className="flex space-x-2">
        <Avatar
          size="large"
          user={{
            name: "Jacob Jones",
          }}
        />
        <div className="flex flex-col">
          <Typography style="h4">Jacon Jones</Typography>
          <Typography style="body2">Owner</Typography>
        </div>
      </div>
    ),
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
    actions: (
      <Dropdown icon={MenuHorizontal} buttonStyle="text">
        <li>Edit</li>
        <li>Delete</li>
      </Dropdown>
    ),
  },
];

export const CONTACTS_ROWS = Array(30).fill(ROWS).flat();

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  first_name: "",
  last_name: "",
  email: "",
  address: "",
};

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  email: yup.string().required("Email is required"),
  address: yup.string().required("Address is required"),
});
