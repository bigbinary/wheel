import React, { useState, useEffect } from "react";

import { MenuBar } from "neetoui/layouts";
import queryString from "query-string";

import { SETTINGS_NAVLINKS } from "./navLinks";
import { getActiveNavLink } from "./utils";

const Settings = ({ history, location }) => {
  const { tab } = queryString.parse(location.search);
  const [activeNavlink, setActiveNavlink] = useState(
    () => getActiveNavLink(tab) || SETTINGS_NAVLINKS[0]
  );

  useEffect(() => history.push(activeNavlink?.path), [activeNavlink]);

  if (location.state?.resetTab) {
    location.state.resetTab = null;
    setActiveNavlink(() => getActiveNavLink(tab));
  }

  return (
    <>
      <MenuBar showMenu title="Settings">
        {SETTINGS_NAVLINKS.map(navlink => (
          <MenuBar.Item
            active={tab === navlink.key}
            description={navlink.description}
            key={navlink.key}
            label={navlink.label}
            onClick={() => setActiveNavlink(navlink)}
          />
        ))}
      </MenuBar>
      <activeNavlink.component />
    </>
  );
};

export default Settings;
