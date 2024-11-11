"use client";
import React, { useState } from "react";
import Recordings from "./recordings";
import { FaBars } from "react-icons/fa";

const Resources = () => {
  const [selectedResource, setSelectedResource] = useState<string>("TUTORIAL");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const resources = [
    "PORTAL VIDEO",
    "TUTORIAL",
    "Video Conference",
    "Virtual Whiteboard",
    "Practices",
    "FAQ",
    "Contact Us",
    "Feedback/Suggestion",
    "Report an issue",
  ];

  return (
    <div className="md:flex gap-[16px] px-[10px] md:px-[20px] mt-[30px] pb-[30px] md:pb-[50px]">
      {/* Hamburger menu for mobile */}
      <div className="md:hidden flex items-center justify-end mr-[20px]">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars className="text-2xl text-[#3A5377]" />
        </button>
      </div>

      {/* Resources Menu */}
      {isMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-lg z-10 md:hidden px-[20px] pb-[20px]">
          {resources.map((resource, index) => (
            <h1
              key={index}
              className={`mt-[10px] p-2 rounded-[10px] cursor-pointer ${
                selectedResource === resource
                  ? "bg-[#00ADEF] text-[#FFFFFF]"
                  : "hover:bg-[#00ADEF] hover:text-[#FFFFFF]"
              }`}
              onClick={() => {
                setSelectedResource(resource);
                setIsMenuOpen(false);
              }}
            >
              {resource}
            </h1>
          ))}
        </div>
      )}

      {/* Sidebar for larger screens */}
      <div className="md:w-[212px] md:flex-shrink-0 p-1 text-[#3A5377] hidden md:block">
        {resources.map((resource, index) => (
          <h1
            key={index}
            className={`mt-[10px] p-2 rounded-[10px] cursor-pointer ${
              selectedResource === resource
                ? "bg-[#00ADEF] text-[#FFFFFF]"
                : "hover:bg-[#00ADEF] hover:text-[#FFFFFF]"
            }`}
            onClick={() => setSelectedResource(resource)} // Set selected resource on click
          >
            {resource}
          </h1>
        ))}
      </div>

      {/* Recordings section */}
      <div className="flex-1">
        <Recordings />
      </div>
    </div>
  );
};

export default Resources;
