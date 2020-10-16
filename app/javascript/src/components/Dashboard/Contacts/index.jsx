import React, { useState, useEffect } from "react";
import SubHeading from "./SubHeading";
import ContactTable from "./ContactTable";
import NewContactPane from "./NewContactPane";
import { PageHeading } from "nitroui/layouts";
import { Button, PageLoader } from "nitroui";
import ContactsAPI from "apis/contacts";

export default function index() {
  const [loading, setLoading] = useState(true);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await ContactsAPI.fetch();
      setContacts(response.data?.contacts);
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
        selectedRowIds={selectedRowIds}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <ContactTable
        selectedRowIds={selectedRowIds}
        setSelectedRowIds={setSelectedRowIds}
        contacts={contacts}
      />
      <NewContactPane
        showPane={showNewContactPane}
        setShowPane={setShowNewContactPane}
        fetchContacts={fetchContacts}
      />
    </div>
  );
}
