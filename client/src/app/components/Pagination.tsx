import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

export default function Pagination({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  onPageChange, // Add onPageChange prop to handle individual page number clicks
}) {
  const btn_style =
    "p-1 w-10 flex items-center justify-center border-[2px] border-[#eae9f2] rounded-md";

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="font-semibold text-xl text-header flex gap-4 justify-center mb-10">
      <button
        className={btn_style}
        onClick={onPrevious}
        disabled={currentPage === 1}
      >
        <GrFormPrevious />
      </button>

      {/* Render the page numbers */}
      {pageNumbers.map((pageNumber) => (
        <span
          key={pageNumber}
          className={`${btn_style} ${currentPage === pageNumber ? 'bg-green-200 text-green-800' : 'bg-gray-100 text-gray-600'}`}
          onClick={() => onPageChange(pageNumber)} // Use onPageChange to handle page number click
        >
          {pageNumber}
        </span>
      ))}

      <button
        className={btn_style}
        onClick={onNext}
        disabled={currentPage === totalPages}
      >
        <MdNavigateNext />
      </button>
    </div>
  );
}
