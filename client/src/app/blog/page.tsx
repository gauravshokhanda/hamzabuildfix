import React from "react";
import blogHeroImage from "public/images/blog/blog-video.svg";
import Image from "next/image";

import Heading from "../components/Heading";

import Pagination from "../components/Pagination";


// blog card images
import blog1 from "public/images/blog/image20.svg";
import blog2 from "public/images/blog/image21.svg";
import blog3 from "public/images/blog/image22.svg";
import blog4 from "public/images/blog/image23.svg";
import blog5 from "public/images/blog/image24.svg";
import blog6 from "public/images/blog/image25.svg";

const blogCardData = [
  {
    img: blog1,
    title: "“The best in town”",
    subtitle:
      "Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Craspretium suscipit tellus sit amet aliquet. Vestibulum maximus.",
    name: "Emerson Saris",
  },
  {
    img: blog2,
    title: "“Finance is now easy!”",
    subtitle:
      "Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Craspretium suscipit tellus sit amet aliquet. Vestibulum maximus.",
    name: "Ashlynn Baptista",
  },
  {
    img: blog3,
    title: "“They made it easy”",
    subtitle:
      "Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Craspretium suscipit tellus sit amet aliquet. Vestibulum maximus.",
    name: "Davis Ekstrom Bothman",
  },
  {
    img: blog4,
    title: "“The best in town”",
    subtitle:
      "Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Craspretium suscipit tellus sit amet aliquet. Vestibulum maximus.",
    name: "Emerson Saris",
  },
  {
    img: blog5,
    title: "“Finance is now easy!”",
    subtitle:
      "Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Craspretium suscipit tellus sit amet aliquet. Vestibulum maximus.",
    name: "Ashlynn Baptista",
  },
  {
    img: blog6,
    title: "“They made it easy”",
    subtitle:
      "Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Craspretium suscipit tellus sit amet aliquet. Vestibulum maximus.",
    name: "Davis Ekstrom Bothman",
  },
];


export default function BlogPage() {
  return (
    <div>
      <Hero />
      <People />
    </div>
  );
}



function Hero() {
  return (
    <div className=" flex lg:flex-row flex-col bg-primary">
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
        <Image
          className=" w-full h-full object-cover"
          src={blogHeroImage}
          alt="hero blog"
        />
      </div>
    </div>
  );
}


function People() {
  return (
    <div className=" py-20 px-4">
      <div className=" bg-background_blue px-4 max-w-screen-xl m-auto py-20">
        <div className=" tracking-[-1px] max-w-[450px] m-auto">
          <Heading
            center
            title="We help people solving their finance problems smartly."
          />
        </div>
        <div className=" grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3 md:px-14 mb-10">
          {blogCardData.map((card, idx) => (
            <PeopoleCard key={idx} {...card} />
          ))}
        </div>

        <Pagination currentPage={0} totalPages={0} onPrevious={function (): void {
          throw new Error("Function not implemented.");
        } } onNext={function (): void {
          throw new Error("Function not implemented.");
        } } onPageChange={function (): void {
          throw new Error("Function not implemented.");
        } } />
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

