import * as yup from "yup";

export const CONTACTS = [
  {
    id: 1,
    name: "Neeraj Singh",
    email: "neeraj@bigbinary.com",
    department: "Engineering",
    contactNumber: "(555)-390-102",
  },
  {
    id: 2,
    name: "Vinay Chandran",
    email: "vinay@bigbinary.com",
    department: "Engineering",
    contactNumber: "99210011001",
  },
];

export const DEPARTMENT_OPTIONS = [
  { label: "Engineering", value: "engineering" },
  { label: "Finance", value: "finance" },
  { label: "Martketing", value: "marketing" },
];

export const FORM_INITIAL_VALUES = {
  name: "Karthik Menon",
  email: "karthik@bigbinary.com",
  contact: "9745597425",
  department: DEPARTMENT_OPTIONS[0],
};

export const VALIDATION_SCHEMA = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  contact: yup.string().required("Contact is required"),
  department: yup.object().required("Department is required"),
});
