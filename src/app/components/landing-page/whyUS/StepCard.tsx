// StepCard.tsx
import React from 'react';

interface StepCardProps {
  stepNumber: string;
  content: string;
  isShifted?: boolean;
  bgColor: string;
}

const StepCard: React.FC<StepCardProps> = ({ stepNumber, content, isShifted = false, bgColor }) => {
  return (
    <div
      className={`flex items-center ${bgColor} text-white rounded-3xl shadow-md px-6 py-8 w-full ${
        isShifted ? 'lg:w-[70%] ml-auto' : 'lg:w-[80%] mx-auto'
      }`}
    >
      <div className="bg-[#00000080] text-gray-300 p-6 text-xs w-8 h-8 flex justify-center items-center rounded-full mr-4">
        {stepNumber}
      </div>
      <span>{content}</span>
    </div>
  );
};

export default StepCard;
