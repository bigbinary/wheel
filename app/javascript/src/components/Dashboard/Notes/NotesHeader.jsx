import React from "react";

import { Search, Plus } from "@bigbinary/neeto-icons";
import { Button, Input } from "neetoui/v2";
import { Header } from "neetoui/v2/layouts";

const NotesHeader = ({ activeCategory, onToggleMenu, addButtonProps }) => {
  const { label } = activeCategory;

  const actionBlock = (
    <>
      <Input
        placeholder="Search Name, Email, Phone Number, Ect."
        prefix={<Search size={16} />}
      />
      <Button
        className="mx-2"
        label="Add Note"
        style="primary"
        icon={() => <Plus size={20} />}
        {...addButtonProps}
      />
    </>
  );

  return (
    <Header
      actionBlock={actionBlock}
      menuBarToggle={onToggleMenu}
      title={`${label} Notes`}
    />
  );
};

export default NotesHeader;
