import React, { useState } from "react";

import { Alert } from "neetoui";

import abbreviationsApi from "apis/abbreviations";

const DeleteAlert = ({
  refetch,
  onClose,
  selectedAbbreviationIds,
  setSelectedAbbreviationIds,
}) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      await abbreviationsApi.destroy_all({ ids: selectedAbbreviationIds });
      onClose();
      setSelectedAbbreviationIds([]);
      refetch();
    } catch (error) {
      logger.error(error);
      setDeleting(false);
    }
  };

  return (
    <Alert
      isOpen
      isSubmitting={deleting}
      message="Are you sure you want to continue? This cannot be undone."
      title={`Delete ${selectedAbbreviationIds.length} ${
        selectedAbbreviationIds.length > 1 ? "abbreviations" : "abbreviation"
      }?`}
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
