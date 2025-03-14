"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ModeToggle from "../ui/mode-toggle";
import Link from "next/link";
import { navigationLinks } from "@/config/navigation";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItemClass =
    "hover:bg-zinc-300 dark:hover:bg-zinc-700 px-4 py-2 rounded-md transition-colors";

  return (
    <nav className="flex w-full justify-between items-center py-4 px-6 shadow-md dark:bg-zinc-900 rounded-lg">
      {/* Logo or Brand Name */}

      {/* Desktop Navigation */}
      <ModeToggle />
      <ul className="flex m-auto space-x-8 text-lg hidden md:flex">
        {navigationLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={navItemClass}>
              {link.title}
            </Link>
          </li>
        ))}
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
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-zinc-900 md:hidden z-10">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={navItemClass}
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
