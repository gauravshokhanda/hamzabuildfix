import React from "react";
import imageHero from "public/images/about-us/aboutus-hero.png";
import Image from "next/image";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import { PiTwitterLogo } from "react-icons/pi";

export default function Hero() {
  return (
    <div className="pt-4 pb-16 max-w-screen-xl m-auto px-4">
      <div className="relative py-36 md:py-52 rounded-xl overflow-hidden">
        <Image
          className="absolute left-0 top-0 w-full h-full object-cover"
          src={imageHero}
          alt="hero about"
        />
        <div className="absolute left-0 top-0 w-full h-full bg-bgHero blur-sm "></div>
        <div className=" relative text-neutral-100 max-w-[520px] px-4 m-auto text-center flex flex-col gap-6 items-center">
          <h1 className=" uppercase md:text-5xl text-3xl font-semibold">
            about us
          </h1>
          <p className="opacity-70 tracking-wider">
            Tafawwaq is dedicated to connecting students with highly qualified
            tutors to foster educational growth. Our mission is to provide
            personalized, high-quality tutoring services that cater to each
            student&apos;s unique learning needs.
          </p>
          <button className=" rounded-md mt-1 bg-neutral-100 text-[#40a8cd] px-4 py-3 font-semibold">
            Explore More
          </button>
        </div>
        <div className=" absolute -right-32 top-1/2  rotate-90 -translate-y-1/2  flex-col md:flex-row items-center gap-3 md:gap-6 hidden md:flex ">
          <div className=" flex gap-3 text-[#39c6ff]">
            <Icon>
              <PiTwitterLogo />
            </Icon>

            <Icon>
              <RiFacebookCircleLine />
            </Icon>
            <Icon>
              <FaInstagram />
            </Icon>
          </div>
          <div className=" flex items-center text-white gap-2">
            <TfiEmail />
            <span>myjourney@email.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon({ children }: { children: React.ReactElement }) {
  return (
    <button className=" w-8 h-8 backdrop-blur rounded-lg text-2xl flex justify-center items-center">
      {children}
    </button>
  );
}
