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
  const hideNavbarAndFooterRoutes = ["/admin", "/teacher", "/student"];
  const shouldHideNavbarAndFooter = hideNavbarAndFooterRoutes.some((route) =>
    pathname.startsWith(route)
  );

  return (
    <html lang="en">
      <body>
        {/* Conditionally render the Navbar */}
        {!shouldHideNavbarAndFooter && <Navbar />}

        {children}

        {/* Conditionally render the Footer */}
        {!shouldHideNavbarAndFooter && <Footer />}
      </body>
    </html>
  );
}