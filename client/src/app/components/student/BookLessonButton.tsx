import React, { useEffect, useState, useRef } from "react";
import { Button } from "../admin-panel/ui/button";
import BookLessonModal from "./BookLessonModal";

function BookLessonButton() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // Close modal if clicked outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Button to open the modal */}
      <Button
        onClick={openModal}
        color="button_primary"
        className="bg-primary text-white sm:py-2 px-4 w-full rounded-md"
      >
        Book a Lesson
      </Button>

      {/* Modal with backdrop */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-full h-screen bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center">
          {/* Background overlay with blur */}
          <div className="absolute inset-0 bg-black opacity-60 backdrop-blur-md"></div>

          {/* Modal content */}
          <div
            ref={modalRef}
            className="bg-white w-full relative max-w-[792px] mx-auto shadow-xl rounded-lg p-6"
          >
            {/* Book lesson modal content */}
            <BookLessonModal handleClose={closeModal} />

            {/* Close button */}
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

export default BookLessonButton;

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
