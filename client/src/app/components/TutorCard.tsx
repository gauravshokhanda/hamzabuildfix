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

  export default TutorCard