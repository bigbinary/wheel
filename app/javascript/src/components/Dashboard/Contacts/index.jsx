import React, { useEffect, useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import ContactsList from "./ContactsList";
import ContactsMenuBar from "./ContactsMenuBar";

const Contacts = () => {
  const [showMenu, setshowMenu] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

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
          actionBlock={<Button label="Add Contact" icon="ri-add-line" />}
          menuBarToggle={
            (onclick = () => {
              setshowMenu(!showMenu);
            })
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <ContactsList />
      </Container>
    </div>
  );
};

export default Contacts;
