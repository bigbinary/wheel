import React from 'react'

const Container = props => {
  return (
    <>
      <div className='my-5 flex flex-col p-5 rounded w-full border border-solid border-gray-200 shadow'>
        {props.children}
      </div>
    </>
  );
}

export default Container;
