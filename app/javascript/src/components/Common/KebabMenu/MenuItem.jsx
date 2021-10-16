import React from "react";

import classnames from "classnames";
import { Typography } from "neetoui/v2";

const MenuItem = ({ label, active, ...otherProps }) => {
  return (
    <li>
      <button
        className={classnames("kebab-menu__item", {
          "kebab-menu__item--active": active
        })}
        {...otherProps}
      >
        <Typography style="body1">{label}</Typography>
      </button>
    </li>
  );
};

MenuItem.defaultProps = {
  active: false
};

export default MenuItem;
