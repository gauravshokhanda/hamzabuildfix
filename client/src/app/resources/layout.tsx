"use client";
import { useState } from "react";
import Sidebar from "../components/dashboard/main-dashboard/Sidebar";
import ResourceHeader from "./ResourceHeader";


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
            <Sidebar role="Student" isOpen={isOpen} toggleSidebar={toggleSidebar} />
          </div>
          <div className="col-span-12 lg:col-span-10 p-6">
            <ResourceHeader />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
