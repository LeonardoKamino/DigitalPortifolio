import React from "react";
import DashboardLayout from "@/components/dashboard";

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* Sidebar */}

      <DashboardLayout>
        <div className="flex-1">{children}</div>
      </DashboardLayout>

      {/* Toaster */}
      {/* Main Content */}
    </div>
  );
}
