import React from "react";

import { Button, Modal, Typography } from "neetoui";

const ConfirmPasswordModal = ({
  isOpen,
  onClose,
  header = "",
  children,
  onSubmit,
  isSubmitting,
}) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <Modal.Header>
      <Typography style="h2">{header}</Typography>
    </Modal.Header>
    <Modal.Body>{children}</Modal.Body>
    <Modal.Footer className="space-x-2">
      <Button
        label="Continue"
        onClick={onSubmit}
        size="large"
        loading={isSubmitting}
        disabled={isSubmitting}
      />
      <Button
        style="text"
        label="Cancel"
        onClick={onClose}
        size="large"
        disabled={isSubmitting}
      />
    </Modal.Footer>
  </Modal>
);

export default ConfirmPasswordModal;
