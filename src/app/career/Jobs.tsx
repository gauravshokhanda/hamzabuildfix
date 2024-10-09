import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import Link from "next/link";
interface obProp {
  location: string;
  name: string;
  by: string;
  date: string;
}

const ob_test = {
  location: "New Yourk, USA",
  name: "Job title here",
  by: "Chorocon Ltd.",
  date: "1 Week ago",
};
export default function Jobs() {
  const jobs: Array<obProp> = Array.from({ length: 6 }, () => ({ ...ob_test }));

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
      {jobs.map(({ location, name, by, date }, idx) => (
        <div
          className=" py-5 px-7 border border-[#ededed] rounded-md bg-white"
          key={idx}
        >
          <div className=" flex text-header opacity-70 text-xs font-semibold items-center gap-1 mb-4">
            <IoLocationSharp />
            <p>{location}</p>
          </div>

          <p className=" text-header font-semibold  text-xl mb-1">{name}</p>
          <p className=" text-xs font-semibold text-header opacity-50 flex">
            by
            <span className=" text-orange-600 block ml-1">{by}</span>
          </p>
          <div className=" flex mt-8 items-center justify-between">
            <div className=" flex text-header opacity-70 text-xs font-semibold items-center gap-1">
              <FaCalendar />
              {date}
            </div>
            <Link
              href="/career-apply"
              className=" bg-[#20bfa9] px-4 text-white text-sm py-2 rounded-md"
            >
              Apply Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
