// BecomeTeacher.tsx
import React from 'react';
import ContentSection from './ContentSection';
import StepCard from './StepCard';

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
