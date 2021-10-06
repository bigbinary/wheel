import React from "react";

import * as neetoIcons from "@bigbinary/neeto-icons";
import * as v2 from "@bigbinary/neetoui/v2";

const Card = () => {
  return (
    <div className="border p-4 mx-6 mb-4 rounded-sm shadow">
      <v2.Typography style="h5" className="text-base">
        How to claim the warranty?
      </v2.Typography>
      <v2.Typography style="body3" className="text-sm my-1 text-gray-500">
        "Are you getting my texts???" she texted to him. He glanced at it and
        chuckled under his breath. Of course he was getting them, but if he
        wasn't getting
      </v2.Typography>
      <div className="border-t mt-3"></div>
      <div className="flex justify-between mt-4 items-center">
        <v2.Tag label="Getting started" className="bg-gray-100 text-gray-500" />
        <v2.Tooltip content="Wednesday, 10:30AM" placement="bottom">
          <div className="flex gap-2 items-center">
            <neetoIcons.Clock size={9} />
            <span className="text-xs text-gray-600">Drafted 2 hours ago</span>
            <v2.Avatar
              size="small"
              user={{
                imageUrl: "https://i.pravatar.cc/300",
                name: "Olivia Smith"
              }}
            />
          </div>
        </v2.Tooltip>
      </div>
    </div>
  );
};

export default Card;
