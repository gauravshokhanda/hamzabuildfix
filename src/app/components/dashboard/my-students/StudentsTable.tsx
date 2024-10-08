"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import AddNotesModal from "./AddNotesModal";
import CreateProgressReportModal from "./CreateProgressReportModal";

const StudentsTable = () => {
  const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);
  const [isProgressModalOpen, setIsProgressModalOpen] = useState(false);

  const students = [
    { name: "Daniel Berraldi", subject: "stats" },
    { name: "Olivia James", subject: "Math" },
    { name: "Michael Trippier", subject: "Eng" },
    { name: "Michael Trippier", subject: "Comp" },
    { name: "Michael Trippier", subject: "Comp" },
    { name: "Michael Trippier", subject: "Comp" },
    { name: "Justinus Bieber", subject: "Comp" },
  ];

  return (
    <>
      {isNotesModalOpen && (
        <AddNotesModal onClose={() => setIsNotesModalOpen(false)} />
      )}
      {isProgressModalOpen && (
        <CreateProgressReportModal
          onClose={() => setIsProgressModalOpen(false)}
        />
      )}

      <h2 className="text-2xl mt-16 mb-5">All Students</h2>

      <div className="overflow-x-auto shadow-xl p-6">
        <table className="w-full table-fixed">
          <colgroup>
            <col className="w-[20%]" /> {/* Student column */}
            <col className="w-[20%]" /> {/* Actions column */}
            <col className="w-[10%]" /> {/* Date column */}
            <col className="w-[10%]" /> {/* Time column */}
            <col className="w-[10%]" /> {/* Duration column */}
            <col className="w-[10%]" /> {/* Subject column */}
            <col className="w-[25%]" /> {/* Notes column */}
          </colgroup>
          <thead>
            <tr className="bg-[#F7F7F7]">
              <th className="py-2 px-4 text-left font-medium text-[#3F3F4480] rounded-l-full">
                Student
              </th>
              <th className="py-2 px-4 text-left font-medium text-[#3F3F4480]">
                Actions
              </th>
              <th className="py-2 px-4 text-left font-medium text-[#3F3F4480]">
                Date
              </th>
              <th className="py-2 px-4 text-left font-medium text-[#3F3F4480]">
                Time
              </th>
              <th className="py-2 px-4 text-left font-medium text-[#3F3F4480]">
                Duration
              </th>
              <th className="py-2 px-4 text-left font-medium text-[#3F3F4480]">
                Subject
              </th>
              <th className="py-2 px-4 text-left font-medium text-[#3F3F4480] rounded-r-full">
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-2 px-4">
                  <div className="flex items-center">
                    <Image
                      src={logo}
                      width={32}
                      height={32}
                      className="w-8 h-8 mr-3 rounded-full"
                      alt={student.name}
                    />
                    <span className="truncate">{student.name}</span>
                  </div>
                </td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => setIsNotesModalOpen(true)}
                    className="border border-[#42ABD1] text-[#42ABD1] px-3 py-1 rounded-md text-sm mr-2 mb-1"
                  >
                    Add Notes
                  </button>
                  <button
                    onClick={() => setIsProgressModalOpen(true)}
                    className="border border-[#42ABD1] text-[#42ABD1] px-3 py-1 rounded-md text-sm"
                  >
                    Reports
                  </button>
                </td>
                <td className="py-2 px-4">12-03-24</td>
                <td className="py-2 px-4">12:23 pm</td>
                <td className="py-2 px-4">3 hrs 12 min</td>
                <td className="py-2 px-4">{student.subject}</td>
                <td className="py-2 px-4 text-gray-500">
                  <div className="break-words">
                    Lorem ipsum dolor sit amet is a dummy text used in printing
                    industry...
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentsTable;
