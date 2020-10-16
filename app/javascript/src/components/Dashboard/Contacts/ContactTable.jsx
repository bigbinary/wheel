import React from "react";
import { Avatar, Checkbox } from "nitroui";

export default function ContactTable({
  selectedContactIds,
  setSelectedContactIds,
  contacts = [],
}) {
  return (
    <table className="nui-table nui-table--checkbox nui-table--avatar">
      <thead>
        <tr>
          <th className="px-2">
            <Checkbox
              checked={
                selectedContactIds.length ===
                contacts.map(contact => contact.id).length
              }
              onClick={() => {
                const contactIds = contacts.map(contact => contact.id);
                if (selectedContactIds.length === contactIds.length) {
                  setSelectedContactIds([]);
                } else {
                  setSelectedContactIds(contactIds);
                }
              }}
            />
          </th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
          <tr
            key={contact.id}
            className={"cursor-pointer bg-white hover:bg-gray-50"}
          >
            <td>
              <Checkbox
                checked={selectedContactIds.includes(contact.id)}
                onClick={event => {
                  event.stopPropagation();
                  const index = selectedContactIds.indexOf(contact.id);

                  if (index > -1) {
                    setSelectedContactIds([
                      ...selectedContactIds.slice(0, index),
                      ...selectedContactIds.slice(index + 1),
                    ]);
                  } else {
                    setSelectedContactIds([...selectedContactIds, contact.id]);
                  }
                }}
              />
            </td>
            <td>
              <div className="flex flex-row items-center justify-start text-gray-900">
                <Avatar size={36} className="mr-3" contact={contact} />
                {contact.name}
              </div>
            </td>
            <td>{contact.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
