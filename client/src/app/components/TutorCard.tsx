import Image from "next/image";
import { Star, Clock, MessageSquare } from "lucide-react";

interface TutorCardProps {
  tutor: {
    name: string;
    title: string;
    description: string;
    image: string;
    rating: {
      stars: number;
      value: number;
      count: number;
    };
    isAvailable: boolean;
    rate: number;
    hoursTutored: number;
    responseTime: string;
    review: {
      quote: string;
      reviewer: string;
    };
  };
}

const TutorCard = ({ tutor }: TutorCardProps) => {
  return (
    <div className="mt-12 mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-4 md:p-6">
      <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Tutor Image and Rating */}
          <div className="md:w-1/4 mb-4 md:mb-0 flex flex-col gap-3 items-center justify-center">
            <Image
              src={tutor.image}
              alt={tutor.name}
              className="w-40 h-40 md:w-52 md:h-52 rounded-xl object-cover mx-auto md:mx-0"
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

          {/* Tutor Details and Buttons */}
          <div className="md:w-2/4 md:px-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-2">
                <h2 className="text-xl md:text-2xl font-bold mr-2">
                  {tutor.name}
                </h2>
                <span
                  className={`bg-${
                    tutor.isAvailable ? "green" : "red"
                  }-500 rounded-full w-3 h-3`}
                ></span>
              </div>
              <p className="text-blue-500">{tutor.title}</p>
              <p className="text-gray-600 ">
                {tutor.description}{" "}
                <a href="#" className="text-blue-500">
                  See Full Profile
                </a>
              </p>
            </div>
            <div className="flex gap-3">
              <button className="bg-[#A3D154] w-40 hover:bg-[#A3D154] px-8 py-2 rounded-md text-white">
                Chat Now
              </button>
            </div>
          </div>
          <div className="md:w-1/8 mr-5 md:px-4 flex flex-col justify-between">
            <div className="hidden md:block border border-slate h-full"></div>
          </div>

          {/* Rate and Additional Info */}
          <div className="md:w-1/8 mt-4 ml-0 md:mt-0 flex flex-col justify-between">
            <div className="flex justify-center flex-col items-start">
              <p className="text-2xl mt-4 font-bold text-left">
                ${tutor.rate}/hr
              </p>
              <div className="flex items-center mt-8 justify-start mt-2">
                <Clock className="w-4 h-4  text-green-500 mr-2" />
                <p className="text-gray">
                  {tutor.hoursTutored} hours tutoring
                </p>
              </div>
              <div className="flex items-center mt-2 justify-start">
                <MessageSquare className="w-4 h-4 text-green-500 mr-2" />
                <p className="text-gray">
                  Respond time:
                  <span className="font-bold text-gray">{tutor.responseTime}</span>
                </p>
              </div>

              <button className="w-40 mt-8 bg-[#40A8CD] hover:bg-[#40A8CD] py-2 rounded-md text-white">
                View Full Profile
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-50  rounded-md">
          <div className="mt-8 mx-auto  bg-light_blue rounded-lg shadow-lg overflow-hidden p-4 md:p-6">
            <blockquote className="text-gray-600 italic">
              <span className="text-4xl font-serif text-[#A3D154] ">
                &#8220;
              </span>
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
    </div>
  );
};

export default TutorCard;
