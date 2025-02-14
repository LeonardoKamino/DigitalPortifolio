"use client";

import SideBar from "@/components/Sidebar";
import { FileAudio, HistoryIcon, HomeIcon } from "lucide-react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    { title: "About", href: "#about", icon: HomeIcon },
    { title: "Projects", href: "#projects", icon: FileAudio },
    { title: "Contact", href: "#contact", icon: HistoryIcon },
  ];

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <SideBar links={links} />
      <div className="flex-1 mx-8 my-4">
        {/* <ToggledNavegation links={links} /> */}
        {children}
      </div>
    </div>
  );
}
