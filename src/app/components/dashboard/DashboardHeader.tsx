"use client";

import React, { useState } from "react";
import ScheduleALesson from "./main-dashboard/ScheduleALesson";
import { Bell } from "lucide-react";
import { usePathname } from "next/navigation";

const DashboardHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {isModalOpen && <ScheduleALesson onClose={() => setIsModalOpen(false)} />}

      <div className="flex justify-between items-center mb-6">
        <div className="text-2xl">
          Good Morning, <span className="font-bold">Samantha</span> 😃
        </div>
        <div className="flex items-center gap-4">
          {!pathname.includes("/dashboard/my-students") && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#42ABD1] text-white px-6 py-3 rounded-md mr-3"
            >
              Schedule a Lesson
            </button>
          )}
          <Bell className="text-gray-600" />
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
