import React, { useState } from "react";

import { Alert } from "neetoui";

const DeleteAlert = ({ onClose }) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      onClose();
    } catch (error) {
      logger.error(error);
      setDeleting(false);
    }
  };

  return (
    <Alert
      isOpen
      onSubmit={handleDelete}
      onClose={onClose}
      message="Are you sure you want to continue? This cannot be undone."
      title={"Delete note?"}
      isSubmitting={deleting}
    />
  );
};

export default DeleteAlert;
