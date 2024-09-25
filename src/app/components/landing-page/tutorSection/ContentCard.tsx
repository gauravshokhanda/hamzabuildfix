// ContentCard.tsx
'use client'
import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Button from '../../Button';

interface ContentCardProps {
  heading: string;
  subHeading: string;
  paragraphs: string[];
  buttonText: string;
  imageSrc: StaticImageData;
  isImageRight?: boolean;
}

const ContentCard: React.FC<ContentCardProps> = ({
  heading,
  subHeading,
  paragraphs,
  buttonText,
  imageSrc,
  isImageRight = false,
}) => {
  return (
    <div className="px-6 lg:px-16 py-10 flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-7xl mx-auto lg:space-x-20 my-8">
      {/* Left or Right Section: Image */}
      {isImageRight ? (
        <>
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left px-4  lg:px-0 order-2 lg:order-1 mt-10 lg:mt-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1D263A] mb-6">
              {heading} <span className="text-primary">{subHeading}</span>
            </h2>
            {paragraphs.map((para, index) => (
              <p key={index} className="text-[#1D263A] mb-4">
                {para}
              </p>
            ))}
            <div className="w-36">

              <Button label={buttonText} classNames='rounded-lg' />
            </div>
          </div>
          {/* Image Section */}
          <div className="relative lg:w-1/2 order-1 lg:order-2">
            <Image src={imageSrc} alt={heading} width={500} height={500} className="rounded-lg" />
          </div>
        </>
      ) : (
        <>
          {/* Image Section */}
          <div className="relative lg:w-1/2 order-1 lg:order-1">
            <Image src={imageSrc} alt={heading} width={500} height={500} className="rounded-lg" />
          </div>
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left px-4 lg:px-0 order-2 lg:order-2 mt-10 lg:mt-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1D263A] mb-6">
              {heading} <span className="text-primary">{subHeading}</span>
            </h2>
            {paragraphs.map((para, index) => (
              <p key={index} className="text-[#1D263A] mb-4">
                {para}
              </p>
            ))}
            <div className="w-36">

              <Button label={buttonText} classNames='rounded-lg' />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ContentCard;
