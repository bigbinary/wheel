import React, { useState, useEffect } from "react";

import { Search, Plus, Settings } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";
import { useHistory } from "react-router-dom";

import { NOTES_TYPES, NOTES_SEGMENTS, NOTES_TAGS } from "./constants";

const MenuSidebar = ({ showMenu }) => {
  const history = useHistory();
  const [activeFilter, setActiveFilter] = useState(NOTES_TYPES[0]);
  const [isSegmentSearchCollapsed, setIsSegmentSearchCollapsed] =
    useState(true);

  useEffect(() => history.push(activeFilter?.path), [activeFilter]);

  return (
    <MenuBar showMenu={showMenu} title="Notes">
      {NOTES_TYPES.map(filter => (
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
      {NOTES_SEGMENTS.map(filter => (
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
      {NOTES_TAGS.map(filter => (
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
