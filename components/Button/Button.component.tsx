import React from "react";

export type ButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-purple-600 text-md py-3 px-6 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ${className}`}
    >
      {text}
    </button>
  );
};
