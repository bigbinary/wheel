import React from "react";

import { Alert, Toastr } from "neetoui/v2";

const DeleteAlert = ({ onClose }) => {
  const deleting = false;
  const handleDelete = () => {
    onClose();
    Toastr.success("Contact was successfully created.");
  };
  return (
    <Alert
      isOpen
      onSubmit={handleDelete}
      onClose={onClose}
      message="Are you sure you want to continue? This cannot be undone."
      title={`Delete Contact`}
      isSubmitting={deleting}
    />
  );
};

export default DeleteAlert;
