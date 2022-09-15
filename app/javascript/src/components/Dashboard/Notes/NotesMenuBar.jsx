import React, { useState } from "react";

import { Search, Settings, Plus } from "@bigbinary/neeto-icons";
import { Typography } from "@bigbinary/neetoui";
import { MenuBar } from "@bigbinary/neetoui/layouts";

// eslint-disable-next-line react/function-component-definition
export default function NotesMenuBar({ showMenu }) {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  return (
    <div>
      <MenuBar showMenu={showMenu} title="Notes">
        <MenuBar.Block label="All" count={200} active />
        <MenuBar.Block label="Users" count={80} />
        <MenuBar.Block label="Leads" count={60} />
        <MenuBar.Block label="Visitors" count={60} />

        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () => setIsSearchCollapsed(!isSearchCollapsed),
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
        <MenuBar.Search
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
        />
        <MenuBar.Block label="Europe" count={80} />
        <MenuBar.Block label="Middle-East" count={60} />
        <MenuBar.Block label="Asia" count={60} />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Settings,
            },
            {
              icon: Plus,
            },
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
            Tags
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Block label="Sales" count={80} />
        <MenuBar.Block label="Finance" count={60} />
        <MenuBar.Block label="User Experience" count={60} />
      </MenuBar>
    </div>
  );
}
