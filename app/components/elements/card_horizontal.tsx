// src/components/CardHorizontal.tsx

import * as React from "react";

interface CardHorizontalProps {
  imageSrc: string;
  title: string;
  description: string;
}

const CardHorizontal: React.FC<CardHorizontalProps> = ({ imageSrc, title, description }) => (
  <div className="flex rounded-lg shadow-md overflow-hidden">
    <img src={imageSrc} alt={title} className="w-1/3 object-cover" />
    <div className="p-4 flex-grow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default CardHorizontal;
