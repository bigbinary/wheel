import React from "react";
import { Avatar, Checkbox } from "nitroui";

export default function UserTable({
  selectedRowIds,
  setSelectedRowIds,
  users,
}) {
  return (
    <table className="nui-table nui-table--checkbox nui-table--avatar">
      <thead>
        <tr>
          <th className="px-2">
            <Checkbox
              checked={
                selectedRowIds.length === users.map(user => user.id).length
              }
              onClick={() => {
                const userIds = users.map(user => user.id);
                if (selectedRowIds.length === userIds.length) {
                  setSelectedRowIds([]);
                } else {
                  setSelectedRowIds(userIds);
                }
              }}
            />
          </th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr
            key={user.id}
            className={"cursor-pointer bg-white hover:bg-gray-50"}
          >
            <td>
              <Checkbox
                checked={selectedRowIds.includes(user.id)}
                onClick={event => {
                  event.stopPropagation();
                  const index = selectedRowIds.indexOf(user.id);

                  if (index > -1) {
                    setSelectedRowIds([
                      ...selectedRowIds.slice(0, index),
                      ...selectedRowIds.slice(index + 1),
                    ]);
                  } else {
                    setSelectedRowIds([...selectedRowIds, user.id]);
                  }
                }}
              />
            </td>
            <td>
              <div className="flex flex-row items-center justify-start text-gray-900">
                <Avatar size={36} className="mr-3" contact={user} />
                {user.name}
              </div>
            </td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
