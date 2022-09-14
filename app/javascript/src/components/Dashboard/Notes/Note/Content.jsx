import React from 'react'

import { Typography } from "neetoui";

const Content = ({description}) => {
  return (
    <>
      <div className="mb-4 flex text-left">
        <Typography style="body1">
          {description}
        </Typography>
      </div>
      <hr/>
    </>
  )
}

export default Content;
