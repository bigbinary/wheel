import React, { useState } from "react";
import SubHeading from "./SubHeading";
import UserTable from "./UserTable";
import { PageHeading } from "nitroui/layouts";
import { Button } from "nitroui";

export default function index() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const [users] = useState([
    { id: 1, name: "Vinay", email: "vinay@bigbinary.com" },
  ]);
  return (
    <div>
      <PageHeading
        title="Users"
        rightButton={() => <Button label="Add new user" icon="ri-add-line" />}
      />
      <SubHeading searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <UserTable
        selectedRowIds={selectedRowIds}
        setSelectedRowIds={setSelectedRowIds}
        users={users}
      />
    </div>
  );
}
