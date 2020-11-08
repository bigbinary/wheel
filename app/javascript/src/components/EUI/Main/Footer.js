import React from "react";

const Footer = () => {
  return (
    <div className="fixed right-8 bottom-8">
      <div className="flex flex-row items-center justify-start overflow-hidden border border-gray-200 rounded-lg cursor-pointer">
        <div className="flex flex-row items-center justify-center w-12 h-12 text-3xl text-gray-400 transition-all duration-300 ease-in-out border-r border-gray-200 hover:text-gray-600 hover:bg-gray-50">
          <i className="ri-arrow-up-s-line"></i>
        </div>
        <div className="flex flex-row items-center justify-center w-12 h-12 text-3xl text-gray-400 transition-all duration-300 ease-in-out hover:text-gray-600 hover:bg-gray-50">
          <i className="ri-arrow-down-s-line"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
