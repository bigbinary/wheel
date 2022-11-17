import * as yup from "yup";

export const CONTACT_DELETED_MESSAGE = "Contact successfully deleted.";
export const CONTACT_ADDED_MESSAGE = "Contact successfully added.";

export const DEFAULT_PAGE_SIZE = 10;

export const CONTACT_FORM_INITIAL_FORM_VALUES = {
  first_name: "",
  last_name: "",
  email: "",
  role: "",
};

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid Email").required("Email is required"),
  role: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().required("Please select a role"),
      value: yup.string().required("Please select a role"),
    }),
});

export const ROLE_OPTIONS = [
  { label: "Agent", value: "agent" },
  { label: "Admin", value: "admin" },
  { label: "User", value: "user" },
  { label: "Accountant", value: "accountant" },
];

export const CONTACT_TYPES = [
  {
    key: "all",
    label: "All",
    path: "/contacts",
    component: "",
    count: 80,
  },
  {
    key: "users",
    label: "Users",
    path: "/contacts?type=users",
    component: "",
    count: 40,
  },
  {
    key: "leads",
    label: "Leads",
    path: "/contacts?type=leads",
    component: "",
    count: 20,
  },
  {
    key: "visitors",
    label: "Visitors",
    path: "/contacts?type=visitors",
    component: "",
    count: 20,
  },
];

export const CONTACT_SEGMENTS = [
  {
    key: "asia",
    label: "Asia",
    path: "/contacts?segment=asia",
    component: "",
    count: 40,
  },
  {
    key: "middle-east",
    label: "Middle-East",
    path: "/contacts?segment=middle-east",
    component: "",
    count: 20,
  },
  {
    key: "europe",
    label: "Europe",
    path: "/contacts?segment=europe",
    component: "",
    count: 20,
  },
];

export const CONTACT_TAGS = [
  {
    key: "sales",
    label: "Sales",
    path: "/contacts?tag=sales",
    component: "",
    count: 40,
  },
  {
    key: "finance",
    label: "Finance",
    path: "/contacts?tag=finance",
    component: "",
    count: 20,
  },
  {
    key: "ux",
    label: "UX",
    path: "/contacts?tag=ux",
    component: "",
    count: 20,
  },
];

export const CONTACTS = [
  {
    id: 1,
    email: "datt@bigbinary.com",
    name: "Datt Dongare",
    created_at: "2022-05-10T12:38:32.806Z",
    role: "owner",
  },
  {
    id: 2,
    email: "rahul@gmail.com",
    name: "Rahul Vaidya",
    created_at: "2022-05-17T12:38:32.806Z",
    role: "visitor",
  },
  {
    id: 3,
    email: "datt3@bigbinary.com",
    name: "Datt Dongare",
    created_at: "2022-05-10T12:38:32.806Z",
    role: "owner",
  },
  {
    id: 4,
    email: "rahul4@gmail.com",
    name: "Rahul Vaidya",
    created_at: "2022-05-17T12:38:32.806Z",
    role: "visitor",
  },
  {
    id: 5,
    email: "datt5@bigbinary.com",
    name: "Datt Dongare",
    created_at: "2022-05-10T12:38:32.806Z",
    role: "owner",
  },
  {
    id: 6,
    email: "rahul6@gmail.com",
    name: "Rahul Vaidya",
    created_at: "2022-05-17T12:38:32.806Z",
    role: "visitor",
  },
  {
    id: 7,
    email: "datt7@bigbinary.com",
    name: "Datt Dongare",
    created_at: "2022-05-10T12:38:32.806Z",
    role: "owner",
  },
  {
    id: 8,
    email: "rahul8@gmail.com",
    name: "Rahul Vaidya",
    created_at: "2022-05-17T12:38:32.806Z",
    role: "visitor",
  },
  {
    id: 9,
    email: "datt9@bigbinary.com",
    name: "Datt Dongare",
    created_at: "2022-05-10T12:38:32.806Z",
    role: "owner",
  },
  {
    id: 10,
    email: "rahul10@gmail.com",
    name: "Rahul Vaidya",
    created_at: "2022-05-17T12:38:32.806Z",
    role: "visitor",
  },
  {
    id: 11,
    email: "datt11@bigbinary.com",
    name: "Datt Dongare",
    created_at: "2022-05-10T12:38:32.806Z",
    role: "owner",
  },
  {
    id: 12,
    email: "rahul@gmail.com",
    name: "Rahul Vaidya",
    created_at: "2022-05-17T12:38:32.806Z",
    role: "visitor",
  },
  {
    id: 13,
    email: "datt13@bigbinary.com",
    name: "Datt Dongare",
    created_at: "2022-05-10T12:38:32.806Z",
    role: "owner",
  },
  {
    id: 14,
    email: "rahul@gmail.com",
    name: "Rahul Vaidya",
    created_at: "2022-05-17T12:38:32.806Z",
    role: "visitor",
  },
  {
    id: 15,
    email: "datt15@bigbinary.com",
    name: "Datt Dongare",
    created_at: "2022-05-10T12:38:32.806Z",
    role: "owner",
  },
  {
    id: 16,
    email: "rahul16@gmail.com",
    name: "Rahul Vaidya",
    created_at: "2022-05-17T12:38:32.806Z",
    role: "visitor",
  },
];
