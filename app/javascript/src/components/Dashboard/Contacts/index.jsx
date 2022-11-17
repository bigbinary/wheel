import React, { useState } from "react";

import EmptyContactListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import { CONTACTS } from "./constants";
import MenuSidebar from "./MenuSidebar";
import Table from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <MenuSidebar showMenu={showMenu} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenu(!showMenu)}
          title="All Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add Contact"
              size="medium"
              style="primary"
              onClick={() => {}}
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
            placeholder: "Search Name, Email, Phone number etc",
          }}
        />
        {CONTACTS.length ? (
          <Table
            contacts={CONTACTS}
            selectedContactIds={selectedContactIds}
            setLoading={setLoading}
            setSelectedContactIds={setSelectedContactIds}
          />
        ) : (
          <EmptyState
            image={EmptyContactListImage}
            primaryAction={() => {}}
            primaryActionLabel="Add new Contact"
            subtitle="Add your Contacts to send customized emails to them."
            title="Looks like you don't have any Contacts!"
          />
        )}
      </Container>
    </>
  );
};

export default Contacts;
