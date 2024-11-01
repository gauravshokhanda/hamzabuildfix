import React from "react";

import imageHero from "public/images/about-us/aboutus-hero.png";
import Image from "next/image";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import { PiTwitterLogo } from "react-icons/pi";

import missionImage from "public/images/about-us/mission.svg";
import visionImage from "public/images/about-us/vision.svg";
import Heading from "../components/Heading";

import Link from "next/link";


import experts from "public/images/about-us/experts.svg";
import comprehensive from "public/images/about-us/comprehensive.svg";
import user_friendly from "public/images/about-us/user-friendly.svg";
import learning from "public/images/about-us/learning.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";


export default function About() {
  return (
    <div>
      <Hero />
      <Mission />
      <Advantages />
      <Advantages2 />
      <Social />
    </div>
  );
}


function Hero() {
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



function Mission() {
  return (
    <div className=" py-20 bg-background_blue px-4">
      <div className=" flex md:flex-row flex-col justify-center gap-24">
        <MissionCard
          icon={missionImage}
          header="Mission"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris,Lorem ipsum dolor sit amet, consectetur."
        />
        <MissionCard
          icon={visionImage}
          header="Vision"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris,Lorem ipsum dolor sit amet, consectetur."
        />
      </div>
    </div>
  );
}

interface MissionProps {
  icon: string;
  header: string;
  paragraph: string;
}
const MissionCard: React.FC<MissionProps> = ({ icon, header, paragraph }) => {
  return (
    <div className=" flex flex-col gap-3 items-center text-center">
      <div className=" w-20 md:w-24">
        <Image src={icon} alt={header} />
      </div>
      <Heading title={header} />
      <p className=" text-gray max-w-80 md:text-xl md:max-w-96">{paragraph}</p>
    </div>
  );
};





function Advantages() {
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
        <AdvangtesCard
          icon={experts}
          title="Expert Tutors:"
          subtitle="Access to highly qualified educators."
        />
        <AdvangtesCard
          icon={comprehensive}
          title="Comprehensive Resources:"
          subtitle="A wide range of learning materials and tools."
        />
        <AdvangtesCard
          icon={user_friendly}
          title="User-Friendly Platform:"
          subtitle="Easy-to-navigate interface and seamless experience."
        />
        <AdvangtesCard
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

interface AdvangtesCardProps {
  icon: string;
  title: string;
  subtitle: string;
}

const AdvangtesCard: React.FC<AdvangtesCardProps> = ({
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


function Advantages2() {
  return (
    <div className=" bg-background_dark px-4 py-20 relative overflow-hidden ">
      <Circle bgColor="bg-secondary" position=" -left-40 -top-40" />
      <Circle bgColor="bg-primary" position="left-1/3  -bottom-64" />
      <div className=" max-w-screen-xl m-auto flex flex-col md:flex-row gap-10 relative items-center justify-between">
        <div className=" text-neutral-100">
          <div className=" font-bold text-4xl mb-6">
            Advantages of Using <br /> Tafawwaq
          </div>
          <p className=" opacity-70 tracking-wider max-w-[340px] mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s,
          </p>
          <button className="block bg-secondary font-semibold rounded-md text-[#fafafb] px-12 md:w-64 py-3 ">
            Find a tutor
          </button>
        </div>

        <div className=" grid grid-cols-[250px] max-w-[500px] md:grid-cols-2 gap-8 justify-center  relative">
          <Circle
            bgColor="bg-secondary"
            position=" left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />

          <Advagtes2Card
            num="01"
            title="potential earnings"
            subtitle="Emphasize competitive rates and earning opportunities."
          />
          <Advagtes2Card
            num="02"
            title="Support and Resources"
            subtitle="Mention access to a range of teaching tools and support from Tafawwaq."
          />
          <Advagtes2Card
            num="03"
            title="Impact"
            subtitle="Opportunity to make a meaningful difference in students' educational journeys."
          />
          <Advagtes2Card
            num="04"
            title="flexible schedules"
            subtitle="Highlight the ability for tutors to set their own hours."
          />
        </div>
      </div>
    </div>
  );
}

interface Advantages2CardProps {
  num: string;
  title: string;
  subtitle: string;
}

const Advagtes2Card: React.FC<Advantages2CardProps> = ({
  num,
  title,
  subtitle,
}) => {
  return (
    <div className=" relative text-center text-header px-6 pb-10 pt-7 bg-white shadow-boxDark rounded-2xl">
      <span className=" font-semibold absolute top-1 left-1/2 -translate-x-1/2 text-7xl text-secondary opacity-30">
        {num}
      </span>
      <div className=" relative">
        <p className=" font-semibold mb-4">{title}</p>
        <p className=" opacity-70">{subtitle}</p>
      </div>
    </div>
  );
};

interface CircleProps {
  bgColor: string;
  position: string;
}

const Circle: React.FC<CircleProps> = ({ bgColor, position }) => {
  return (
    <div
      className={`absolute ${bgColor} ${position} w-80 h-80 rounded-full`}
    ></div>
  );
};




function Social() {
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
