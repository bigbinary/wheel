import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import Menubar from "components/Common/Menubar";
import Table from "components/Dashboard/Contacts/Table";

import { CONTACTS_DATA, MENUBAR_DATA } from "./constants";

function Contacts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [, setCategory] = useState("All");
  const [, setShowNewContactPane] = useState(false);

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
      </Container>
    </>
  );
}

export default Contacts;
