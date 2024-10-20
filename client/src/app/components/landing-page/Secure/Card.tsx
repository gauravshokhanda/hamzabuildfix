// components/Card.tsx
import React from 'react';
import Image, { StaticImageData } from 'next/image';

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

export default Card;
