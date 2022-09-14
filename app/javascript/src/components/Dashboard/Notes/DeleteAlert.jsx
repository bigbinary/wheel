import React from "react";

import { Alert } from "neetoui";

const DeleteAlert = ({ onClose, onDelete, isOpen }) => (
  <Alert
    isOpen={isOpen}
    message="Are you sure you want to delete the note? This action cannot be undone."
    size="large"
    title={`Delete Note`}
    onClose={onClose}
    onSubmit={() => onDelete()}
  />
);

export default DeleteAlert;
