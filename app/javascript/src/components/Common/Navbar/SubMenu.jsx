import React from "react";

import { NavLink } from "react-router-dom";

export default function SubMenu({ subLinks, title }) {
  return (
    <>
      <li className="font-semibold text-gray-800 pointer-events-none">
        {title}
      </li>
      {subLinks.map(subLink => (
        <div key={subLink.title}>
          <NavLink
            to={subLink.link}
            className="w-full nui-dropdown--item"
            activeClassName="active"
            onClick={e => e.target.parentElement.click()}
          >
            <span>{subLink.title}</span>
          </NavLink>
        </div>
      ))}
    </>
  );
}
