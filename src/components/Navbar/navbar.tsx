"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItemClass =
    "hover:bg-zinc-700 px-4 py-2 rounded-md transition-colors";

  return (
    <nav className="flex w-full justify-between items-center py-4 px-6 shadow-md bg-zinc-900 rounded-lg">
      {/* Logo or Brand Name */}

      {/* Desktop Navigation */}
      <ul className="flex m-auto space-x-8 text-lg hidden md:flex">
        <li>
          <a href="/about" className={navItemClass}>
            About
          </a>
        </li>
        <li>
          <a href="/projects" className={navItemClass}>
            Projects
          </a>
        </li>
        <li>
          <a href="/contact" className={navItemClass}>
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-zinc-900 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a
                href="/about"
                className={navItemClass}
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className={navItemClass}
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={navItemClass}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
