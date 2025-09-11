import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
      {children}
    </button>
  );
};

export default Button;
