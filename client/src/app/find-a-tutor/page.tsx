import Image from "next/image";
import React from "react";
import searchIcon from "../public/images/landing-page/searchIcon.png";
import bottomArrow from "../public/images/landing-page/bottomArrow.png";
import TutorCard from "../components/TutorCard";
import tutors from "../../lib/tutors_details.json";
import Pagination from "../components/Pagination";

export default function FindATutor() {
  return (
    <div className="p-12 flex gap-16">
      <div className="w-1/5 flex gap-4 flex-col">
        <div className="px-4">
          <h1 className="text-xl font-bold my-2">Filter By Price</h1>
          <p>Price $0 - $2000</p>
          <input
            type="range"
            min="1"
            max="100"
            value="100"
            accept="images/*"
            className="w-full accent-[#00ADEF] bg-blue-500"
          />
        </div>
        <div className="px-4">
          <h1 className="text-xl font-bold my-2">Language Spoken</h1>
          <div className="flex gap-4 items-center mt-1">
            <input type="checkbox" className="w-4 h-4 rounded-md" />
            English
          </div>
          <div className="flex gap-4 items-center mt-2">
            <input type="checkbox" className="w-4 h-4 rounded-md" />
            Arabic
          </div>
        </div>
        <div className="px-4">
          <h1 className="text-xl font-bold my-2">Select Date</h1>
          <p className="flex justify-center">October 2024</p>
          <div className="flex gap-2 my-3">
            <div className="bg-[#eaffc6] w-10 flex justify-center items-center text-center rounded-md p-2">
              Sat 13
            </div>
            <div className="bg-[#e1fcb3] w-10 flex justify-center items-center text-center rounded-md p-2">
              Sat 13
            </div>
            <div className="bg-[#e1fcb3] w-10 flex justify-center items-center text-center rounded-md p-2">
              Sat 13
            </div>
            <div className="bg-[#e1fcb3] w-10 flex justify-center items-center text-center rounded-md p-2">
              Sat 13
            </div>
            <div className="bg-[#e1fcb3] w-10 flex justify-center items-center text-center rounded-md p-2">
              Sat 13
            </div>
            <div className="bg-[#e1fcb3] w-10 flex justify-center items-center text-center rounded-md p-2">
              Sat 13
            </div>
            <div className="bg-[#e1fcb3] w-10 flex justify-center items-center text-center rounded-md p-2">
              Sat 13
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/5">
        <div className="mt-4 flex flex-col md:flex-row md:space-x-4 w-full space-y-4 md:space-y-0">
          <div className="relative w-full md:w-1/4">
            <select
              className="border border-gray-300 focus:border-primary focus:outline-none rounded-lg px-4 py-2 w-full appearance-none bg-white text-left pr-10"
              style={{
                backgroundImage: `url(${bottomArrow.src})`,
                backgroundSize: "16px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 10px center",
              }}
            >
              <option>Curriculum</option>
            </select>
          </div>
          <div className="relative w-full md:w-1/4">
            <select
              className="border border-gray-300 focus:border-primary focus:outline-none rounded-lg px-4 py-2 w-full appearance-none bg-white text-left pr-10"
              style={{
                backgroundImage: `url(${bottomArrow.src})`,
                backgroundSize: "16px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 10px center",
              }}
            >
              <option>Level</option>
            </select>
          </div>
          <div className="relative w-full md:flex-1">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:border-primary focus:outline-none"
            />
          </div>
          <button className="flex justify-center items-center px-6 py-2 bg-primary text-white rounded-lg w-full md:w-auto">
            <Image src={searchIcon} alt="Search" width={24} height={24} />
          </button>
        </div>

        {tutors.tutors.map((tutor, index) => (
          <TutorCard key={index} tutor={tutor} />
        ))}

       <div className="mt-6">
       <Pagination />
       </div>
      </div>
    </div>
  );
}
