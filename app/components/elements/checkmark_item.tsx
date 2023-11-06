// CheckmarkIcon.tsx

import React from 'react';

interface CheckmarkIconProps {
  text: string;
  className?: string;
}

const CheckmarkIcon: React.FC<CheckmarkIconProps> = ({ text, className }) => {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <svg
        className="w-6 h-6 text-green-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M5 13l4 4L19 7"
        />
      </svg>
      <span className="ml-2">{text}</span>
    </span>
  );
};

export default CheckmarkIcon;
