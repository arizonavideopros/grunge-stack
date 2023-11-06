// src/components/Header.tsx

import { Link } from "@remix-run/react";
import * as React from "react";

interface HeaderProps {
  title?: string;
  links?: { name: string; href: string }[];
}

const Header: React.FC<HeaderProps> = ({ title = "My App", links = [] }) => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <nav>
          <ul className="flex space-x-4">
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.href} className="hover:underline">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
