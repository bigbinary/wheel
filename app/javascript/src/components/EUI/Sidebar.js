import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-center w-1/5 p-8 shadow-xs bg-gray-50">
      <div className="flex flex-col items-center self-center justify-center w-full mt-auto">
        <h1 className="mb-4 text-2xl font-semibold text-center text-gray-600">
          Ruby Conf. Registration
        </h1>
        <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-blue-100 text-blue-800 md:mt-2 lg:mt-0">
          1/12
        </div>
      </div>
      <div className="flex flex-row items-center self-end justify-center w-full mx-auto mt-auto">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/400px-LinkedIn_Logo_2013.svg.png"
          className="w-auto h-8"
        />
      </div>
    </div>
  );
};

export default Sidebar;
