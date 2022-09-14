import * as yup from "yup";

import Avatar from "../../../images/avatar.png";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assigned_contact: yup.string().required("Assigned Contact is required"),
  tag: yup.string().required("Tag is required"),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const NOTES = [
  {
    id: 0,
    title: "How to claim the warranty?",
    description: `"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
    tag: "Getting Started",
    status: "created",
    created_by: "Oliver Smith",
    created_at: "2 hours ago",
    avatar: Avatar,
  },
  {
    id: 1,
    title: "How to claim the warranty?",
    description: `"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
    tag: "Getting Started",
    status: "drafted",
    created_by: "Oliver Smith",
    created_at: "2 hours ago",
    avatar: Avatar,
  },
  {
    id: 2,
    title: "How to claim the warranty?",
    description: `"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
    tag: "Getting Started",
    status: "drafted",
    created_by: "Oliver Smith",
    created_at: "2 hours ago",
    avatar: Avatar,
  },
  {
    id: 3,
    title: "How to claim the warranty?",
    description: `"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
    tag: "Getting Started",
    status: "drafted",
    created_by: "Oliver Smith",
    created_at: "2 hours ago",
    avatar: Avatar,
  },
];
