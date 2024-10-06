import React from "react";
import Heading from "../components/Heading";

import { blogCardData } from "./blog-data";
import Image from "next/image";

export default function People() {
  return (
    <div className=" py-20 px-4">
      <div className=" bg-background_blue px-4 max-w-screen-xl m-auto py-20">
        <div className=" tracking-[-1px] max-w-[450px] m-auto">
          <Heading
            center
            title="We help people solving their finance problems smartly."
          />
        </div>
        <div className=" grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3 md:px-14">
          {blogCardData.map((card, idx) => (
            <PeopoleCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface PeopoleCardProp {
  img: string;
  title: string;
  subtitle: string;
  name: string;
}

const PeopoleCard: React.FC<PeopoleCardProp> = ({
  img,
  title,
  subtitle,
  name,
}) => {
  return (
    <div className=" border bg-white border-[#e1ecf0] rounded-lg p-6 ">
      <div className=" shadow-peopleBox rounded-lg overflow-hidden">
        <Image className=" object-cover w-full" src={img} alt={name} />
      </div>
      <div className=" text-xl font-bold text-[#66797c] my-4">{title}</div>
      <p className=" text-slate opacity-80 max-w-xs">{subtitle}</p>
      <span className=" block text-primary font-semibold mt-3">{name}</span>
      <button className=" border border-primary rounded-full text-primary px-6 py-2 text-sm font-bold mt-8">
        Read More
      </button>
    </div>
  );
};
//background: rgba(102, 121, 124, 1);
