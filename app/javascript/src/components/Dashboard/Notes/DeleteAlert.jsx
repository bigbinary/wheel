import React, { useState } from "react";

import { Alert } from "neetoui/v2";

import notesApi from "apis/notes";

const DeleteAlert = ({
  refetch,
  onClose,
  selectedNoteId,
  setSelectedNoteId,
}) => {
  const [deleting, setDeleting] = useState(false);
  const handleDelete = async () => {
    try {
      setDeleting(true);
      await notesApi.destroy({ ids: [selectedNoteId] });
      onClose();
      setSelectedNoteId(0);
      refetch();
    } catch (error) {
      logger.error(error);
    } finally {
      setDeleting(false);
    }
  };
  return (
    <Alert
      isOpen
      onSubmit={handleDelete}
      onClose={onClose}
      message="Are you sure you want to delete this note? This cannot be undone."
      title={`Delete Note`}
      isSubmitting={deleting}
    />
  );
};

export default DeleteAlert;
