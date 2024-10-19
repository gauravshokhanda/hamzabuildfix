// FindTutor.tsx
import React from 'react';

import ContentCard from './ContentCard'; // Import the ContentCard component
import tutorGroupImage1 from '../../../public/images/landing-page/tutorGroup.png';


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
