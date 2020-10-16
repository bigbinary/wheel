import React from "react";
import { Pane } from "nitroui";
import NewContactForm from "./NewContactForm";

export default function NewContactPane({
  fetchContacts,
  showPane,
  setShowPane,
}) {
  const onClose = () => setShowPane(false);
  return (
    <Pane title="Create a new contact" isOpen={showPane} onClose={onClose}>
      <div className="p-6">
        <NewContactForm onClose={onClose} refetch={fetchContacts} />
      </div>
    </Pane>
  );
}
