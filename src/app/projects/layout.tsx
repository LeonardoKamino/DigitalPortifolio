import React from "react";
import DashboardLayout from "@/components/Dashboard/Dashboard";
export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" w-full ">
      {/* Sidebar */}

      <DashboardLayout>
        <div className="flex-1 m-10">{children}</div>
      </DashboardLayout>

      {/* Toaster */}
      {/* Main Content */}
    </div>
  );
}
