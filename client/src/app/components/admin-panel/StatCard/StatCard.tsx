"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import threedot from "public/images/session-oversight/threedot.svg";

const StatCard = ({
  title,
  value,
  image,
  percentage,
  color,
  ChartComponent,
}: {
  title: string;
  value: string;
  image: StaticImageData;
  percentage: string;
  color?: string;
  ChartComponent: React.ComponentType;
}) => (
  <div className="p-3 md:p-6 border border-slate rounded-lg w-full">
    <div className="flex items-center justify-between">
      <h1 className="text-gray-800 font-medium">{title}</h1>
      <Image src={threedot} alt="options" />
    </div>
    <div className="flex justify-between mt-[8px] md:mt-[20px]">
      <div>
        <h1 className="text-lg md:text-3xl font-semibold mt-4">{value}</h1>
        <div className="md:flex items-center gap-[8px] mt-[16px]">
          <div className="flex items-center gap-[2px]">
            <Image src={image} alt="image" />
            <h1 className={`text-sm font-semibold`} style={{ color: color }}>
              {percentage}
            </h1>
          </div>
          <span className="text-sm font-medium">vs last month</span>
        </div>
      </div>
      <div>{ChartComponent && <ChartComponent />}</div>
    </div>
  </div>
);

export default StatCard;
