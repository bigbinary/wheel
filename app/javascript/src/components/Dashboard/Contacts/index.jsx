import React, { useState, useEffect } from "react";

import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { CONTACT_ROWS } from "./constants";
import ContactsList from "./ContactsList";
import ContactsMenu from "./ContactsMenu";

const Contacts = () => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState([{}]);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setLoading(false);
    setContacts(CONTACT_ROWS);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="flex w-full">
      <ContactsMenu showMenu={showMenu} />
      <Container>
        <Header
          title="All Contacts"
          actionBlock={
            <Button icon="ri-add-line" label="Add Contact" onClick={() => {}} />
          }
          menuBarToggle={() => {
            setShowMenu(!showMenu);
          }}
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <ContactsList contacts={contacts} />
      </Container>
    </div>
  );
};

export default Contacts;
