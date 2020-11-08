import React from "react";

const YesNo = () => {
  return (
    <div className="flex flex-row items-center justify-start mt-4">
      <div className="flex flex-row items-center justify-start px-4 py-3 mr-4 text-xl rounded bg-gray-50">
        <i className="ri-thumb-up-line mr-3"></i>
        <span className="text-gray-800">Yes</span>
      </div>
      <div className="flex flex-row items-center justify-start py-3 pl-4 pr-6 text-xl rounded bg-gray-50">
        <i className="ri-thumb-down-line mr-3"></i>
        <span className="text-gray-800">No</span>
      </div>
    </div>
  );
};

export default YesNo;
