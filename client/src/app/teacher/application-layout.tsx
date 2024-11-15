"use client";
import logo from "public/images/logo.png";
import avatar from "public/images/session-oversight/avatar.svg";
import down from "public/images/dashnav/down.svg";
import { Navbar, NavbarSection } from "../components/admin-panel/ui/navbar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
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
import {
  Squares2X2Icon,    // Dashboard icon
  CalendarIcon,      // My Schedule icon
  AcademicCapIcon,     // My Students icon
  ChatBubbleBottomCenterTextIcon, // Message icon
  VideoCameraIcon,   // Videos icon
  ChartBarIcon,      // My Stats icon
  StarIcon,          // Reviews icon
  CreditCardIcon,    // Payments icon
  UserIcon           // My Accounts icon
} from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { GrResources } from "react-icons/gr";

export function ApplicationLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const dividerPaths = ["/teacher/resources", "/teacher/my-account", "/teacher/recordings"];
  const showDivider = dividerPaths.includes(pathname);
  return (
    <SidebarLayout
      navbar={
        <Navbar>
          
          {/* <NavbarSpacer /> */}
          <NavbarSection>
            
            <div className="">
              <p className="text-xl text-[#000000]">
                {/* @ts-expect-error - pathnameNames does not contain all routes, fallback needed */}
                {pathnameNames[pathname]}
              </p>
              
            </div>
            <div className="w-full px-8 py-2 mx-auto">
            <DashboardHeader />
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
              <SidebarItem href="/teacher"
                current={pathname === "/teacher"}
               >
                <Squares2X2Icon />
                <SidebarLabel>Dashboard</SidebarLabel>
              </SidebarItem>

              <SidebarItem
                href="/teacher/my-schedule"
                current={pathname.startsWith("/teacher/my-schedule")}
              >
                <CalendarIcon />
                <SidebarLabel>My Schedule</SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/teacher/my-students"
                current={pathname.startsWith("/teacher/my-students")}
              >
                <AcademicCapIcon />
                <SidebarLabel>My Students</SidebarLabel>
              </SidebarItem>

              <SidebarItem
                href="/teacher/resources"
                current={pathname.startsWith("/teacher/resources")}
              >
                <GrResources /> 
                <SidebarLabel>Resources</SidebarLabel>
              </SidebarItem>


              <SidebarItem
                href="/teacher/message"
                current={pathname.startsWith("/teacher/message")}
              >
                <ChatBubbleBottomCenterTextIcon />
                <SidebarLabel>Message</SidebarLabel>
              </SidebarItem>

              <SidebarItem
                href="/teacher/videos"
                current={pathname.startsWith("/teacher/videos")}
              >
                <VideoCameraIcon />
                <SidebarLabel>Videos</SidebarLabel>
              </SidebarItem>

              <SidebarItem
                href="/teacher/my-stats"
                current={pathname.startsWith("/teacher/my-stats")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chart-line">
                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                  <path d="m19 9-5 5-4-4-3 3"></path>
                </svg>
                <SidebarLabel>My Stats</SidebarLabel>
              </SidebarItem>

              {showDivider && (
                <div className="flex items-center">
                  <div className="flex-grow border-t" style={{ borderColor: "#E4E4E4" }}></div>
                </div>
              )}

              <SidebarItem
                href="/teacher/reviews"
                current={pathname.startsWith("/teacher/reviews")}
              >
                <StarIcon />
                <SidebarLabel>Reviews</SidebarLabel>
              </SidebarItem>


              <SidebarItem
                href="/teacher/payments"
                current={pathname.startsWith("/teacher/payments")}
              >
                <CreditCardIcon />
                <SidebarLabel>Payments</SidebarLabel>
              </SidebarItem>


              <SidebarItem
                href="/teacher/my-account"
                current={pathname.startsWith("/teacher/my-account")}
              >
                <UserIcon />
                <SidebarLabel>My Account</SidebarLabel>
              </SidebarItem>
              
             

              {/* <SidebarItem
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
              </SidebarItem> */}
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
