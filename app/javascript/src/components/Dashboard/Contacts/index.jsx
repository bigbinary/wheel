import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import Menubar from "components/Common/Menubar";
import Table from "components/Dashboard/Contacts/Table";

import { CONTACTS_DATA, MENUBAR_DATA } from "./constants";
import NewContactPane from "./Pane/Create";

function Contacts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [, setCategory] = useState("All");
  const [showNewContactPane, setShowNewContactPane] = useState(false);

  return (
    <>
      <Menubar
        title="Contacts"
        setCategory={setCategory}
        options={MENUBAR_DATA}
      />
      <Container>
        <Header
          title="Contacts"
          actionBlock={
            <Button
              onClick={() => setShowNewContactPane(true)}
              label="Add New Contact"
              size="large"
              icon="ri-add-line"
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
          menuBarToggle
        />
        <Table contacts={CONTACTS_DATA} />
        <NewContactPane
          showPane={showNewContactPane}
          setShowPane={setShowNewContactPane}
        />
      </Container>
    </>
  );
}

export default Contacts;
