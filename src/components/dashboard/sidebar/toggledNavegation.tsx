"use client";

import * as React from "react";

interface NavbarProps {
  links: { title: string; href: string }[];
}

const ToggledNavegation: React.FC<NavbarProps> = ({ links }) => {
  const navItemClass = " hover:text-grey-700";

  return (
    <ul className="flex space-x-4 ">
      {links.map((link) => (
        <li className={navItemClass} key={link.title}>
          <a href={link.href}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default ToggledNavegation;
