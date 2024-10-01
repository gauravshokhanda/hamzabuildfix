// Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between h-full">
      <h3 className="text-xl text-black font-semibold text-center mb-2">{title}</h3>
      <p className="text-gray-600 text-center flex-grow">{description}</p>
    </div>
  );
};

export default Card;
