import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  contact: "",
  tag: "",
};

export const ASSIGNED_CONTACT = [
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "Non Admin",
    value: "non-admin",
  },
];

export const TAGS = [
  {
    label: "Getting Started",
    value: 1,
  },
  {
    label: "Meeting",
    value: 2,
  },
  {
    label: "Learning",
    value: 3,
  },
  {
    label: "Onboarding",
    value: 4,
  },
  {
    label: "Leaves and Holidays",
    value: 5,
  },
];

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required."),
  description: yup.string().required("Description is required."),
  contact: yup
    .object({
      label: yup.string().oneOf(ASSIGNED_CONTACT.map(contact => contact.label)),
      value: yup.string().oneOf(ASSIGNED_CONTACT.map(contact => contact.value)),
    })
    .nullable()
    .required("Assigned contact is required."),
  tag: yup
    .array(
      yup
        .object()
        .nullable()
        .shape({
          label: yup.string().oneOf(TAGS.map(tag => tag.label)),
          value: yup.number().oneOf(TAGS.map(tag => tag.value)),
        })
    )
    .min(1, "Tag is required")
    .required("Tag is required"),
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
