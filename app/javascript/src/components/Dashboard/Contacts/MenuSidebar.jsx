import React, { useState, useEffect } from "react";

import { Search, Plus, Settings } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";
import { useHistory } from "react-router-dom";

import { CONTACT_TYPES, CONTACT_SEGMENTS, CONTACT_TAGS } from "./constants";

const MenuSidebar = ({ showMenu }) => {
  const history = useHistory();
  const [activeFilter, setActiveFilter] = useState(CONTACT_TYPES[0]);
  const [isSegmentSearchCollapsed, setIsSegmentSearchCollapsed] =
    useState(true);

  useEffect(() => history.push(activeFilter?.path), [activeFilter]);

  return (
    <MenuBar showMenu={showMenu} title="Contacts">
      {CONTACT_TYPES.map(filter => (
        <MenuBar.Block
          active={activeFilter.key === filter.key}
          count={filter.count}
          key={filter.key}
          label={filter.label}
          onClick={() => setActiveFilter(filter)}
        />
      ))}
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Search,
            onClick: () =>
              setIsSegmentSearchCollapsed(
                isSegmentSearchCollapsed => !isSegmentSearchCollapsed
              ),
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
      {CONTACT_SEGMENTS.map(filter => (
        <MenuBar.Block
          active={activeFilter.key === filter.key}
          count={filter.count}
          key={filter.key}
          label={filter.label}
          onClick={() => setActiveFilter(filter)}
        />
      ))}
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
      {CONTACT_TAGS.map(filter => (
        <MenuBar.Block
          active={activeFilter.key === filter.key}
          count={filter.count}
          key={filter.key}
          label={filter.label}
          onClick={() => setActiveFilter(filter)}
        />
      ))}
    </MenuBar>
  );
};

export default MenuSidebar;
