"use client";
import StudentNavbar from "./student-navbar";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "../../components/admin-panel/ui/dropdown";
import { useRef, useState } from "react";
// @ts-expect-error - No type definitions available
import RangeSlider from "react-range-slider-input";
import TeacherCard from "./TeacherCard";

export default function Home() {
  const [values, setValues] = useState(["0", "2000"]);
  return (
    <div className=" flex flex-col gap-5 p-5">
      <StudentNavbar />
      {/* Filters */}
      <div className=" flex flex-col gap-5">
        <div className=" flex items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className=" pl-4 border border-admin_button  w-full rounded-xl h-[50px]"
          />
          <button className="bg-admin_button flex items-center justify-center px-4 rounded-xl h-[50px]">
            <MagnifyingGlassIcon className="h-5 text-white" />
          </button>
        </div>
        <div className=" flex items-center flex-wrap gap-4 w-full">
          {filters.map((filter) => {
            switch (filter.type) {
              case "dropdown":
                return (
                  <Dropdown key={filter.label}>
                    <DropdownButton
                      outline
                      className=" sm:px-3 text-gray-500 min-h-[40px] flex-1 flex justify-between rounded-md text-xs md:text-base !text-[15px] !font-normal"
                    >
                      {filter.label} <DownArrowIcon />
                    </DropdownButton>
                    <Menus />
                  </Dropdown>
                );
              case "range":
                return (
                  <RangeSelector
                    values={values}
                    setValues={(values) => setValues(values)}
                    key={filter.label}
                  />
                );
              default:
                return null;
            }
          })}

          <button className="bg-admin_button text-white min-h-[40px] px-5 rounded-md">
            Apply
          </button>
        </div>
      </div>
      {teachersInfo.map((teacher, index) => (
        <TeacherCard key={index} {...teacher} />
      ))}
    </div>
  );
}

const Menus = () => {
  return (
    <DropdownMenu>
      <DropdownItem href="/users/1">View</DropdownItem>
      <DropdownItem href="/users/1/edit">Edit</DropdownItem>
      <DropdownItem onClick={() => { }}>Delete</DropdownItem>
    </DropdownMenu>
  );
};

const DownArrowIcon = () => {
  return (
    <svg
      width="19"
      height="12"
      viewBox="0 0 19 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0.118576L9.5 11.1186L19 0.118576H0Z" fill="#66797C" />
    </svg>
  );
};

const RangeSelector = ({
  values,
  setValues,
}: {
  values: string[];
  setValues: (values: string[]) => void;
}) => {
  const rangeRef = useRef(null);

  const handleRange = (values: number[]) => {
    const val = values?.map((item) =>
      typeof item === "number" ? String(item) : item
    );

    setValues(val as string[]);
  };

  return (
    <div className="flex flex-col min-w-[150px] gap-2">
      <p className=" flex justify-between">
        <span className="text-xs">Price:</span>
        <span className="text-xs font-bold">
          ${values[0]} - ${values[1]}
        </span>
      </p>
      <RangeSlider
        min={1}
        max={2000}
        value={values}
        ref={rangeRef}
        onInput={(e: number[]) => handleRange(e)}
      />
    </div>
  );
};

const filters = [
  {
    type: "dropdown",
    label: "Curriculum",
  },
  {
    type: "dropdown",
    label: "Level",
  },
  {
    type: "dropdown",
    label: "Date",
  },
  {
    type: "dropdown",
    label: "Language",
  },
  {
    type: "range",
    label: "Availability",
  },
];

const teachersInfo = [
  {
    name: "Alexson David",
    subject: "English Tutor",
    image:
      "https://images.unsplash.com/photo-1727093267255-e9b31b2b35ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    testimonial: {
      title: "Extremely Amazing and professional tutor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin sem in nibh dignissim pretium. Sed tristique viverra semper. Quisque luctus vestibulum eros, a pellentesque justo tempor quis. Sed vehicula maximus gravida. Phasellus ut congue ligula. Proin eu efficitur neque, non bibendum massa. Etiam eget purus non lectus consectetur auctor sit amet ac lectus. Aenean tincidunt erat ac fringilla malesuada. -Rebecca",
    },
    rate: "145/hr",
    totalHours: "2000",
    responseTime: "25 minutes",
    rating: 4,
    avgRiview: "4.5",
    totalRating: "2000",
  },
];
