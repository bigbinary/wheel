import React from "react";
import { PageHeading } from "nitroui/layouts";
import { Button } from "nitroui";

export default function index() {
  return (
    <div>
      <PageHeading
        title="Users"
        rightButton={() => <Button label="Add new user" icon="ri-add-line" />}
      />
    </div>
  );
}
