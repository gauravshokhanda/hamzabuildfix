import React from "react";
import blogHeroImage from "../public/images/blog/blog-video.svg";
import Image from "next/image";
export default function Hero() {
  return (
    <div className=" flex lg:flex-row flex-col bg-primary max-w-screen-2xl m-auto">
      <div className="  text-white px-10 md:px-20 py-20 my-auto basis-1/2">
        <h1 className=" text-xl md:text-4xl mb-10 tracking-tighter max-w-xs md:max-w-max">
          “It was super easy to share my unique concept. I got exactly what I
          ordered. Great service!”
        </h1>
        <div className=" pl-8">
          <p className=" relative">
            <span className=" absolute block w-5 h-[3px] rounded-full -left-8 top-2.5 bg-white"></span>
            Jenny Wilson
          </p>
          <span className=" text-xs opacity-70">St. Celina, Delaware</span>
        </div>
      </div>
      <div className="basis-1/2">
        <Image src={blogHeroImage} alt="hero blog" />
      </div>
    </div>
  );
}
