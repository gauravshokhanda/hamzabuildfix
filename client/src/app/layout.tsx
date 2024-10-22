"use client";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar/Navbar";

import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isDashboardOrResources = pathname.includes("/dashboard") || pathname.includes("/resources");
  return (
    <html lang="en">
      <body>
        {/* Conditionally render the Navbar */}
        {!isDashboardOrResources && <Navbar />}
        
        {children}
        
        {/* Conditionally render the Footer */}
        {!isDashboardOrResources && <Footer />}
      </body>
    </html>
  );
}