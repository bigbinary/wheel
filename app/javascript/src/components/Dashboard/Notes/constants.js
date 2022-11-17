import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assigned_contact: yup.array().required("Please assign to a contact"),
  tags: yup.array().required("Please assign tags to note"),
});

export const NOTES_TYPES = [
  {
    key: "all",
    label: "All",
    path: "/notes",
    component: "",
    count: 80,
  },
  {
    key: "users",
    label: "Users",
    path: "/notes?type=users",
    component: "",
    count: 40,
  },
  {
    key: "leads",
    label: "Leads",
    path: "/notes?type=leads",
    component: "",
    count: 20,
  },
  {
    key: "visitors",
    label: "Visitors",
    path: "/notes?type=visitors",
    component: "",
    count: 20,
  },
];

export const NOTES_SEGMENTS = [
  {
    key: "asia",
    label: "Asia",
    path: "/notes?segment=asia",
    component: "",
    count: 40,
  },
  {
    key: "middle-east",
    label: "Middle-East",
    path: "/notes?segment=middle-east",
    component: "",
    count: 20,
  },
  {
    key: "europe",
    label: "Europe",
    path: "/notes?segment=europe",
    component: "",
    count: 20,
  },
];

export const NOTES_TAGS = [
  {
    key: "sales",
    label: "Sales",
    path: "/notes?tag=sales",
    component: "",
    count: 40,
  },
  {
    key: "finance",
    label: "Finance",
    path: "/notes?tag=finance",
    component: "",
    count: 20,
  },
  {
    key: "ux",
    label: "UX",
    path: "/notes?tag=ux",
    component: "",
    count: 20,
  },
];

export const ASSIGN_CONTACT_OPTIONS = [
  { label: "Visitor 1", value: "visitor1_id" },
  { label: "Contact 2", value: "contact2_id" },
];

export const NOTE_TAG_OPTIONS = [
  { label: "Getting Started", value: "getting-started" },
  { label: "Onboarding", value: "onboarding" },
  { label: "User Flow", value: "user-flow" },
  { label: "UX", value: "ux" },
  { label: "Bugs", value: "bugs" },
  { label: "V2", value: "v2" },
];
