'use client'
import Button from '../Button';
import React from 'react';

const BecomeTeacher: React.FC = () => {
  return (
    <div className='bg-[#F9FAFB]'>
      <div className="py-16 px-6 lg:px-16 flex flex-col lg:flex-row lg:items-center max-w-7xl mx-auto space-y-10 lg:space-y-0 lg:space-x-16">
        {/* Left Section: Text Content */}
        <ContentSection />

        {/* Right Section: Step Cards */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex flex-col space-y-6">
          <StepCard
            stepNumber="01"
            content="Apply to become a mentor"
            bgColor="bg-primary"
          />
          <StepCard
            stepNumber="02"
            content="Sign up and complete profile"
            bgColor="bg-secondary"
            isShifted
          />
          <StepCard
            stepNumber="03"
            content="Select your expertise subjects"
            bgColor="bg-primary"
          />
          <StepCard
            stepNumber="04"
            content="Start teaching"
            bgColor="bg-secondary"
            isShifted
          />
        </div>
      </div>
    </div>
  );
};

export default BecomeTeacher;


const ContentSection: React.FC = () => {
  return (
    <div className="lg:w-1/2">
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
        Why should <span className="text-primary">teach in our platform</span>
      </h2>
      <p className="text-gray-600 mb-4">
        Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit amet aliquet.
        Vestibulum maximus lacinia massa non porttitor.
      </p>
      <p className="text-gray-600 mb-6">
        Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit amet aliquet.
        Vestibulum maximus lacinia massa non porttitor.
      </p>
      <div className='w-48'>

        <Button label={"Become a teacher"} classNames="rounded-lg" />
      </div>
    </div>
  );
};



interface StepCardProps {
  stepNumber: string;
  content: string;
  isShifted?: boolean;
  bgColor: string;
}

const StepCard: React.FC<StepCardProps> = ({ stepNumber, content, isShifted = false, bgColor }) => {
  return (
    <div
      className={`flex items-center ${bgColor} text-white rounded-3xl shadow-md px-6 py-8 w-full ${isShifted ? 'lg:w-[70%] ml-auto' : 'lg:w-[80%] mx-auto'
        }`}
    >
      <div className="bg-[#00000080] text-gray-300 p-6 text-xs w-8 h-8 flex justify-center items-center rounded-full mr-4">
        {stepNumber}
      </div>
      <span>{content}</span>
    </div>
  );
};

