// src/components/Button.tsx

import * as React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", children }) => {
  let classNames = "py-2 px-4";

  if (variant === "primary") {
    classNames += " bg-blue-500 text-white font-bold hover:bg-blue-700";
  } else if (variant === "secondary") {
    classNames += " bg-gray-500 text-white font-bold hover:bg-gray-700";
  }

  return <button className={classNames}>{children}</button>;
};

export default Button;
