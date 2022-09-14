import React from 'react'

import { Button, Avatar, Typography } from 'neetoui'
import { Clock } from 'neetoicons'

const Footer = () => {

  return (
    <>
      <div className='flex items-center justify-between'>
          <Button
            label="Getting started"
            className="mt-3 mx-2"
            style="secondary"
          />
          <span className='flex justify-between'>
            <Clock className="mt-3 mx-1" />
            <Typography style="body3" className="mt-4 mx-1">
                Created 2 hours ago
            </Typography>
            <Avatar
              className="mt-3 mx-1"
              size="small"
              user={{
                imageUrl: "https://i.pravatar.cc/300",
              }}
            />
          </span>
      </div>
    </>
  );
}

export default Footer;
