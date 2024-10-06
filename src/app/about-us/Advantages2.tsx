import React from "react";

export default function Advantages2() {
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
