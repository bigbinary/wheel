import React, { useState } from "react";

import { Search, Settings, Plus } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";
import PropTypes from "prop-types";

function Menubar({ title, options, setCategory }) {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  return (
    <MenuBar showMenu title={title}>
      {options?.heads?.map(head => (
        <MenuBar.Block
          label={head.title}
          key={head.title}
          count={head.count}
          onClick={() => setCategory(head.title)}
        />
      ))}

      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Search,
            onClick: prevState => setIsSearchCollapsed(!prevState),
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
      {options?.segments?.map(segment => (
        <MenuBar.Block
          key={segment.title}
          label={segment.title}
          count={segment.count}
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
      {options?.tags?.map(tag => (
        <MenuBar.Block key={tag.title} label={tag.title} count={tag.count} />
      ))}
    </MenuBar>
  );
}
Menubar.propTypes = {
  title: PropTypes.string,
  options: PropTypes.object,
  setCategory: PropTypes.func,
};

export default Menubar;
