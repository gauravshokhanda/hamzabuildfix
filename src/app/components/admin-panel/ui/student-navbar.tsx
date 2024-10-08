import React from "react";

function StudentNavbar({ showExtraButton }: { showExtraButton?: JSX.Element }) {
  return (
    <div className=" flex justify-between w-full mt-5 flex-wrap gap-3">
      <h2 className=" text-2xl">
        Good Morning, <strong>Ansthasia 😄</strong>
      </h2>
      <div className=" flex items-center gap-5 flex-wrap justify-center">
        {showExtraButton}
        <div className=" relative ">
          <Notification />
          <span className=" w-2.5 h-2.5 bg-red-600 absolute top-0 right-0 rounded-full"></span>
        </div>
      </div>
    </div>
  );
}

export default StudentNavbar;

const Notification = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_12214_5168)">
        <path
          d="M20 17H22V19H2V17H4V10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10V17ZM18 17V10C18 8.4087 17.3679 6.88258 16.2426 5.75736C15.1174 4.63214 13.5913 4 12 4C10.4087 4 8.88258 4.63214 7.75736 5.75736C6.63214 6.88258 6 8.4087 6 10V17H18ZM9 21H15V23H9V21Z"
          fill="#3F3F44"
        />
      </g>
      <defs>
        <clipPath id="clip0_12214_5168">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
