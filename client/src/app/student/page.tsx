"use client";
import { Button } from "../components/admin-panel/ui/button";
import StudentNavbar from "./find-a-tutor/student-navbar";
import TutorReportViewButton from "../components/student/TutorReportViewButton";
import clsx from "clsx";
import Image from "next/image";
import RecordIcon from "../components/student/RecordIcon";
import MessageIcon from "../components/student/MessageIcon";
import Link from "next/link";


const getDateForWeek = (dayOffset) => {
  const today = new Date();
  const date = new Date(today.setDate(today.getDate() + dayOffset));
  return date.getDate();  // Return only the day of the month
};

const getFullDayName = (dayOffset) => {
  const today = new Date();
  const date = new Date(today.setDate(today.getDate() + dayOffset));
  return date.toLocaleString('en-US', { weekday: 'long' });  // Return the full day name (e.g., Monday)
};

const getMonthName = () => {
  const today = new Date();
  return today.toLocaleString('en-US', { month: 'long' });
};

export default function Home() {
  return (
    <div className="flex flex-col gap-5 p-5">
      <StudentNavbar
        showExtraButton={
          <Button
            color="button_primary"
            className="bg-secondary md:py-2 text-white"
          >
            Lesson Requests
          </Button>
        }
      />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <UpcomingLessons />
          </div>
          <BiologyLessonInfo />
        </div>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <CalendarSection />
          <TutorReportsSection />
        </div>
      </div>
    </div>
  );
}

const UpcomingLessons = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">
          <i className="fas fa-play text-secondary mr-2"></i>Upcoming Lessons
        </h3>
        <i className="fas fa-chevron-down text-gray-500"></i>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {["IGCSE", "IB", "National", "SAT"].map((level, idx) => (
          <LessonCard key={idx} level={level} />
        ))}
      </div>
    </div>
  );
};

const LessonCard = ({ level }: { level: string }) => {
  return (
    <div className="bg-[#f9f9f9] p-4 rounded-lg flex justify-between items-start">
      <div className="space-y-1">
        <p className="text-sm font-bold italic">Typography in UX/UI</p>
        <ul className="list-disc text-xs font-medium flex justify-between pl-4 text-[#7D8DA6]">
          <li>{level}</li>
          <li>10:00 AM</li>
        </ul>
      </div>
      <div className="flex flex-col justify-between items-center gap-1">
        <Link
          href={`/student/upcoming-lesson-details`}
          className="text-secondary font-medium text-[10px]"
        >
          Details
        </Link>
        <Button
          color="button_primary"
          className="bg-primary text-white w-full md:py-1 !rounded-lg !text-xs"
        >
          Join class
        </Button>
      </div>
    </div>
  );
};

// Reusable Component for Biology Lesson Info
const BiologyLessonInfo = () => {
  return (
    <div className="bg-[#f7f7f7] p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">Biology</h3>
        <p className="text-2xl font-semibold">02:30 PM</p>
      </div>
      <ul className="text-xs mt-2 text-[#666666]">
        <li>• Respiratory system</li>
        <li>• Digestive system</li>
      </ul>
      <p className="text-sm text-[#6E6E76] mt-4">
        Lorem Ipsum is a dummy text being used to show the description of the
        problem, student needs help with
      </p>
      <div className="flex items-center w-full justify-between mt-4 text-[#6E6E76] text-xs">
        <span className="flex items-center gap-2">
          <ClockIcon />2 hrs 45 min
        </span>
        <span className="flex items-center gap-2">
          <ClockIcon />
          03-20-2024
        </span>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex">
          <Image
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="John Doe"
            width={50}
            height={50}
            className="rounded-full mr-2"
          />
          <div>
            <p className="font-medium">John Doe</p>
            <p className="text-xs text-[#666]">@john_doe121</p>
          </div>
        </div>
        <button className="hover:opacity-75">
          <MessageIcon />
        </button>
      </div>
      <Button
        color="button_primary"
        className="mt-4 bg-secondary text-white w-full md:py-2.5 rounded-md"
      >
        <RecordIcon />
        Join the lesson
      </Button>
    </div>
  );
};

const CalendarSection = () => {
  return (
    <div className="bg-white rounded-lg lg:col-span-2 shadow-md overflow-hidden">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold">Weekly Calendar</h3>
    </div>

    <div className="grid grid-cols-7 text-center text-sm text-gray-500 mb-2">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, idx) => {
        const date = getDateForWeek(idx - new Date().getDay()); // Get the date for each day of the week
        const fullDayName = getFullDayName(idx - new Date().getDay()); // Get the full day name (e.g., Monday)
        return (
          <div key={idx} className="py-2">
            <p className="font-semibold text-sm">{date}</p>
            <p>{fullDayName}</p> {/* Display full day name */}
          </div>
        );
      })}
    </div>

    <div className="mt-4 grid grid-cols-7 gap-2">
      {/* Sunday as a large square blur card */}
      <div className="bg-opacity-50 bg-gray-300 p-4 rounded-lg shadow-md col-span-1 h-[300px]">
        <div className="h-full flex flex-col justify-center items-center">
          <p className="text-lg font-semibold">Sunday</p>
          <div className="mt-2 text-xs "></div>
        </div>
      </div>

        {/* Monday and Tuesday in the same block */}
        <div className="bg-opacity-50 bg-gray-300 p-4 rounded-lg shadow-md col-span-2 h-[300px]">
          <div className="h-full flex flex-col justify-center items-center">
            
            {/* Event for Monday */}
            <div className="mt-2 text-xs bg-opacity-60 p-2 rounded-lg" style={{ backgroundColor: "#a2d154" }}>
              <p className="font-semibold">Event: IGCSE Class (Monday)</p>
              <p className="text-sm">9 PM to 10 PM</p>
            </div>
            {/* Event for Tuesday */}
            <div className="mt-2 text-xs bg-opacity-60 p-2 rounded-lg" style={{ backgroundColor: "#a2d154" }}>
              <p className="font-semibold">Event: Webinar (Tuesday)</p>
              <p className="text-sm">9 AM to 10 AM</p>
            </div>
          </div>
        </div>

        {/* Empty columns for Wednesday and Thursday */}
        {["Wed", "Thu"].map((day, idx) => (
          <div key={idx} className="bg-opacity-50 bg-gray-300 p-4 rounded-lg shadow-md col-span-1 h-[300px]">
            <div className="h-full flex flex-col justify-center items-center">
            
            </div>
          </div>
        ))}

        {/* Friday with an event */}
        <div className="bg-opacity-50 bg-gray-300 p-4 rounded-lg shadow-md col-span-1 h-[300px]">
          <div className="h-full flex flex-col justify-center items-center">
            {/* <p className="text-lg font-semibold">Friday</p> */}
            {/* Event for Friday */}
            <div className="mt-2 text-xs bg-opacity-60 p-2 rounded-lg" style={{ backgroundColor: "#a2gh154" }}>
              <p className="font-semibold">Event: Team Meeting</p>
              <p className="text-sm">2 PM to 3 PM</p>
            </div>
          </div>
        </div>

        {/* Empty column for Saturday */}
        <div className="bg-opacity-50 bg-gray-300 p-4 rounded-lg shadow-md col-span-1 h-[300px]">
          <div className="h-full flex flex-col justify-center items-center">
            {/* <p className="text-lg font-semibold">Saturday</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom render function to show the event time and title
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

const TutorReportsSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 px-4 pt-4">Tutor Reports</h3>
      <div className="space-y-4">
        {TutorReports.map((tutor, idx) => (
          <TutorReportCard key={idx} idx={idx} tutor={tutor} /> // Added key prop
        ))}
      </div>
    </div>
  );
};

const TutorReportCard = ({
  tutor,
  idx,
}: {
  tutor: { name: string; role: string };
  idx: number;
}) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-between pb-4 px-4 rounded-lg",
        TutorReports.length - 1 !== idx ? "border-b border-slate" : ""
      )}
    >
      <div className="flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
          alt={tutor.name}
          width={64}
          height={64}
          className="rounded-xl object-cover aspect-square"
        />
        <div className="ml-4 text-sm">
          <p className="font-medium">{tutor.name}</p>
          <p className="font-bold text-gray-500">{tutor.role}</p>
        </div>
      </div>
      <TutorReportViewButton />
    </div>
  );
};

const ClockIcon = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.33524 0C3.30086 0 0 3.30086 0 7.33524C0 11.3696 3.30086 14.6705 7.33524 14.6705C11.3696 14.6705 14.6705 11.3696 14.6705 7.33524C14.6705 3.30086 11.3696 0 7.33524 0ZM8.123 11.0507H7.08551V8.45266H8.123V11.0507ZM7.08551 5.07068H8.123V7.33524H7.08551V5.07068Z"
        fill="#A3A3A3"
      />
    </svg>
  );
};

const TutorReports = [
  { name: "John Doe", role: "Math Tutor" },
  { name: "Jane Smith", role: "Science Tutor" },
  { name: "Sam Wilson", role: "English Tutor" },
];
