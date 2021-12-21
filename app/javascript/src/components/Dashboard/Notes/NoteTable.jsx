import React, { useState } from "react";

import { Clock, MenuVertical } from "@bigbinary/neeto-icons";
import { Tag, Label, Avatar, Dropdown } from "neetoui/v2";

import EditNotePane from "./Pane/EditNote";

export default function NoteTable({ setShowDeleteAlert }) {
  const [showEditNote, setShowEditNote] = useState(false);
  return (
    <>
      <div className="m-4 w-full notes-table-height">
        {[1, 2, 3, 4].map(item => (
          <div className="p-4 border mb-4" key={item}>
            <div className="mb-4 space-y-2">
              <div className="flex w-full">
                <h5 className="neeto-ui-text-gray-800 mr-auto">
                  How to claim the warranty?
                </h5>
                <Dropdown
                  buttonStyle="link"
                  icon={MenuVertical}
                  onClose={function noRefCheck() {}}
                  position="bottom-end"
                >
                  <li>Edit</li>
                  <li onClick={() => setShowDeleteAlert(true)}>Delete</li>
                </Dropdown>
              </div>
              <p className="neeto-ui-text-gray-600">
                "Are you getting my texts???" she texted to him. He glanced at
                it and chuckled under his breath. Of course he was getting them,
                but if he wasn't getting.
              </p>
            </div>
            <div className="flex w-full pt-4 border-t">
              <Tag label="Getting Started" className="my-auto" />
              <div className="flex flex-1">
                <Label
                  helpIconProps={{
                    icon: Clock,
                    tooltipProps: {
                      content: "Wednessday, 10:30AM",
                      position: "bottom",
                    },
                  }}
                  className="ml-auto"
                >
                  Created 2 hours ago
                </Label>
                <Avatar
                  size="small"
                  className="ml-2"
                  user={{
                    name: "neeto UI",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <EditNotePane showPane={showEditNote} setShowPane={setShowEditNote} />
    </>
  );
}
