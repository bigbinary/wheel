import React, { useState } from "react";

import { Plus } from "@bigbinary/neeto-icons";
import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, Input } from "neetoui/v2";
import { Container, Header } from "neetoui/v2/layouts";

import EmptyState from "components/Common/EmptyState";

import { dummyContacts } from "./constants";
import ContactList from "./ContactList";
import ContactsMenu from "./ContactsMenu";
import DeleteAlert from "./DeleteAlert";
import NewContactPane from "./Pane/CreateContact";

function Contacts() {
  const [showContactsMenu, setShowContactsMenu] = useState(true);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(false);
  const [contacts, setContacts] = useState(dummyContacts);

  return (
    <section className="flex w-full">
      <section>
        <ContactsMenu
          all={contacts.length}
          showContactsMenu={showContactsMenu}
        ></ContactsMenu>
      </section>
      <Container>
        <Header
          title="All Contacts"
          menuBarToggle={() => setShowContactsMenu(value => !value)}
          actionBlock={
            <>
              <Input
                className="mr-4 w-72"
                placeholder="Search Name, Email, Phone Number, Ect."
              />
              <Button
                label="New Contact"
                icon={Plus}
                onClick={() => setShowNewContactPane(value => !value)}
              />
            </>
          }
        />
        {contacts.length ? (
          <ContactList
            setSelectedContactId={setSelectedContactId}
            setShowDeleteAlert={setShowDeleteAlert}
            contacts={contacts}
          />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            title="Looks like you don't have any contacts!"
            subtitle="Add your contacts to send customized emails to them."
            primaryAction={() => setShowNewContactPane(value => !value)}
            primaryActionLabel="Add New Contact"
          />
        )}
        {showDeleteAlert && (
          <DeleteAlert
            selectedContactId={selectedContactId}
            onClose={() => setShowDeleteAlert(false)}
            setContacts={setContacts}
            setShowDeleteAlert={setShowDeleteAlert}
          />
        )}
      </Container>
      <NewContactPane
        showPane={showNewContactPane}
        setShowPane={setShowNewContactPane}
        setContacts={setContacts}
      />
    </section>
  );
}

export default Contacts;
