import React, { useState } from "react";
import { Button } from "../ui/button";
import TutorReportViewModal from "./TutorReportViewModal.tsx";

function TutorReportViewButton() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Button
        onClick={openModal}
        color="button_primary"
        className="bg-primary text-white sm:py-2 !px-3 !rounded-md"
      >
        View
      </Button>
      {isOpen && (
        <div className="fixed top-0 right-0 w-full h-screen bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white w-full relative max-w-[792px] mx-auto md:mt-10 md:rounded-2xl">
            <TutorReportViewModal />
            <button
              onClick={closeModal}
              className="text-black py-2 px-4 rounded-md mt-0 absolute right-2 top-2"
            >
              {CircleIcon}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default TutorReportViewButton;

const CircleIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);
