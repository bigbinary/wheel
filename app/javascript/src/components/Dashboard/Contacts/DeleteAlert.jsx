import React, { useState } from "react";

import { Alert, Toastr } from "neetoui/v2";

const DeleteAlert = ({
  onClose,
  selectedContactId,
  setContacts,
  setShowDeleteAlert,
}) => {
  const [deleting, setDeleting] = useState(false);
  const handleDelete = async () => {
    setDeleting(true);
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== selectedContactId)
    );
    setDeleting(false);
    setShowDeleteAlert(false);
    Toastr.success("Contact deleted successfully.");
  };

  return (
    <Alert
      isOpen
      onSubmit={handleDelete}
      onClose={onClose}
      message="Are you sure you want to delete this contact? This cannot be undone."
      title={`Delete Contact`}
      isSubmitting={deleting}
    />
  );
};

export default DeleteAlert;
