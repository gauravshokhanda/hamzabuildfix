import React from 'react';
import Image from 'next/image';
import bg1 from 'public/images/landing-page/bg1.png';
import bg2 from 'public/images/landing-page/bg2.png';


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


interface SectionProps {
  title: string;
  cards: { title: string; description: string }[];
}

const Section: React.FC<SectionProps> = ({ title, cards }) => {
  // Apply conditional styles based on the title
  const marginTopStyles = title === 'Flexible Scheduling' ? 'mt-14 lg:mt-24' : 'lg:mt-0';

  return (
    <div className={`flex flex-col justify-start ${marginTopStyles} lg:px-12  space-y-8 w-full lg:w-1/2`}>
      <h2 className="text-4xl font-bold text-white mb-8 text-center lg:text-left">{title}</h2>
      <CardGrid cards={cards} />
    </div>
  );
};




interface CardGridProps {
  cards: { title: string; description: string }[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};


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


