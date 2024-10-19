"use client";
import logo from "@/app/public/images/logo.png";
import avatar from "../public/images/session-oversight/avatar.svg";
import down from "../public/images/dashnav/down.svg";
import { Navbar, NavbarSection } from "@/app/components/admin-panel/ui/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from "@/app/components/admin-panel/ui/sidebar";
import { SidebarLayout } from "@/app/components/admin-panel/ui/sidebar-layout";
import { UserIcon, Squares2X2Icon } from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { VideoCameraIcon } from "@heroicons/react/16/solid";

export function ApplicationLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarLayout
      navbar={
        <Navbar className="">
          {/* <NavbarSpacer /> */}
          <NavbarSection>
            <div className="px-5">
              <p className="text-xl text-[#000000]">
                {/* @ts-expect-error - pathnameNames does not contain all routes, fallback needed */}
                {pathnameNames[pathname]}
                <h1 className="text-[18px] md:text-[24px] md:mt-[45px]">
                  Good Morning, <span className="font-bold">Samantha</span> 😄
                </h1>
              </p>
            </div>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar className="relative">
          <SidebarHeader className="w-full flex items-center justify-center font-medium">
            <Link href="/" className="flex flex-col items-center">
              <Image src={logo} width={60} height={60} alt="Logo" />
              <div className="mt-[24px] md:mt-[28px]">
                <div className="flex items-center gap-4 md:gap-5">
                  <Image src={avatar} alt="avatar" width={38} height={40} />
                  <div className="flex items-center gap-2 md:gap-3">
                    <div>
                      <h1 className="text-[13px]">Abeeda Alex</h1>
                      <h1 className="text-[14px] font-semibold text-[#707070]">
                        Student
                      </h1>
                    </div>
                    <Image src={down} alt="avatar" />
                  </div>
                </div>
              </div>
            </Link>
          </SidebarHeader>

          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/teacher" current={pathname === "/teacher"}>
                <Squares2X2Icon />
                <SidebarLabel>Dashboard</SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/teacher/my-account"
                current={pathname.startsWith("/teacher/my-account")}
              >
                <UserIcon />
                <SidebarLabel>My Account</SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/teacher/settings"
                current={pathname.startsWith("/teacher/settings")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <SidebarLabel>Settings</SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/teacher/recordings"
                current={pathname.startsWith("/teacher/recordings")}
              >
                <VideoCameraIcon />
                <SidebarLabel>Recordings</SidebarLabel>
              </SidebarItem>
            </SidebarSection>

            <SidebarSpacer />
          </SidebarBody>
        </Sidebar>
      }
    >
      {children}
    </SidebarLayout>
  );
}

const pathnameNames = {
  "/teacher/my-account": "",
  "/teacher/settings": "",
};
