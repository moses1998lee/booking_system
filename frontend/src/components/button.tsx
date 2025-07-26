import type React from "react";

interface ButtonProps {
  onClick?: (value: React.ReactNode) => void;
  children?: React.ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(children);
    }
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
