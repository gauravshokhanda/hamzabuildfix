import React from 'react';
import Image from 'next/image';
import EduIcon from "../../../public/images/landing-page/Frame.png";
import GroupIcon from "../../../public/images/landing-page/Group.png";
import Card from './Card'; // Adjust the path as necessary

const EducationalOfferings: React.FC = () => {
    return (
        <div className="EDU py-16 px-4 lg:px-8">
            <div className="max-w-7xl mx-auto p-5 md:p12">
                {/* Title and Learn More Button in Flex Row */}
                <div className="flex flex-col lg:flex-row justify-between items-center mb-8">

                    <h2 className="text-3xl text-center md:text-left md:text-4xl font-bold text-[#1d263a]">
                        Explore Our Comprehensive <br />Educational Offerings.
                    </h2>

                    {/* Learn More Button */}
                    <button className="mt-4 lg:mt-0 px-6 py-3 text-white bg-primary rounded-lg hover:bg-blue-600">
                        Learn More
                    </button>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Using Card Component */}
                    <Card
                        icon={EduIcon}
                        title="Middle/High School Education"
                        description="Access tailored support for middle and high school students on many curriculums such as IB, IGCSE, SATs and more to excel academically."
                        link="#"
                    />

                    <Card
                        icon={GroupIcon}
                        title="Languages"
                        description="Master new languages and enhance your communication skills with our expert-led language private tutors."
                        link="#"
                    />
                </div>
            </div>
        </div>
    );
};

export default EducationalOfferings;
