import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
export default function Pagination() {
  const btn_style =
    "p-1 w-10 flex items-center justify-center border-[2px] border-[#eae9f2] rounded-md";
  return (
    <div className=" font-semibold text-xl text-header flex gap-4 justify-center mb-10">
      <button className={btn_style}>
        <GrFormPrevious />
      </button>
      <span className={btn_style}>1</span>
      <span className={btn_style}>2</span>
      <span className={btn_style}>3</span>
      <span className={btn_style}>...</span>
      <span className={btn_style}>9</span>
      <button className={btn_style}>
        <MdNavigateNext />
      </button>
    </div>
  );
}
