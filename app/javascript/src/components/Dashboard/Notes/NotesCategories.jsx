import React, { useState } from "react";

import { Search, Settings, Plus } from "@bigbinary/neeto-icons";
import { Typography } from "neetoui/v2";
import { MenuBar } from "neetoui/v2/layouts";

import SIDEBAR_LINKS from "constants/sidebarLinks";

const { byUserTypes, byRegion, byTags } = SIDEBAR_LINKS;

const NoteCategories = ({ selectedCategory, onChangeCategory, visible }) => {
  const [isRegionSearchCollapsed, setRegionSearchCollapsed] = useState(true);
  const [isTagsSearchCollapsed, setTagsSeachCollapsed] = useState(true);

  return (
    <MenuBar showMenu={visible} title="Notes">
      {byUserTypes.map(menuItem => {
        const { key, label, count } = menuItem;
        return (
          <MenuBar.Block
            key={key}
            label={label}
            count={count}
            active={menuItem === selectedCategory}
            onClick={() => onChangeCategory(menuItem)}
          />
        );
      })}

      <MenuBar.SubTitle
        iconProps={[
          {
            icon: () => <Search size={20} />,
            onClick: () => setRegionSearchCollapsed(!isRegionSearchCollapsed)
          }
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
        collapse={isRegionSearchCollapsed}
        onCollapse={() => setRegionSearchCollapsed(true)}
      />
      {byRegion.map(menuItem => {
        const { key, label, count } = menuItem;
        return (
          <MenuBar.Block
            key={key}
            label={label}
            count={count}
            active={menuItem === selectedCategory}
            onClick={() => onChangeCategory(menuItem)}
          />
        );
      })}

      <MenuBar.SubTitle
        iconProps={[
          {
            icon: () => <Settings size={20} />
          },
          {
            icon: () => <Plus size={20} />
          },
          {
            icon: () => <Search size={20} />,
            onClick: () => setTagsSeachCollapsed(!isTagsSearchCollapsed)
          }
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
        collapse={isTagsSearchCollapsed}
        onCollapse={() => setTagsSeachCollapsed(true)}
      />
      {byTags.map(menuItem => {
        const { key, label, count } = menuItem;
        return (
          <MenuBar.Block
            key={key}
            label={label}
            count={count}
            active={menuItem === selectedCategory}
            onClick={() => onChangeCategory(menuItem)}
          />
        );
      })}
    </MenuBar>
  );
};

export default NoteCategories;
