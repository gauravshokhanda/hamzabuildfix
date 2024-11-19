import React from "react";
import Messages from "./messages";
import Chatbox from "./chatbox";
import DashboardHeader from "src/app/components/dashboard/DashboardHeader";

const page = () => {
  return (
    <>
    <DashboardHeader/>
     <div className="md:flex gap-[16px] px-[20px] md:px-[30px] mt-[30px] pb-[30px] md:pb-[50px]">
      <div className="md:w-[376px] md:flex-shrink-0">
        <Messages />
      </div>

      <div className="flex-1">
        <Chatbox />
      </div>
    </div>
    </>
   
  );
};

export default page;
