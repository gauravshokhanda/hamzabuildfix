import React from "react";
import Heading from "../components/Heading";

import FilterSection from "./FilterSection";

export default function Apply() {
  return (
    <div>
      <div className=" flex gap-4 flex-col md:flex-row md:items-center justify-between  ">
        <div className="max-w-xs md:max-w-xl">
          <Heading
            title="Best gateway for All-in-one"
            subtitle="Check our featured jobs from popular companies. Start applying now. "
          />
        </div>

        <button className="  bg-primary text-white px-10 py-3 rounded-md">
          Sign up now
        </button>
      </div>

      <FilterSection />
    </div>
  );
}
