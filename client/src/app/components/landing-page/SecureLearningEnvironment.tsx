import React from 'react';
import Image, { StaticImageData } from 'next/image';
import logo1 from 'public/images/landing-page/security1.png';
import logo2 from 'public/images/landing-page/securty2.png';
import logo3 from 'public/images/landing-page/security1.png'; // New logo

const SecureLearningEnvironment: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] py-16 px-4 lg:px-8">
      <div className="max-w-7xl md:p-12 mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Secure and Safe Learning <br />Environment
        </h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-center items-center">
          <Card
            icon={logo1}
            iconAlt="Privacy and Safety Logo"
            title="Privacy and Safety"
            description="Ensuring privacy and safety in every session."
            buttonLabel="Sign Up"
          />

          <Card
            icon={logo2}
            iconAlt="Compliance Logo"
            title="Compliance"
            description="Adherence to necessary regulations and standards."
            buttonLabel="Sign Up"
          />

          <Card
            icon={logo3}
            iconAlt="Data Encryption Logo"
            title="Data Encryption"
            description="Advanced encryption ensures that your data is always secure."
            buttonLabel="Learn More"

          />
        </div>

      </div>
    </div>
  );
};

export default SecureLearningEnvironment;


interface CardProps {
  icon: StaticImageData;
  iconAlt: string;
  title: string;
  description: string;
  buttonLabel: string;
}

const Card: React.FC<CardProps> = ({ icon, iconAlt, title, description, buttonLabel }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center    ">
      {/* Icon */}
      <div className={`bg-secondary p-4 rounded-full mb-6`}>
        <Image
          src={icon}
          alt={iconAlt}
          width={48}
          height={48}
        />
      </div>

      {/* Title */}
      <h3 className="text-xl text-black font-semibold mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-center mb-6">
        {description}
      </p>

      {/* Button */}
      <button className="px-6 py-3 bg-primary hover:opacity-70 text-white rounded-lg">
        {buttonLabel}
      </button>
    </div>
  );
};

