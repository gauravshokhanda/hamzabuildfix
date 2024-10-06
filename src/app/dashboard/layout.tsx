"use client";
import Sidebar from "../components/dashboard/main-dashboard/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="grid grid-cols-12">
          <div className="col-span-2">
            <Sidebar />
          </div>
          <div className="col-span-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
