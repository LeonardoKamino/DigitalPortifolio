"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import Link from "next/link";
import SideBarItem from "./SideBarItem";
import { useState } from "react";
import { ModeToggle } from "./ModeTogle";

interface SideBarProps {
  links: { title: string; href: string; icon: React.ComponentType }[];
}

export default function SideBar({ links }: SideBarProps) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`relative transition-all duration-300 ${
        isOpen ? "w-72" : "w-16"
      } border-r`}
    >
      {/* Sidebar Content */}
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[80px] items-center justify-between border-b px-1 w-full">
          {isOpen && (
            <Link
              className={`flex items-center gap-2 font-semibold ml-1 `}
              href="/"
            ></Link>
          )}
          <PanelLeftClose
            className={`cursor-pointer ${isOpen ? "block" : "hidden"}`}
            onClick={toggleSidebar}
          />
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            {links.map((link) => (
              <SideBarItem
                key={link.title}
                href={link.href}
                icon={link.icon}
                label={isOpen ? link.title : " "}
              />
            ))}
          </nav>
        </div>
        <div className="flex items-center justify-center h-12">
          <ModeToggle />
        </div>
      </div>

      {/* Open Button */}
      {!isOpen && (
        <div
          className="absolute top-3 right-[-14px] z-50 rounded-full p-1 shadow cursor-pointer"
          onClick={toggleSidebar}
        >
          <PanelLeftOpen />
        </div>
      )}
    </div>
  );
}
