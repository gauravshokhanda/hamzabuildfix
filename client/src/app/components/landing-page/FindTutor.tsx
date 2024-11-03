'use client'
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Button from '../Button';
import React from 'react';

import tutorGroupImage1 from 'public/images/landing-page/tutorGroup.png';


const FindTutor: React.FC = () => {
  return (
    <div className='bg-[#F6F8FA]'>

      <div className="flex flex-col items-center py-16">
        {/* Top Centered Heading and Paragraph */}
        <div className="w-full text-center px-8 md:px-2">
          <h3 className="text-4xl lg:text-5xl font-semibold text-[#1D263A] mb-2">
            Let&apos;s See <span className="text-primary">How it Works</span>
          </h3>
          <p className="text-[#1D263A] text-base">
            Follow these simple steps to start your learning journey with us.
          </p>
        </div>

        {/* Four Content Sections */}
        <ContentCard
          heading="Find A Suitable"
          subHeading="Tutor"
          paragraphs={[
            "Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Craspretium suscipit tellus sit amet aliquet. Vestibulum maximus lacinia massa non porttitor. Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit amet aliquet. Vestibulum maximus lacinia massa non porttitor",
            "Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Craspretium suscipit tellus sit amet aliquet.Vestibulum maximus lacinia massa non porttitor.",
            "Vestibulum maximus lacinia massa non porttitor."
          ]}
          buttonText="Learn More"
          imageSrc={tutorGroupImage1}
          isImageRight={true} // Image on the right
        />

        <ContentCard
          heading="Chat with your"
          subHeading="Tutor"
          paragraphs={[
            "Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Craspretium suscipit tellus sit amet aliquet. Vestibulum maximus lacinia massa non porttitor. Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit amet aliquet. Vestibulum maximus lacinia massa non porttitor",
            "Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Craspretium suscipit tellus sit amet aliquet.Vestibulum maximus lacinia massa non porttitor.",
            "Vestibulum maximus lacinia massa non porttitor."
          ]}
          buttonText="Get Started"
          imageSrc={tutorGroupImage1}
          isImageRight={false} // Image on the left
        />

        <ContentCard
          heading="Book a "
          subHeading="Lesson"
          paragraphs={[
            "Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Craspretium suscipit tellus sit amet aliquet. Vestibulum maximus lacinia massa non porttitor. Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit amet aliquet. Vestibulum maximus lacinia massa non porttitor",
            "Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Craspretium suscipit tellus sit amet aliquet.Vestibulum maximus lacinia massa non porttitor.",
            "Vestibulum maximus lacinia massa non porttitor."
          ]}
          buttonText="Discover More"
          imageSrc={tutorGroupImage1}
          isImageRight={true} // Image on the right
        />

        <ContentCard
          heading="Meet at out"
          subHeading="Video Conference"
          paragraphs={[
            "Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Craspretium suscipit tellus sit amet aliquet. Vestibulum maximus lacinia massa non porttitor. Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit amet aliquet. Vestibulum maximus lacinia massa non porttitor",
            "Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Craspretium suscipit tellus sit amet aliquet.Vestibulum maximus lacinia massa non porttitor.",
            "Vestibulum maximus lacinia massa non porttitor."
          ]}
          buttonText="Join Us"
          imageSrc={tutorGroupImage1}
          isImageRight={false} // Image on the left
        />
      </div>
    </div>
  );
};

export default FindTutor;


// ContentCard.tsx

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
    <div className="px-6 lg:px-16 py-10 flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-7xl mx-auto lg:space-x-20 my-4">
      {/* Left or Right Section: Image */}
      {isImageRight ? (
        <>
          {/* Text Section */}
          <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4  lg:px-0 order-2 lg:order-1 mt-6 lg:mt-8">
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
          <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4 lg:px-0 order-2 lg:order-2 mt-10 lg:mt-12">
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

