import React from "react";
import DashboardLayout from "@/components/dashboard/dashboard";

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" w-full ">
      {/* Sidebar */}

      <DashboardLayout>
        <div className="flex-1">{children}</div>
      </DashboardLayout>

      {/* Toaster */}
      {/* Main Content */}
    </div>
  );
}
