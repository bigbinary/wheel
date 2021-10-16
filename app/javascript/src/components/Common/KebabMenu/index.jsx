import React, { useState } from "react";

import { MenuVertical } from "@bigbinary/neeto-icons";

import MenuItem from "./MenuItem";

const KebabMenu = ({ children, iconProps }) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className="kebab-menu">
      <MenuVertical
        size={16}
        onClick={() => setExpanded(!isExpanded)}
        {...iconProps}
      />
      {isExpanded ? (
        <div className="kebab-menu__content">
          <ul onClick={() => setExpanded(false)}>{children}</ul>
        </div>
      ) : null}
    </div>
  );
};

KebabMenu.Item = MenuItem;

KebabMenu.defaultProps = {
  iconProps: {}
};

export default KebabMenu;
