"use client";
import { useState } from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Sidebar from "../components/dashboard/main-dashboard/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <html lang="en">
      <body>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-2">
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          </div>
          <div className="col-span-12 lg:col-span-10 p-6">
            <DashboardHeader />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
