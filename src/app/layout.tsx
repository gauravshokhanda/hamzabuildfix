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
  return (
    <html lang="en">
      <body>
        {/* Conditionally render the Navbar */}
        {!pathname.includes("/dashboard") && <Navbar />}
        
        {children}
        
        {/* Conditionally render the Footer */}
        {!pathname.includes("/dashboard") && <Footer />}
      </body>
    </html>
  );
}