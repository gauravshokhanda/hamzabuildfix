"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "../../components/admin-panel/ui/dropdown";
import { useRef, useState } from "react";
import TeacherCard from "../../components/student/TeacherCard";
import { Range } from "react-range";
import DashboardHeader from "src/app/components/dashboard/DashboardHeader";
import Pagination from "src/app/components/Pagination";

export default function Home() {
  const [values, setValues] = useState(["0", "2000"]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate total pages based on teachersInfo length
  const totalPages = Math.ceil(teachersInfo.length / itemsPerPage);

  // Calculate the displayed teachers based on current page
  const displayedTeachers = teachersInfo.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

    // Handlers for pagination
    const handlePrevious = () => {
      if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
    };
  
    const handleNext = () => {
      if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1);
    };
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  return (
    <div className=" flex flex-col gap-5 p-5">
      <DashboardHeader/>
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
      {displayedTeachers.map((teacher, index) => (
        <TeacherCard key={index} {...teacher} />
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onPageChange={handlePageChange}
      />
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
  const [priceRange, setPriceRange] = useState([0, 2000]);
  return (
    <div className="flex flex-col min-w-[150px] gap-2">
      <p className=" flex justify-between">
        <span className="text-xs">Price:</span>
        <span className="text-xs font-bold">
          ${values[0]} - ${values[1]}
        </span>
      </p>
      <Range
  values={priceRange}
  step={10}
  min={0}
  max={2000}
  onChange={(values: React.SetStateAction<number[]>) => setPriceRange(values)}
  renderTrack={({ props, children }) => {
    // Calculate the percentage positions of the left and right thumbs
    const [min, max] = priceRange;
    const left = ((min - 0) / (2000 - 0)) * 100;
    const right = ((max - 0) / (2000 - 0)) * 100;

    return (
      <div
        {...props}
        style={{
          ...props.style,
          height: "6px",
          width: "100%",
          background: `linear-gradient(to right, #ddd ${left}%, #00ADEF ${left}%, #00ADEF ${right}%, #ddd ${right}%)`,
        }}
      >
        {children}
      </div>
    );
  }}
  renderThumb={({ props, index }) => (
    <div
      {...props}
      style={{
        ...props.style,
        height: "20px",
        width: "20px",
        borderRadius: "50%",
        backgroundColor: "#00ADEF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    ></div>
  )}
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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    testimonial: {
      title: "Extremely Amazing and professional tutor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin sem in nibh dignissim pretium. Sed tristique viverra semper. -Rebecca",
    },
    rate: "145/hr",
    totalHours: "2000",
    responseTime: "25 minutes",
    rating: 4,
    avgReview: "4.5",
    totalRating: "2000",
  },
  {
    name: "Sophia Turner",
    subject: "Mathematics Tutor",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleGFtcGxlfGV8fHx8fHw%3D",
    description:
      "Passionate about helping students excel in mathematics, from algebra to calculus.",
    testimonial: {
      title: "Incredible depth of knowledge",
      description: "Sophia is highly knowledgeable and patient with every question. -John",
    },
    rate: "120/hr",
    totalHours: "1500",
    responseTime: "30 minutes",
    rating: 5,
    avgReview: "4.8",
    totalRating: "1800",
  },
  {
    name: "Olivia Martinez",
    subject: "Spanish Tutor",
    image:
      "https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJldHR5JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Native Spanish speaker with experience teaching conversational and academic Spanish.",
    testimonial: {
      title: "Very interactive lessons",
      description: "Olivia makes learning Spanish fun and interactive. -Sarah",
    },
    rate: "115/hr",
    totalHours: "1400",
    responseTime: "35 minutes",
    rating: 4,
    avgReview: "4.6",
    totalRating: "1700",
  },
  {
    name: "James Carter",
    subject: "Physics Tutor",
    image:
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleGFtcGxlfGV8fHx8fHw%3D",
    description:
      "Physics tutor specializing in high school and college-level mechanics and electromagnetism.",
    testimonial: {
      title: "Excellent explanations",
      description: "James breaks down complex concepts so they’re easy to understand. -Emma",
    },
    rate: "130/hr",
    totalHours: "1600",
    responseTime: "20 minutes",
    rating: 5,
    avgReview: "4.9",
    totalRating: "1900",
  },
  {
    name: "Emily Chen",
    subject: "Biology Tutor",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleGFtcGxlfGV8fHx8fHw%3D",
    description:
      "Experienced in teaching cell biology, genetics, and ecology to high school students.",
    testimonial: {
      title: "Highly engaging",
      description: "Emily makes biology fascinating and keeps students engaged. -David",
    },
    rate: "125/hr",
    totalHours: "1100",
    responseTime: "28 minutes",
    rating: 4,
    avgReview: "4.7",
    totalRating: "1500",
  },
  {
    name: "Michael Zhang",
    subject: "Chemistry Tutor",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleGFtcGxlfGV8fHx8fHw%3D",
    description:
      "Chemistry tutor with a focus on organic and inorganic chemistry for college students.",
    testimonial: {
      title: "Clear and concise teaching style",
      description: "Michael’s approach is structured and helps clarify difficult topics. -Alice",
    },
    rate: "140/hr",
    totalHours: "1300",
    responseTime: "22 minutes",
    rating: 5,
    avgReview: "4.9",
    totalRating: "1600",
  },
  {
    name: "Rachel Green",
    subject: "History Tutor",
    image:
      "https://images.unsplash.com/photo-1545992332-0a062dd896a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleGFtcGxlfGV8fHx8fHw%3D",
    description:
      "Specializes in European and World History for high school and college students.",
    testimonial: {
      title: "Brings history to life",
      description: "Rachel’s passion for history is contagious! -Liam",
    },
    rate: "110/hr",
    totalHours: "1200",
    responseTime: "40 minutes",
    rating: 4,
    avgReview: "4.5",
    totalRating: "1400",
  },
  {
    name: "Lucas Brown",
    subject: "Economics Tutor",
    image:
      "https://images.unsplash.com/photo-1573495628364-357d938d7bd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleGFtcGxlfGV8fHx8fHw%3D",
    description:
      "Experienced in teaching micro and macroeconomics for college-level students.",
    testimonial: {
      title: "Highly analytical and insightful",
      description: "Lucas helped me understand complex economic models. -Nina",
    },
    rate: "135/hr",
    totalHours: "1700",
    responseTime: "18 minutes",
    rating: 5,
    avgReview: "4.8",
    totalRating: "1800",
  }
];


