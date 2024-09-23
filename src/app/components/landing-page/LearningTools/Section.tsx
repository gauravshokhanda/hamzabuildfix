// Section.tsx
import React from 'react';
import CardGrid from './CardGrid';

interface SectionProps {
  title: string;
  cards: { title: string; description: string }[];
}

const Section: React.FC<SectionProps> = ({ title, cards }) => {
  // Apply conditional styles based on the title
  const marginTopStyles = title === 'Flexible Scheduling' ? 'mt-14 lg:mt-24' : 'lg:mt-0';

  return (
    <div className={`flex flex-col justify-start ${marginTopStyles} lg:px-12 xl:px-24 space-y-8 w-full lg:w-1/2`}>
      <h2 className="text-4xl font-bold text-white mb-8 text-center lg:text-left">{title}</h2>
      <CardGrid cards={cards} />
    </div>
  );
};

export default Section;
