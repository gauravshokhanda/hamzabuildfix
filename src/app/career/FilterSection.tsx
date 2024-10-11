import React from "react";
import Image from "next/image";
import searchIcon from "../public/images/landing-page/searchIcon.png";
import bottomArrow from "../public/images/landing-page/bottomArrow.png";

const FilterSection: React.FC = () => {
  return (
    <div className="mt-10 flex flex-col md:flex-row w-full justify-between gap-4 ">
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
          <option>Category</option>
          {/* Add more options as needed */}
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
          <option>Location</option>
          {/* Add more options as needed */}
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
          <option>Job type</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <button className="flex justify-center items-center px-6 py-2 bg-primary text-white rounded-lg w-full md:w-auto">
        <Image src={searchIcon} alt="Search" width={24} height={24} />
      </button>
    </div>
  );
};

export default FilterSection;
