// src/components/CardBasic.tsx

import { Link } from "@remix-run/react";
import * as React from "react";

import Button from "~/components/elements/button"

interface CardBasicProps {
  imageSrc: string;
  title: string;
  description: string;
  btntext: string;
  link: string;
  color: string;
}

const CardBasic: React.FC<CardBasicProps> = ({ imageSrc, title, description, btntext, link, color}) => (
  <div className={`rounded-lg shadow-md overflow-hidden ${color}`}>
    <img src={imageSrc} alt={title} className="w-full object-cover h-48" />
    <div className="p-4">
      <h3 className="text-2xl font-bold mb-1">{title}</h3>
      <p className="italic text-gray-700 mb-2">{description}</p>
          <Link
            to={link}
                    >
            <Button variant="primary">{btntext}</Button>
            </Link>
    </div>
   
  </div>
);

export default CardBasic;
