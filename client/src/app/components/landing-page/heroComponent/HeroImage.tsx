// HeroImage.tsx
import React from 'react';
import Image from 'next/image';
import heroImage from 'public/images/landing-page/hero.png';

const HeroImage: React.FC = () => {
  return (
    <div className=" hidden    md:p-8 relative md:flex items-center justify-center md:h-auto ">
      <Image
        src={heroImage}
        alt="Hero Image"

        className='object-cover'
        quality={100}
        height={400}
        width={400}
      />
    </div>
  );
};

export default HeroImage;
