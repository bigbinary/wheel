import React, { useState } from "react";
import { Alert, Toastr } from "neetoui";

export default function DeleteAlert({ onClose, showDeleteAlert }) {
  const [open, setOpen] = useState(showDeleteAlert);
  const onSubmitHandler = () => {
    onClose();
    Toastr.success("Note deleted successfully");
  };
  const onCancelHandler = () => {
    onClose();
  };
  return (
    <Alert
      isOpen={open}
      title="Delete Note"
      message="Are you sure you want to delete the note? All of your data will be permanently removed from our database forever. This action cannot be undone."
      onClose={() => setOpen(false)}
      cancelButtonProps={{
        onClick: () => onCancelHandler(),
      }}
      submitButtonProps={{
        label: "Delete",
        onClick: () => onSubmitHandler(),
      }}
      hideConfirmation={true}
    />
  );
}
