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
        {!pathname.includes("/dashboard") && <Navbar />}
        {children}
        {!pathname.includes("/dashboard") && <Footer />}
      </body>
    </html>
  );
}
