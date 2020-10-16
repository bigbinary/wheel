import React, { useState, useEffect } from "react";
import { PageHeading } from "nitroui/layouts";
import { Button, PageLoader } from "nitroui";
import ContactsAPI from "apis/contacts";
import EmptyState from "components/Common/EmptyState";
import SubHeading from "./SubHeading";
import ContactTable from "./ContactTable";
import NewContactPane from "./NewContactPane";
import DeleteAlert from "./DeleteAlert";
import EmptyContactsListImage from "images/EmptyContactsList";

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
      {contacts.length ? (
        <>
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
        </>
      ) : (
        <EmptyState
          image={EmptyContactsListImage}
          title="Looks like you don't have any contacts!"
          subtitle="Add your contacts to send customized emails to them."
          primaryAction={() => setShowNewContactPane(true)}
          primaryActionLabel="Add new contact"
        />
      )}
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
