import React, { useState } from "react";

import { Alert, Toastr } from "@bigbinary/neetoui";

const DeleteAlert = onClose => {
  const [open, setOpen] = useState(true);

  const handleDelete = async () => {
    try {
      closeAlert();
      Toastr.success("Note has been successfully deleted.");
    } catch (error) {
      logger.error(error);
    }
  };

  const closeAlert = () => {
    setOpen(false);
    onClose;
  };

  return (
    <Alert
      isOpen={open}
      message="Are you sure you want to continue? This cannot be undone."
      title="Deleting Note"
      onClose={closeAlert}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
