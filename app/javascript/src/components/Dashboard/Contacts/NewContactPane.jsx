import React from "react";
import { Pane } from "neetoui";
import NewContactForm from "./NewContactForm";

export default function NewContactPane({
  fetchContacts,
  showPane,
  setShowPane,
}) {
  const onClose = () => setShowPane(false);
  return (
    <Pane title="Add Contact" isOpen={showPane} onClose={onClose}>
      <div className="px-6">
        <NewContactForm onClose={onClose} refetch={fetchContacts} />
      </div>
    </Pane>
  );
}
