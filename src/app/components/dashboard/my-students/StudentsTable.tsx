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

      <div className="overflow-x-auto shadow-xl p-2 xl:p-6">
        <table className="w-full table-auto xl:table-fixed">
          <thead className="hidden xl:table-header-group">
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
              <tr
                key={index}
                className="border-b border-gray-200 xl:table-row flex flex-col mb-4 xl:mb-0"
              >
                <td className="py-2 px-4 flex items-center xl:table-cell">
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
                <td className="py-2 px-4 xl:table-cell">
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
                <td className="py-2 px-4 xl:table-cell">
                  <span className="xl:hidden font-medium mr-2">Date:</span>
                  12-03-24
                </td>
                <td className="py-2 px-4 xl:table-cell">
                  <span className="xl:hidden font-medium mr-2">Time:</span>
                  12:23 pm
                </td>
                <td className="py-2 px-4 xl:table-cell">
                  <span className="xl:hidden font-medium mr-2">Duration:</span>3
                  hrs 12 min
                </td>
                <td className="py-2 px-4 xl:table-cell">
                  <span className="xl:hidden font-medium mr-2">Subject:</span>
                  {student.subject}
                </td>
                <td className="py-2 px-4 text-gray-500 xl:table-cell">
                  <span className="xl:hidden font-medium mr-2">Notes:</span>
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
