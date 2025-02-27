"use client";

import SideBar from "@/components/sidebar";
import { FileAudio, HistoryIcon, HomeIcon } from "lucide-react";
import Navbar from "../navbar/navbar";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const links = [
    { title: "Home", href: "/", icon: HomeIcon },
    { title: "Projects", href: "/projects", icon: FileAudio },
    { title: "Contact", href: "#contact", icon: HistoryIcon },
  ];

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full transition-all duration-300">
        <SideBar
          links={links}
          className="h-full"
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen} // Pass the state controller to the sidebar
        />
      </div>

      {/* Mobile Navbar (shown only on small screens) */}
      <div className="block md:hidden">
        <Navbar />
      </div>

      {/* Main Content with dynamic margin */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "md:ml-[240px]" : "md:ml-24"
        } md:mx-8 md:my-4 `}
      >
        {children}
      </div>
    </div>
  );
}
