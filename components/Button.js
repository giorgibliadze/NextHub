// components/Button.jsx
import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      id="purchase-button"
      className="relative w-[150px] lg:w-[200px] py-3 rounded-full bg-gradient-to-r from-purple-800 to-purple-500 text-white hover:from-purple-900 hover:to-purple-500 transition-colors duration-300 z-10"
      onClick={(e) => {
        e.stopPropagation();
        console.log("Button component clicked");
        onClick();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
