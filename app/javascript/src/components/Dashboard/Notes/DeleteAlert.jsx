import React, { useState } from "react";

import { Alert } from "neetoui";

import notesApi from "apis/notes";

const DeleteAlert = ({
  refetch,
  onClose,
  selectedNoteIds,
  setSelectedNoteIds,
}) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      await notesApi.destroy({ ids: selectedNoteIds });
      onClose();
      setSelectedNoteIds([]);
      refetch();
    } catch (error) {
      logger.error(error);
      setDeleting(false);
    }
  };

  return (
    <Alert
      isOpen
      size="sm"
      title="Delete Note"
      message="Are you sure you want to delete the note? This action cannot be undone."
      onClose={onClose}
      onSubmit={handleDelete}
      isSubmitting={deleting}
      closeButton={false}
    />
  );
};

export default DeleteAlert;
