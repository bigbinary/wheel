import React, { useState, useEffect } from "react";
import { PageHeading } from "nitroui/layouts";
import { Button, PageLoader } from "nitroui";
import ContactsAPI from "apis/contacts";
import SubHeading from "./SubHeading";
import ContactTable from "./ContactTable";
import NewContactPane from "./NewContactPane";
import DeleteAlert from "./DeleteAlert";

export default function index() {
  const [loading, setLoading] = useState(true);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await ContactsAPI.fetch();
      setContacts(response.data);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }
  return (
    <div>
      <PageHeading
        title="Contacts"
        rightButton={() => (
          <Button
            onClick={() => setShowNewContactPane(true)}
            label="Add new contact"
            icon="ri-add-line"
          />
        )}
      />
      <SubHeading
        loading={loading}
        selectedContactIds={selectedContactIds}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setShowDeleteAlert={setShowDeleteAlert}
      />
      <ContactTable
        selectedContactIds={selectedContactIds}
        setSelectedContactIds={setSelectedContactIds}
        contacts={contacts}
      />
      <NewContactPane
        showPane={showNewContactPane}
        setShowPane={setShowNewContactPane}
        fetchContacts={fetchContacts}
      />
      {showDeleteAlert && (
        <DeleteAlert
          selectedContactIds={selectedContactIds}
          onClose={() => setShowDeleteAlert(false)}
          refetch={fetchContacts}
        />
      )}
    </div>
  );
}
