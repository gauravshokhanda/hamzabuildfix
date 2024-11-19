import React from "react";
import Recordings from "./recordings";
import DashboardHeader from "src/app/components/dashboard/DashboardHeader";

const page = () => {
  return (
    <div>
        <DashboardHeader />
      <Recordings />
    </div>
  );
};

export default page;
