import React, { useEffect, useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import ContactsList from "./ContactsList";
import ContactsMenuBar from "./ContactsMenuBar";
import NewContactPane from "./Pane/Create";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewContactPane, setShowNewContactPane] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {};

  return (
    <div className="flex">
      <ContactsMenuBar showMenu={showMenu} />
      <Container>
        <Header
          title="All Contacts"
          actionBlock={
            <Button
              onClick={() => setShowNewContactPane(true)}
              label="Add Contact"
              icon="ri-add-line"
            />
          }
          menuBarToggle={() => {
            setShowMenu(!showMenu);
          }}
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <ContactsList />
        <NewContactPane
          showPane={showNewContactPane}
          setShowPane={setShowNewContactPane}
        />
      </Container>
    </div>
  );
};

export default Contacts;
