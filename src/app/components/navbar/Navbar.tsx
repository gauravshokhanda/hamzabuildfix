"use client";
import React, { useState, useEffect, useRef } from "react";
import logo from "../../public/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button";
import NavItem from "./NavItem";
import Dropdown from "./DropDown";
import useStudentRoute from "@/hooks/useStudentRoute";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const studentRoute = useStudentRoute();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  if (studentRoute) {
    return null;
  }

  return (
    <nav className="bg-white border-b shadow-md relative z-50">
      <div className="mx-auto px-4 md:px-10">
        <div className="flex py-2  justify-between items-center">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image src={logo} className="h-12 w-12" alt="" />
              </Link>
            </div>
          </div>

          <div className="hidden md:block lg:pl-14 ">
            <div className="ml-6 flex items-baseline space space-x-4 lg:space-x-6">
              <NavItem label="Home" link="/" />
              <NavItem label="About Us" link="/about-us" />
              <NavItem label="Find a tutor" link="#" />

              <Dropdown
                label="Become a tutor"
                items={[
                  { label: "Become a tutor", href: "/gameserver" },
                  { label: "Become a tutor", href: "/gameserver" },
                ]}
              />
              <Dropdown
                label="Resources"
                items={[{ label: "Resources", href: "/resources" }]}
              />
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center md:ml-6 space-x-4">
              <div className="w-36">
                <button className="rounded-full py-3 border-2 border-white bg-secondary w-full h-full text-white font-semibold text-md">
                  Login
                </button>
              </div>

              <div className="w-36">
                <Button label="Signup" classNames="rounded-full" />
              </div>
            </div>
          </div>

          <div ref={menuRef} className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg
                className={`h-6 w-6 ${
                  isOpen ? "rotate-90" : "rotate-0"
                } transition-transform duration-300 ease-in-out`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "max-h-96" : "max-h-0"
        } md:hidden overflow-hidden transition-all duration-300 ease-in-out absolute w-full bg-white z-50`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="flex flex-col">
            <NavItem label="Home" link="/" />
            <NavItem label="About Us" link="/about-us" />
            <NavItem label="Find a tutor" link="#" />
          </div>
          <div className="flex flex-col md:ml-6 space-y-2">
            <div className="w-24 h-10">
              <button className="rounded-full py-1 border-[1px] border-white bg-secondary w-full h-full text-white font-normal text-sm">
                Login
              </button>
            </div>
            <div className="w-24 h-10">
              <Button label="Signup" classNames="rounded-full" small />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
