"use client";

import {
  BadgeDollarSign,
  GraduationCap,
  Home,
  ShoppingBag,
} from "lucide-react";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";

const subjectData = [
  { subject: "Math", courseVisit: 40, courseSale: 70 },
  { subject: "Eng", courseVisit: 30, courseSale: 40 },
  { subject: "Comp", courseVisit: 55, courseSale: 75 },
  { subject: "Acc", courseVisit: 70, courseSale: 85 },
  { subject: "His", courseVisit: 45, courseSale: 65 },
  { subject: "Eng", courseVisit: 30, courseSale: 70 },
  { subject: "Eng", courseVisit: 20, courseSale: 40 },
  { subject: "Math", courseVisit: 40, courseSale: 60 },
  { subject: "Eng", courseVisit: 50, courseSale: 85 },
  { subject: "His", courseVisit: 55, courseSale: 65 },
  { subject: "Urdu", courseVisit: 50, courseSale: 60 },
  { subject: "Isl", courseVisit: 35, courseSale: 50 },
];

const peakHoursData = [
  { day: "Mon", study: 35, days: 60 },
  { day: "Tues", study: 25, days: 40 },
  { day: "Wed", study: 55, days: 35 },
  { day: "Thur", study: 35, days: 52 },
  { day: "Fri", study: 15, days: 20 },
];

export default function StatsDashboard() {
  return (
    <div className="p-4">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-md p-4">
          <div className="flex items-start justify-between">
            <div>
              <ShoppingBag />
              <div className="text-md mt-4 leading-tight">
                Total Number of <br />
                Sessions Conducted
              </div>
            </div>
            <div className="flex flex-col items-center h-full justify-center">
              <div className="text-[#42ABD1] text-2xl mb-2">2,714</div>
              <div className="mt-2">
                <svg width="40" height="20" viewBox="0 0 40 20">
                  <path
                    d="M0 10 L10 5 L20 15 L30 8 L40 12"
                    stroke="#ff4d4f"
                    fill="none"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-4">
          <div className="flex items-start justify-between">
            <div>
              <BadgeDollarSign />
              <div className="text-md mt-4 leading-tight">
                Sessions Conducted <br />
                This Week:
              </div>
            </div>
            <div className="flex flex-col items-center h-full justify-center">
              <div className="text-[#42ABD1] text-2xl mb-2">$32,821</div>
              <div className="mt-2">
                <svg width="40" height="20" viewBox="0 0 40 20">
                  <path
                    d="M0 10 L10 5 L20 15 L30 8 L40 12"
                    stroke="#90EE90"
                    fill="none"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-4">
          <div className="flex items-start justify-between">
            <div>
              <Home />
              <div className="text-md mt-4 leading-tight">
                Average Session <br />
                Duration:
              </div>
            </div>
            <div className="flex flex-col items-center h-full justify-center">
              <div className="text-[#42ABD1] text-2xl mb-2">75%</div>
              <div className="mt-2">
                <svg width="40" height="20" viewBox="0 0 40 20">
                  <path
                    d="M0 10 L10 5 L20 15 L30 8 L40 12"
                    stroke="#90EE90"
                    fill="none"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid - Modified Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Subject Statistics */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h2 className="text-gray-700 font-medium mb-4 sm:mb-0">
              Subject-Specific Statistics:
            </h2>
            <div className="flex flex-wrap items-center gap-4 sm:gap-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#CCEABB]"></div>
                <span className="text-sm text-gray-600">Course Visit</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#42ABD1]"></div>
                <span className="text-sm text-gray-600">Course Sale</span>
              </div>
              <select className="rounded-lg px-3 py-1.5 text-sm text-gray-600 outline-none">
                <option>Last 12 Month</option>
              </select>
            </div>
          </div>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={subjectData}
                margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
              >
                <XAxis dataKey="subject" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Bar
                  dataKey="courseVisit"
                  fill="#CCEABB"
                  radius={[5, 5, 0, 0]}
                />
                <Bar
                  dataKey="courseSale"
                  fill="#42ABD1"
                  radius={[5, 5, 0, 0]}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Peak Hours Chart */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-gray-700 font-medium mb-6">
            Peak Hours And days
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#42ABD1]"></div>
              <span className="text-sm text-gray-600">Study</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#CCEABB]"></div>
              <span className="text-sm text-gray-600">Days</span>
            </div>
          </div>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={peakHoursData}
                margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
              >
                <XAxis dataKey="day" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Bar dataKey="study" fill="#42ABD1" radius={[5, 5, 0, 0]} />
                <Bar dataKey="days" fill="#CCEABB" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Average Session Duration */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-gray-700 font-medium">
              Average Session Duration
            </h2>
            <button className="text-gray-400">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </button>
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="relative">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Accounting</span>
                  <span className="text-gray-600">1.5 hours</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full">
                  <div
                    className="h-full bg-[#A3D154] rounded-full"
                    style={{
                      width: i === 0 ? "100%" : i === 1 ? "100%" : "60%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rating Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 flex items-center justify-start">
          <div>
            <div className="mb-4">
              <GraduationCap className="text-[#42ABD1] font-light" size={60} />
            </div>
            <h3 className="font-medium text-xl text-[#3F3F44] mb-2">
              Average Rating:
            </h3>
            <div className="flex items-center gap-2">
              <div className="flex tracking-widest text-2xl text-yellow-400 mb-2">
                {"★".repeat(5)}
              </div>
              <div className="text-md text-[#1C1D1D] font-medium mb-1">4.8</div>
            </div>
            <button className="bg-[#42ABD1] text-white px-3.5 py-1 rounded-lg">
              View Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
