import React, { useState, useEffect } from "react";
import SubHeading from "./SubHeading";
import ContactTable from "./ContactTable";
import { PageHeading } from "nitroui/layouts";
import { Button } from "nitroui";
import ContactsAPI from "apis/contacts";

export default function index() {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const [contacts, setContacts] = useState([
    { id: 1, name: "Vinay", email: "vinay@bigbinary.com" },
  ]);

  useEffect(() => {
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
    fetchContacts();
  }, []);
  return (
    <div>
      <PageHeading
        title="Contacts"
        rightButton={() => (
          <Button label="Add new contact" icon="ri-add-line" />
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
    </div>
  );
}
