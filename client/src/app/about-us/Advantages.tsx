import React from "react";
import Heading from "../components/Heading";
import Image from "next/image";
import Link from "next/link";

// icons
import experts from "public/images/about-us/experts.svg";
import comprehensive from "public/images/about-us/comprehensive.svg";
import user_friendly from "public/images/about-us/user-friendly.svg";
import learning from "public/images/about-us/learning.svg";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Advantages() {
  return (
    <div className=" px-4 py-10 md:py-20">
      <div className=" max-w-xl m-auto ">
        <Heading
          center={true}
          title="Advantages of Using Tafawwaq"
          subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
      </div>
      <div className=" flex md:flex-row flex-col items-center gap-8 justify-center py-11">
        <AdvagtesCard
          icon={experts}
          title="Expert Tutors:"
          subtitle="Access to highly qualified educators."
        />
        <AdvagtesCard
          icon={comprehensive}
          title="Comprehensive Resources:"
          subtitle="A wide range of learning materials and tools."
        />
        <AdvagtesCard
          icon={user_friendly}
          title="User-Friendly Platform:"
          subtitle="Easy-to-navigate interface and seamless experience."
        />
        <AdvagtesCard
          icon={learning}
          title="Personalized Learning:"
          subtitle="Customized lesson plans and progress tracking to meet "
        />
      </div>
      <button className="block bg-primary font-semibold rounded-md text-[#fafafb] px-12 md:w-64 py-3 m-auto">
        Find a tutor
      </button>
    </div>
  );
}

interface AdvagtesCardProps {
  icon: string;
  title: string;
  subtitle: string;
}

const AdvagtesCard: React.FC<AdvagtesCardProps> = ({
  icon,
  title,
  subtitle,
}) => {
  return (
    <div className=" max-w-80 flex flex-col gap-4 shadow-box border px-10 py-8 rounded-xl border-[#dfdfdf]">
      <div className=" bg-secondary w-16 h-16 p-3 rounded-lg">
        <Image src={icon} alt={title} />
      </div>
      <div className=" text-slate font-semibold">{title}</div>
      <p className=" text-slate opacity-70">{subtitle}</p>
      <Link
        href="#"
        className=" text-primary font-semibold flex items-center gap-2"
      >
        {" "}
        View More <FaArrowRightLong className=" text-xl" />{" "}
      </Link>
    </div>
  );
};
