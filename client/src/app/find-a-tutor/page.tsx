import Image from "next/image";
import React from "react";
import searchIcon from "../public/images/landing-page/searchIcon.png";
import { Star, Clock, MessageSquare } from "lucide-react";
import bottomArrow from "../public/images/landing-page/bottomArrow.png";

const tutors = [
  {
    name: "Alexson David",
    image:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    title: "English Tutor",
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin sem in nibh dignissim pretium. Sed tristique
            viverra semper. Quisque luctus vestibulum eros, a pellentesque justo tempor quis. Sed vehicula maximus gravida.
      `,
    isAvailable: true,
    rating: { stars: 4, value: 4.5, count: 178 },
    rate: 145,
    hoursTutored: 44567,
    responseTime: "15 minutes",
    review: {
      quote: "Extremely Amazing and professional tutor",
      details: "Lorem ipsum dolor sit amet...",
      reviewer: "Rebecca",
    },
  },
  {
    name: "Alexson David",
    image:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    title: "English Tutor",
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin sem in nibh dignissim pretium. Sed tristique
            viverra semper. Quisque luctus vestibulum eros, a pellentesque justo tempor quis. Sed vehicula maximus gravida.
      `,
    isAvailable: true,
    rating: { stars: 4, value: 4.5, count: 178 },
    rate: 145,
    hoursTutored: 44567,
    responseTime: "15 minutes",
    review: {
      quote: "Extremely Amazing and professional tutor",
      details: "Lorem ipsum dolor sit amet...",
      reviewer: "Rebecca",
    },
  },
  {
    name: "Alexson David",
    image:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    title: "English Tutor",
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin sem in nibh dignissim pretium. Sed tristique
            viverra semper. Quisque luctus vestibulum eros, a pellentesque justo tempor quis. Sed vehicula maximus gravida.
      `,
    isAvailable: true,
    rating: { stars: 4, value: 4.5, count: 178 },
    rate: 145,
    hoursTutored: 44567,
    responseTime: "15 minutes",
    review: {
      quote: "Extremely Amazing and professional tutor",
      details: "Lorem ipsum dolor sit amet...",
      reviewer: "Rebecca",
    },
  },
];

export default function FindATutor() {
  return (
    <div className="p-12 flex gap-16">
      <div className="w-1/5 flex gap-4 flex-col">
        <div className="px-4">
          <h1 className="text-xl font-bold my-2">Filter By Price</h1>
          <p>Price $0 - $2000</p>
          <input
            type="range"
            min="1"
            max="100"
            value="100"
            accept="images/*"
            className="w-full accent-[#00ADEF] bg-blue-500"
          />
        </div>
        <div className="px-4">
          <h1 className="text-xl font-bold my-2">Language Spoken</h1>
          <div className="flex gap-4 items-center mt-1">
            <input type="checkbox" className="w-4 h-4 rounded-md" />
            English
          </div>
          <div className="flex gap-4 items-center mt-2">
            <input type="checkbox" className="w-4 h-4 rounded-md" />
            Arabic
          </div>
        </div>
        <div className="px-4">
          <h1 className="text-xl font-bold my-2">Select Date</h1>
          <p className="flex justify-center">October 2024</p>
          <div className="flex gap-2 my-3">
            <div className="bg-blue-200 w-10 flex justify-center items-center text-center rounded-md p-2">
              Sat 13
            </div>
            <div className="bg-blue-200 w-10 flex justify-center items-center text-center rounded-md p-2">
              Sat 13
            </div>
            <div className="bg-blue-200 w-10 flex justify-center items-center text-center rounded-md p-2">
              Sat 13
            </div>
            <div className="bg-blue-200 w-10 flex justify-center items-center text-center rounded-md p-2">
              Sat 13
            </div>
            <div className="bg-blue-200 w-10 flex justify-center items-center text-center rounded-md p-2">
              Sat 13
            </div>
            <div className="bg-blue-200 w-10 flex justify-center items-center text-center rounded-md p-2">
              Sat 13
            </div>
            <div className="bg-blue-200 w-10 flex justify-center items-center text-center rounded-md p-2">
              Sat 13
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/5">
        <div className="mt-4 flex flex-col md:flex-row md:space-x-4 w-full space-y-4 md:space-y-0">
          <div className="relative w-full md:w-1/4">
            <select
              className="border border-gray-300 focus:border-primary focus:outline-none rounded-lg px-4 py-2 w-full appearance-none bg-white text-left pr-10"
              style={{
                backgroundImage: `url(${bottomArrow.src})`,
                backgroundSize: "16px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 10px center",
              }}
            >
              <option>Curriculum</option>
            </select>
          </div>
          <div className="relative w-full md:w-1/4">
            <select
              className="border border-gray-300 focus:border-primary focus:outline-none rounded-lg px-4 py-2 w-full appearance-none bg-white text-left pr-10"
              style={{
                backgroundImage: `url(${bottomArrow.src})`,
                backgroundSize: "16px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 10px center",
              }}
            >
              <option>Level</option>
            </select>
          </div>
          <div className="relative w-full md:flex-1">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:border-primary focus:outline-none"
            />
          </div>
          <button className="flex justify-center items-center px-6 py-2 bg-primary text-white rounded-lg w-full md:w-auto">
            <Image src={searchIcon} alt="Search" width={24} height={24} />
          </button>
        </div>

        {tutors.map((tutor, index) => (
          <TutorCard key={index} tutor={tutor} />
        ))}
      </div>
    </div>
  );
}

const TutorCard = ({ tutor }) => {
  return (
    <div className="mt-12 mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-6">
      <div className="p-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 mb-4 md:mb-0 flex flex-col gap-3 items-center justify-center">
            <Image
              src={tutor.image}
              alt={tutor.name}
              className="w-52 h-52 rounded-full object-cover mx-auto md:mx-0"
              width={150}
              height={150}
            />
             <div className="flex items-center mb-2">
              {Array.from({ length: tutor.rating.stars }, (_, index) => (
                <Star
                  key={index}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="ml-2 text-gray-600">
                {tutor.rating.value} ({tutor.rating.count})
              </span>
            </div>
          </div>

          <div className="md:w-2/4 md:px-4">
            <div className="flex items-center mb-2">
              <h2 className="text-2xl font-bold mr-2">{tutor.name}</h2>
              <span
                className={`bg-${
                  tutor.isAvailable ? "green" : "red"
                }-500 rounded-full w-3 h-3`}
              ></span>
            </div>
            <p className="text-blue-500 mb-2">{tutor.title}</p>
            <p className="text-gray-600 mb-2">
              {tutor.description}{" "}
              <a href="#" className="text-blue-500">
                See Full Profile
              </a>
            </p>
           
            <button className="bg-[#A3D154] hover:bg-[#A3D154] px-4 py-2 rounded-md text-white">
              Chat Now
            </button>
          </div>

          <div className="md:w-1/4 mt-4 md:mt-0">
            <p className="text-2xl font-bold text-right">${tutor.rate}/hr</p>
            <div className="flex items-center justify-end mt-2">
              <Clock className="w-4 h-4 text-green-500 mr-2" />
              <p className="text-gray-600">
                {tutor.hoursTutored} hours tutoring
              </p>
            </div>
            <div className="flex items-center justify-end mt-2">
              <MessageSquare className="w-4 h-4 text-green-500 mr-2" />
              <p className="text-gray-600">
                Respond time: {tutor.responseTime}
              </p>
            </div>
            <button className="w-full mt-4 bg-[#40A8CD] hover:bg-[#40A8CD] py-2 rounded-md text-white">
              View Full Profile
            </button>
          </div>
        </div>

        <div className="mt-6 border-t pt-6 border-stone-300">
          <blockquote className="text-gray-600 italic">
            <span className="text-3xl font-serif">&#8220;</span>
            {tutor.review.quote}
          </blockquote>
          <p className="mt-2 text-gray-600">
            {tutor.description}{" "}
            <a href="#" className="text-blue-500">
              Read full review
            </a>
          </p>
          <p className="mt-2 text-gray-500">-{tutor.review.reviewer}</p>
        </div>
      </div>
    </div>
  );
};
