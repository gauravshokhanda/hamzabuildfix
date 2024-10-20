import React from "react";
import { ChangePassword } from "../../components/teacher-panel/ChangePassword/ChangePassword";
import Settings from "./settings";

const page = () => {
  return (
    <div className="md:flex gap-[16px]">
      <div className="md:w-[calc(100%_-_346px)]">
        <Settings />
      </div>
      <ChangePassword />
    </div>
  );
};

export default page;
