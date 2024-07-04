import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      className="w-[150px] lg:w-[200px] py-3 rounded-full bg-gradient-to-r from-purple-800 to-purple-500 text-white hover:from-purple-900 hover:to-purple-500 transition-colors duration-300 z-50"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
