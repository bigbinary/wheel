import React from "react";

const Text = ({ placeholder }) => {
  return (
    <div className="transition-all duration-300 ease-in-out focus-within:transform focus-within:-translate-x-5">
      <input
        type="text"
        placeholder={placeholder || "Jane Doe"}
        className="tracking-wide w-full px-4 py-2.5 text-xl transition-all duration-300 rounded bg-cool-gray-50 focus:bg-transparent focus:outline-none text-gray-800 placeholder-gray-400"
      />
    </div>
  );
};

export default Text;
