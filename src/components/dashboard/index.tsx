"use client";

import SideBar from "./sidebar";
import Navbar from "../navbar";
import { useState } from "react";
import { navigationLinks } from "@/config/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      {/* Sidebar */}
      <div className="hidden md:block md:fixed left-0 top-0 h-full transition-all duration-300">
        <SideBar
          links={navigationLinks}
          className="h-full"
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />
      </div>

      {/* Mobile Navbar (shown only on small screens) */}
      <div className="block md:hidden">
        <Navbar />
      </div>

      {/* Main Content with dynamic margin */}
      <div
        className={`flex-1 transition-all duration-300 px-auto ${
          isSidebarOpen ? "md:ml-[240px]" : "md:ml-24"
        }  md:my-4 `}
      >
        {children}
      </div>
    </div>
  );
}
