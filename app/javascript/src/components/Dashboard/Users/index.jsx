import React, { useState } from "react";
import SubHeading from "./SubHeading";
import { PageHeading } from "nitroui/layouts";
import { Button } from "nitroui";

export default function index() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <PageHeading
        title="Users"
        rightButton={() => <Button label="Add new user" icon="ri-add-line" />}
      />
      <SubHeading searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
}
