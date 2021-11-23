import React, { useState } from "react";

import { Search, Plus, Settings } from "@bigbinary/neeto-icons";
import { Typography } from "neetoui/v2";
import { MenuBar } from "neetoui/v2/layouts";

export default function NotesMenu({ showMenuBar }) {
  const [isSegmentSearchCollapsed, setIsSegmentSearchCollapsed] =
    useState(true);
  const [isTagSearchCollapsed, setIsTagSearchCollapsed] = useState(true);
  return (
    <MenuBar showMenu={showMenuBar} title="Notes">
      <MenuBar.Block label="All" count={200} active />
      <MenuBar.Block label="Users" count={80} />
      <MenuBar.Block label="Leads" count={60} />
      <MenuBar.Block label="Visitors" count={60} />
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Search,
            onClick: () =>
              setIsSegmentSearchCollapsed(!isSegmentSearchCollapsed),
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
        collapse={isSegmentSearchCollapsed}
        onCollapse={() => setIsSegmentSearchCollapsed(true)}
      />
      <MenuBar.Block label="Europe" count={80} />
      <MenuBar.Block label="Middle-East" count={60} />
      <MenuBar.Block label="Asia" count={60} />
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Search,
            onClick: () => setIsTagSearchCollapsed(!isTagSearchCollapsed),
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
      <MenuBar.Search
        collapse={isTagSearchCollapsed}
        onCollapse={() => setIsTagSearchCollapsed(true)}
      />
      <MenuBar.Block label="Sales" count={80} />
      <MenuBar.Block label="Finance" count={60} />
      <MenuBar.Block label="User Experience" count={60} />
    </MenuBar>
  );
}
