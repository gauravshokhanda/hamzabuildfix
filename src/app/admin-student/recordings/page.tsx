"use client";
import { Text } from "@/app/components/admin-panel/ui/text";
import { Button } from "@/app/components/admin-panel/ui/button";
import Image from "next/image";
import StudentNavbar from "@/app/components/admin-panel/ui/student-navbar";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 p-5">
      <StudentNavbar />
      <div className="shadow-md p-6">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-2xl">Biology</h3>
            <Button
              color="button_primary"
              className="bg-admin_button text-white md:py-2.5"
            >
              <RecordIcon />
              Join the lesson
            </Button>
          </div>
          <ul className="list-disc pl-5 text-[#666666]">
            <li>Respiratory system</li>
            <li>Digestive system</li>
          </ul>
          <p className="text-[#6E6E76]">
            Lorem Ipsum is a dummy text being used to show the description of
            the problem, student needs help with
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            {TimeInfos.map((timeInfo, index) => (
              <div key={index}> {/* Added key prop */}
                <div className="flex items-center gap-1.5">
                  <ClockIcon />
                  <Text>{timeInfo}</Text>
                </div>
              </div>
            ))}
          </div>
          <TeacherInfo
            avatar="https://images.unsplash.com/photo-1727093267255-e9b31b2b35ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D"
            teacherName="John Doe"
            teacherUsername="@john_doe121"
          />
        </div>
      </div>
    </div>
  );
}

const TimeInfos = ["Monday, 03-20-2024", "2 hrs 45 min", "02:30 PM"];

export const RecordIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_12214_5195)">
        <path
          d="M16 4C16.552 4 17 4.448 17 5V9.2L22.213 5.55C22.439 5.392 22.751 5.447 22.91 5.674C22.968 5.758 23 5.858 23 5.96V18.04C23 18.316 22.776 18.54 22.5 18.54C22.397 18.54 22.297 18.508 22.213 18.45L17 14.8V19C17 19.552 16.552 20 16 20H2C1.448 20 1 19.552 1 19V5C1 4.448 1.448 4 2 4H16ZM15 6H3V18H15V6ZM8 8H10V11H13V13H9.999L10 16H8L7.999 13H5V11H8V8ZM21 8.841L17 11.641V12.359L21 15.159V8.84V8.841Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_12214_5195">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const ClockIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 0C4.05 0 0 4.05 0 9C0 13.95 4.05 18 9 18C13.95 18 18 13.95 18 9C18 4.05 13.95 0 9 0ZM9 2.25C12.735 2.25 15.75 5.265 15.75 9C15.75 12.735 12.735 15.75 9 15.75C5.265 15.75 2.25 12.735 2.25 9C2.25 5.265 5.265 2.25 9 2.25ZM7.875 4.5V9.495L8.235 9.7875L9.36 10.9125L10.125 11.7675L11.745 10.1475L10.89 9.3825L10.125 8.6175V4.545H7.875V4.5Z"
        fill="#A3D154"
      />
    </svg>
  );
};

const TeacherInfo = ({
  teacherName = "John Doe",
  teacherUsername = "@john_doe121",
  avatar = "https://images.unsplash.com/photo-1727093267255-e9b31b2b35ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
}) => {
  return (
    <div className="flex items-center gap-3 w-full justify-center md:justify-start pl-3 md:pl-0">
      <Image
        width={40}
        height={40}
        alt="Avatar"
        src={avatar}
        className="w-10 h-10 rounded-full shrink-0"
      />
      <div>
        <p className="text-[#555555] font-normal">{teacherName}</p>
        <p className="text-sm font-medium text-[#344054]">
          {teacherUsername}
        </p>
      </div>
      <button className="ml-8">
        <MessageIcon />
      </button>
    </div>
  );
};

export const MessageIcon = () => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 7H10M5 10.5H13M5 16.5V18.8355C5 19.3684 5 19.6348 5.10923 19.7716C5.20422 19.8906 5.34827 19.9599 5.50054 19.9597C5.67563 19.9595 5.88367 19.7931 6.29976 19.4602L8.68521 17.5518C9.17252 17.162 9.41617 16.9671 9.68749 16.8285C9.9282 16.7055 10.1844 16.6156 10.4492 16.5613C10.7477 16.5 11.0597 16.5 11.6837 16.5H14.2C15.8802 16.5 16.7202 16.5 17.362 16.173C17.9265 15.8854 18.3854 15.4265 18.673 14.862C19 14.2202 19 13.3802 19 11.7V6.3C19 4.61984 19 3.77976 18.673 3.13803C18.3854 2.57354 17.9265 2.1146 17.362 1.82698C16.7202 1.5 15.8802 1.5 14.2 1.5H5.8C4.11984 1.5 3.27976 1.5 2.63803 1.82698C2.07354 2.1146 1.6146 2.57354 1.327 3.13803C1 3.77976 1 4.61984 1 6.3V11.7C1 13.3802 1 14.2202 1.327 14.862C1.6146 15.4265 2.07354 15.8854 2.63803 16.173C3.27976 16.5 4.11984 16.5 5.8 16.5H5V16.5Z"
      stroke="#A3D154"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
