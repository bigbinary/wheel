import React from "react";

import { Plus, Search, Settings } from "@bigbinary/neeto-icons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

const ContactsMenu = ({ showMenu }) => (
  <MenuBar showMenu={showMenu} title="Contacts">
    <MenuBar.Block active count={0} label="All" />
    <MenuBar.Block count={0} label="Archived" />
    <MenuBar.Block count={0} label="Completed" />
    <MenuBar.Block count={0} label="Phase 2" />
    <MenuBar.SubTitle
      iconProps={[
        {
          icon: Search,
        },
      ]}
    >
      <Typography
        component="h4"
        style="h5"
        textTransform="uppercase"
        weight="bold"
      >
        Segments
      </Typography>
    </MenuBar.SubTitle>
    <MenuBar.SubTitle
      iconProps={[
        {
          icon: Search,
        },
        {
          icon: Plus,
        },
        {
          icon: Settings,
        },
      ]}
    >
      <Typography
        component="h4"
        style="h5"
        textTransform="uppercase"
        weight="bold"
      >
        Tags
      </Typography>
    </MenuBar.SubTitle>
  </MenuBar>
);

export default ContactsMenu;
