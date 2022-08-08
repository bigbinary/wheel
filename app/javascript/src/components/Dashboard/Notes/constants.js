import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
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

export const MENUBAR_DATA = {
  heads: [
    {
      title: "All",
      count: 200,
    },
    {
      title: "Users",
      count: 80,
    },
    {
      title: "Leads",
      count: 60,
    },
    {
      title: "Visitors",
      count: 60,
    },
  ],
  segments: [
    {
      title: "Europe",
      count: 80,
    },
    {
      title: "Middle-East",
      count: 60,
    },
    {
      title: "Asia",
      count: 60,
    },
  ],
  tags: [
    {
      title: "Sales",
      count: 80,
    },
    {
      title: "Finance",
      count: 60,
    },
    {
      title: "User Experience",
      count: 60,
    },
  ],
};
