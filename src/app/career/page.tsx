import React from "react";
import Hero from "./Hero";
import Apply from "./Apply";
import Jobs from "./Jobs";
import Pagination from "../components/Pagination";

export default function CareerPage() {
  return (
    <div>
      <Hero />
      <div className=" mt-20 bg-background_blue px-4 md:px-10 py-20 max-w-screen-xl m-auto mb-10">
        <div className=" max-w-5xl m-auto">
          <Apply />
          <Jobs />
        </div>
      </div>
      <Pagination />
    </div>
  );
}
