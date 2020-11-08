import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

const EUI = () => {
  return (
    <div className="flex flex-row items-stretch h-screen">
      <Sidebar />
      <Main />
    </div>
  );
};

export default EUI;
