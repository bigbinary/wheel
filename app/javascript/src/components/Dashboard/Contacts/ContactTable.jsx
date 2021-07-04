import React from "react";
import { Checkbox, Avatar, Button, Tooltip } from "neetoui";

export default function ContactTable({
  selectedContactIds,
  setSelectedContactIds,
  contacts,
}) {
  return (
    <div className="w-full px-4">
      <table className="nui-table nui-table--checkbox nui-table--actions">
        <thead>
          <tr>
            <th>
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
            <th className="text-left text-gray-400">Name</th>
            <th className="text-left text-gray-400">Email</th>
            <th className="text-center text-gray-400">Department</th>
            <th className="text-center text-gray-400">Contact Number</th>
            <th className="text-center text-gray-400">Add To Basecamp</th>
            <th className="text-center text-gray-400"></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
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
                      setSelectedContactIds([
                        ...selectedContactIds,
                        contact.id,
                      ]);
                    }
                  }}
                />
              </td>
              <td>
                <div className="flex flex-row items-center justify-start space-x-4">
                  <>
                    <Avatar size={30} contact={{ name: contact.name }} />
                    <span>{contact.name}</span>
                  </>
                </div>
              </td>
              <td>
                <div className="flex flex-row items-center justify-start">
                  {contact.email}
                </div>
              </td>
              <td>
                <div className="flex flex-row items-center justify-center">
                  {contact.department}
                </div>
              </td>
              <td>
                <div className="flex flex-row items-center justify-center">
                  {contact.contactNumber}
                </div>
              </td>
              <td>
                <div className="flex flex-row items-center justify-center">
                  <Checkbox name="checkbox_name" checked={false} />
                </div>
              </td>
              <td>
                <div className="flex flex-row items-end justify-center space-x-4">
                  <Tooltip content={"Edit"} position="bottom">
                    <Button style="icon" icon="ri-pencil-line" />
                  </Tooltip>
                  <Tooltip content={"Delete"} position="bottom">
                    <Button style="icon" icon="ri-delete-bin-line" />
                  </Tooltip>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
