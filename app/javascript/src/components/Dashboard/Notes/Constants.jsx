import * as yup from "yup";

export const NOTES = [
  {
    id: 1,
    title: "Change support email",
    description: "forward all internal mails",
    tags: { text: "Internal", color: "blue" },
    createdDate: new Date(),
    dueDate: new Date(),
    contact: "Karthik Menon",
  },
  {
    id: 2,
    title: "Feedback",
    description: "Feedback V1.0",
    tags: { text: "Agile Workflow", color: "green" },
    createdDate: new Date(),
    dueDate: new Date(),
    contact: "Karthik Menon",
  },
  {
    id: 3,
    title: "feedback Hover",
    description: "Feedback V2.0",
    tags: { text: "Bug", color: "red" },
    createdDate: new Date(),
    dueDate: new Date(),
    contact: "Amal Dinesh",
  },
];

export const TAG_OPTIONS = [
  { label: "Internal", value: "internal" },
  { label: "External", value: "external" },
];

export const CONTACT_OPTIONS = [
  { label: "Amal Dinesh", value: "amaldinesh" },
  { label: "Karthik Menon", value: "karthikmenon" },
];

export const FORM_INITIAL_VALUES = {
  title: "React Onboarding Challenge",
  tags: TAG_OPTIONS[0],
  description: "Please use neeto-ui and tailwindCSS.",
  assignedContact: CONTACT_OPTIONS[0],
};
export const VALIDATION_SCHEMA = yup.object({
  title: yup.string().required("Title is required"),
  tags: yup.object().required("Tag is required"),
  description: yup.string().required("Description is required"),
  assignedContact: yup.object().required("Contact is required"),
});
