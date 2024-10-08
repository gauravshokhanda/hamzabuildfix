"use client";

import React from "react";
import { Book, Clock, MessageSquare, TrendingUp, Video } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import DashboardPNG from "../../../public/images/main-dashboard/dashboard.jpeg";
import DashboardHeader from "../DashboardHeader";

const MainDashboard: React.FC = () => {
  return (
    <>
      <DashboardHeader />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4">
          <div className="relative h-full overflow-hidden rounded-lg shadow-xl">
            <Image
              src={DashboardPNG}
              alt="BIO Session background"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-[#A3D154] opacity-80"></div>
            <div className="relative p-6 text-white text-center flex flex-col items-center justify-center h-full">
              <h2 className="text-xl font-semibold mb-2">
                Your BIO Session will begin in
              </h2>
              <div className="text-6xl font-bold mb-2">00:12:58</div>
              <p className="mb-4">45 min session</p>
              <button className="text-white bg-[#A3D154] px-4 py-2 mx-auto rounded-md flex items-center gap-2">
                <Video />
                Join the lesson
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="bg-white p-6 rounded-lg shadow-md h-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl text-[#42ABD1] font-semibold">
                Upcoming lessons
              </h2>
              <a href="#" className="text-[#5DADE2] hover:underline">
                View All
              </a>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Image
                    src={logo}
                    width={512}
                    height={512}
                    className="w-12 h-12 bg-gray-200 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">Get Started with Figjam</h3>
                    <p className="text-sm text-[#3F3F44]">Student Name</p>
                  </div>
                  <div className="ml-auto">
                    <p className="text-sm text-[#3F3F444D]">2.5Hours</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="bg-white rounded-lg shadow-md h-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl text-[#66797C]">Your Earnings</h2>
                <TrendingUp className="text-black" />
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-xl text-gray-600">Today Earning</p>
                  <p className="text-4xl text-[#3F3F44]">$15,010</p>
                </div>
                <div>
                  <p className="text-xl text-gray-600">Pending</p>
                  <p className="text-4xl text-[#A3D154]">$58</p>
                </div>
                <div>
                  <p className="text-xl text-gray-600">In Review</p>
                  <p className="text-4xl text-[#3F3F44]">$70</p>
                </div>
              </div>
            </div>
            <div className="bg-[#3F3F44] flex items-center justify-between text-white rounded-b-lg px-6 py-3">
              <div className="flex flex-col justify-between items-center mb-2">
                <p className="text-[#FEFEFEB2] text-xl">Available</p>
                <p className="text-4xl text-[#42ABD1] ">$167</p>
              </div>
              <button className="w-40 bg-[#A3D154] text-[#3F3F44] rounded-lg py-2 font-semibold">
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl text-[#66797C] font-semibold">
            Lesson Requests
          </h2>
          <a href="#" className="text-[#5DADE2] hover:underline">
            View All
          </a>
        </div>
        <div className="grid grid-cols-3 gap-36">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">John Doe</h3>
                <MessageSquare className="text-gray-500" size={20} />
              </div>
              <p className="text-sm text-[#6E6E76] mb-2">
                Lorem ipsum is a dummy text being used to show the description
                of the problem, student needs help with
              </p>
              <h4 className="tracking-normal text-xl mb-2">
                Learn figma From scratch
              </h4>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-[#E5F7FD] text-[#3F3F44] px-4 py-1 rounded-full">
                  Basic
                </span>
              </div>
              <div className="flex items-center justify-between my-3">
                <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                  <div className="text-lg flex items-center gap-1">
                    <Book color="#A3D154" size={20} /> 23 Lessons
                  </div>
                  <div className="text-lg flex items-center gap-1">
                    <Clock color="#A3D154" size={20} /> 23 hrs
                  </div>
                </div>
                <p className="text-3xl text-[#3F3F44] mb-2">$257</p>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-[#DCF6AF] text-[#3F3F44] py-1 rounded-full text-sm">
                  Accept
                </button>
                <button className="flex-1 bg-[#FDE5E5] text-[#3F3F44] py-1 rounded-full text-sm">
                  Reject
                </button>
                <button className="flex-1 bg-[#42ABD1] text-white py-1 rounded-full text-sm">
                  View Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainDashboard;
