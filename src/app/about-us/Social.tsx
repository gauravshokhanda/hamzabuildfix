import React from "react";

// icons

import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { PiTwitterLogo } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";

export default function Social() {
  const icon_style = "text-white text-3xl ";
  return (
    <div className=" bg-background_blue py-20">
      <div className=" px-4 flex flex-col gap-6 max-w-screen-xl m-auto md:flex-row justify-between items-center">
        <div className=" text-header font-bold text-2xl md:text-4xl">
          Connect with us on{" "}
          <span className=" text-primary"> Social Media</span> <br /> and be
          part of the innovation
        </div>

        <div className=" flex gap-2  md:gap-8">
          <button className="bg-primary p-2 rounded-full">
            <FaInstagram className={icon_style} />
          </button>
          <button className="bg-primary p-2 rounded-full">
            <TiSocialFacebook className={icon_style} />
          </button>
          <button className="bg-primary p-2 rounded-full">
            <PiTwitterLogo className={icon_style} />
          </button>
          <button className="bg-primary p-2 rounded-full">
            <FaTwitch className={icon_style} />
          </button>
          <button className="bg-primary p-2 rounded-full">
            <FaLinkedinIn className={icon_style} />
          </button>
        </div>
      </div>
    </div>
  );
}
