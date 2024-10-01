// InteractiveLearningTools.tsx
import React from 'react';
import Image from 'next/image';
import bg1 from '../../../public/images/landing-page/bg1.png';
import bg2 from '../../../public/images/landing-page/bg2.png';
import Section from './Section';

const InteractiveLearningTools: React.FC = () => {
  // Data for each section
  const interactiveLearningToolsCards = [
    { title: 'Tailored Lessons', description: "Lessons customized to meet each student's unique learning needs and pace." },
    { title: 'Engaging Methods', description: 'Interactive teaching methods to enhance learning.' },
  ];

  const flexibleSchedulingCards = [
    { title: 'Personalized Sessions', description: 'Schedule sessions at your convenience for a flexible learning experience.' },
    { title: 'Adaptable Pacing', description: "Lessons paced according to each student's learning ability and progress." },
  ];

  return (
    <div className="relative bg-[#1E353E] py-20 px-4 lg:px-8 overflow-hidden">
      {/* Background Images */}
      <div className="absolute top-0 left-[-50px] w-48 h-48 lg:w-64 lg:h-64 opacity-100">
        <Image
          src={bg1}
          alt="Top Background Bubble"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute top-[30%] right-[140px] w-64 h-64 lg:w-96 lg:h-96 opacity-100">
        <Image
          src={bg2}
          alt="Middle Background Bubble"
          fill
          className="object-contain"
        />
      </div>
      {/* <div className="absolute bottom-0 left-0 w-64 h-64 lg:w-96 lg:h-96 opacity-100">
        <Image
          src={bg3}
          alt="Bottom Background Bubble"
          fill
          className="object-contain"
        />
      </div> */}

      {/* Main Content */}
      <div className="relative py-24 z-10 max-w-screen-2xl mx-auto flex flex-col lg:flex-row lg:space-x-12">
        {/* Left Section */}
        <Section title="Interactive Learning Tools" cards={interactiveLearningToolsCards} />

        {/* Right Section */}
        <Section title="Flexible Scheduling" cards={flexibleSchedulingCards} />
      </div>
    </div>
  );
};

export default InteractiveLearningTools;
