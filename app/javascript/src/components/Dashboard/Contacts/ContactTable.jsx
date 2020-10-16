import React from "react";
import { Avatar, Checkbox } from "nitroui";

export default function ContactTable({
  selectedRowIds,
  setSelectedRowIds,
  contacts = [],
}) {
  return (
    <table className="nui-table nui-table--checkbox nui-table--avatar">
      <thead>
        <tr>
          <th className="px-2">
            <Checkbox
              checked={
                selectedRowIds.length ===
                contacts.map(contact => contact.id).length
              }
              onClick={() => {
                const contactIds = contacts.map(contact => contact.id);
                if (selectedRowIds.length === contactIds.length) {
                  setSelectedRowIds([]);
                } else {
                  setSelectedRowIds(contactIds);
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
                checked={selectedRowIds.includes(contact.id)}
                onClick={event => {
                  event.stopPropagation();
                  const index = selectedRowIds.indexOf(contact.id);

                  if (index > -1) {
                    setSelectedRowIds([
                      ...selectedRowIds.slice(0, index),
                      ...selectedRowIds.slice(index + 1),
                    ]);
                  } else {
                    setSelectedRowIds([...selectedRowIds, contact.id]);
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
