"use client";
import logo from "../public/images/logo.png";
import avatar from "../public/images/session-oversight/avatar.svg";
import down from "../public/images/dashnav/down.svg";
import { Navbar, NavbarSection } from "../components/admin-panel/ui/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from "../components/admin-panel/ui/sidebar";
import { SidebarLayout } from "../components/admin-panel/ui/sidebar-layout";
import { Squares2X2Icon } from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { UserIcon, VideoCameraIcon } from "@heroicons/react/16/solid";
import { MdPayments } from "react-icons/md";
import { GrResources } from "react-icons/gr";

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
              <SidebarItem href="/student" current={pathname === "/student"}>
                <Squares2X2Icon />
                <SidebarLabel>Dashboard</SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/student/my-account"
                current={pathname.startsWith("/student/my-account")}
              >
                <UserIcon />
                <SidebarLabel>My Acoounnt</SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/student/messages"
                current={pathname.startsWith("/student/messages")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                    clipRule="evenodd"
                  />
                </svg>

                <SidebarLabel>Message</SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/student/payments"
                current={pathname.startsWith("/student/payments")}
              >
                <MdPayments />
                <SidebarLabel>Payments</SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/student/recordings"
                current={pathname.startsWith("/student/recordings")}
              >
                <VideoCameraIcon />
                <SidebarLabel>Recordings</SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/student/resources"
                current={pathname.startsWith("/student/resources")}
              >
                <GrResources />
                <SidebarLabel>Resources</SidebarLabel>
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
