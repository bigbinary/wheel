import * as yup from "yup";

export const ABBREVIATIONS_FORM_INITIAL_FORM_VALUES = {
  name: "",
  description: "",
};

export const ABBREVIATIONS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
});

export const ABBREVIATIONS_TABLE_COLUMN_DATA = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];
