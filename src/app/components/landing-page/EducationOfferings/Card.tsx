// components/Card.tsx
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface CardProps {
  icon: StaticImageData;
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="rounded-lg customShadow p-8 flex flex-col items-start">
      {/* Icon */}
      <div className="bg-secondary p-3 rounded-md mb-4">
        <Image src={icon} height={30} width={30} alt={`${title} Icon`} />
      </div>

      {/* Title */}
      <h3 className="text-xl text-black font-semibold mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-4">{description}</p>

      {/* Link */}
      <Link href={link} className="text-blue-500 font-semibold">
        View More →
      </Link>
    </div>
  );
};

export default Card;
