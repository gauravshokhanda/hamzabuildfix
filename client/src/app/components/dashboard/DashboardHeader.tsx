"use client";
import React, { useState } from "react";
import ScheduleALesson from "./main-dashboard/ScheduleALesson";
import LessonRequests from "./main-dashboard/LessonRrequest"; // Import LessonRequests
import { Bell } from "lucide-react";
import { usePathname } from "next/navigation";

const DashboardHeader = () => {
  console.log("Component Rendered");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  let buttonText = "";
  let buttonColor = "";
  let ModalContent = null;

  if (pathname === "/teacher") {
    buttonText = "Schedule a Lesson";
    buttonColor = "bg-[#42ABD1] text-white";
    ModalContent = ScheduleALesson;
  } else if (pathname === "/student") {
    buttonText = "Lesson Requests";
    buttonColor = "bg-[#A3D154] text-white";
    ModalContent = LessonRequests;
  }

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Cast the target to an HTMLDivElement
    const target = e.target as HTMLDivElement;

    // Close modal if background is clicked
    if (target.id === "modal-overlay") {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      {/* Dialog Modal */}
      {isModalOpen && ModalContent && (
        <div
          id="modal-overlay"
          className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={handleBackgroundClick} // Close modal when background is clicked
        >
          <ModalContent onClose={() => setIsModalOpen(false)} />
        </div>
      )}

      <div className="flex justify-between items-center mt-3 w-full">
        <div className="text-xl lg:text-2xl ">
          Good Morning, <span className="font-bold">Samantha</span> 😃
        </div>
        <div className="flex items-center gap-4 ">
          {buttonText && (
            <button
              onClick={() => setIsModalOpen(true)}
              className={`${buttonColor} px-6 py-3 rounded-md`}
            >
              {buttonText}
            </button>
          )}
          <Bell className="text-gray-600" />
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
