import React from "react";
import imageHero from "../public/images/about-us/aboutus-hero.png";
import Image from "next/image";

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
      </div>
    </div>
  );
}
