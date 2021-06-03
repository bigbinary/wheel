export const notes = [
  {
    id: 1,
    title: "Change support email",
    description:
      "forward all internal mails to Amaljith K. This needs to be a very long text that won't fit inside a normal description cell",
    tag: { name: "Internal", color: "blue" },
    createdDate: "Apr 10, 2021",
    dueDate: null,
    contact: "Neeraj S",
  },
  {
    id: 2,
    title: "Feedback",
    description: "Feedback 1.0",
    tag: { name: "Agile workflow", color: "green" },
    createdDate: "Apr 10, 2021",
    dueDate: "Apr 10, 2021",
    contact: "Vinay chandran",
  },
  {
    id: 3,
    title: "Feedback hover",
    description: "Feedback 2.0 hover experience",
    tag: { name: "Bug", color: "red" },
    createdDate: "Apr 10, 2021",
    dueDate: null,
    contact: "Charan Sam",
  },
];

export const sortProps = {
  option: { value: "title", label: "Name" },
  options: [
    { value: "id", label: "Index" },
    { value: "title", label: "Name" },
  ],
  onClick: () => {},
};

export const paginationProps = {
  count: 254,
  pageNo: 1,
  pageSize: 20,
  navigate: () => {},
};
