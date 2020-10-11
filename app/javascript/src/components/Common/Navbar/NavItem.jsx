import React from "react";
import { Button, Tooltip } from "nitroui";
import classnames from "classnames";
import { useHistory, useLocation } from "react-router-dom";

export default function NavItem({ icon, link, title }) {
  const history = useHistory();
  const location = useLocation();
  const isActive = link === location.pathname;

  return (
    <Tooltip content={title} position="right">
      <Button
        style="icon"
        icon={icon}
        onClick={() => history.push(link)}
        className={classnames(
          [
            "w-12 h-12 rounded-md text-2xl flex items-center justify-center opacity-100 my-1",
          ],
          {
            "text-white bg-purple-500 hover:bg-purple-600 hover:text-white": isActive,
            "text-cool-gray-600  hover:bg-cool-gray-300  hover:text-cool-gray-600 ": !isActive,
          }
        )}
      />
    </Tooltip>
  );
}
