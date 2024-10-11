import Image from "next/image";
import React from "react";

import careerHero from "../public/images/career/career-home.svg";

import career1 from "../public/images/career/career1.svg";
import career2 from "../public/images/career/career2.svg";
import career3 from "../public/images/career/career3.svg";

export default function Hero() {
  return (
    <div className=" bg-background_blue px-4 pt-4 pb-20">
      <div className="relative py-36 md:py-40 max-w-screen-xl m-auto rounded-xl overflow-hidden">
        <Image
          className="absolute left-0 top-0 w-full h-full object-cover"
          src={careerHero}
          alt="hero career"
          priority
        />
        <div className=" absolute inset-0 bg-[#141c28] opacity-60"></div>

        <div className="relative px-4 max-w-5xl m-auto flex items-center flex-col md:flex-row gap-20 justify-between">
          <div className=" text-white">
            <h1 className=" -tracking-[1px] text-4xl md:text-5xl font-semibold ">
              Career : Join our <br /> team to enlighten
            </h1>
            <p className=" max-w-xs text-sm opacity-80 mt-6">
              Lorem ipsum dolor sit amet consectetur. Ornare quis cras massa
              nisi orci.
            </p>
          </div>

          <div className=" grid grid-cols-2 gap-4">
            <div className=" max-w-56 row-span-2 flex items-center">
              <Image className=" rounded-md" src={career1} alt="career1" />
            </div>
            <div className="max-w-56">
              <Image className=" rounded-md" src={career2} alt="career2" />
            </div>
            <div className="  max-w-56">
              <Image className=" rounded-md" src={career3} alt="career3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
