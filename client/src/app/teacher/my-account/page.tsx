import React from "react";
import ProfileInfo from "./profile-info";
import { ChangePassword } from "../../components/teacher/ChangePassword";

const page = () => {
  return (
    <div className="md:flex gap-[16px]">
      <div className="md:w-[calc(100%_-_346px)]">
        <ProfileInfo />
      </div>
      <ChangePassword />
    </div>
  );
};

export default page;
