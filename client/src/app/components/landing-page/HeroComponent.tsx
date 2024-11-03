'use client'
import backgroundShape from "public/images/landing-page/shape-3.png.png"
import Image from 'next/image';
import React from 'react';
import Button from '../Button';
import heroImage from 'public/images/landing-page/hero.png';
import searchIcon from 'public/images/landing-page/searchIcon.png';
import bottomArrow from 'public/images/landing-page/bottomArrow.png';

const HeroComponent: React.FC = () => {
  return (
    <div className="text-black bg-white pb-10 pt-10 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Shape */}
      <BackgroundShapes />
      <HeroSection />
    </div>
  );
};

export default HeroComponent

const HeroSection: React.FC = () => {
  return (
    <div className="w-full  max-w-[1400px] mx-auto px-4 lg:px-8 flex flex-col md:flex-row md:justify-around items-center justify-between relative z-10 gap-6">

      <div className="flex flex-col items-start space-y-5 mb-5 md:mb-0 md:w-[60%]">
        <HeaderText />
        <FormSection />
      </div>

      {/* Hero Image Section */}
      <HeroImage />
    </div>
  );
};

const BackgroundShapes: React.FC = () => {
  return (
    <>
      <div className="absolute -top-16 -right-16 opacity-120">
        <Image
          src={backgroundShape}
          alt="background shape"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden lg:block absolute top-0 left-0 w-48 h-48 bg-primary rounded-full opacity-80 transform -translate-x-16 -translate-y-16"></div>
      <div className="hidden lg:block absolute bottom-0 right-0 w-48 h-48 bg-[#A3D154] rounded-full opacity-80 transform translate-x-16 translate-y-16"></div>
    </>
  );
};


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

const HeaderText: React.FC = () => {
  return (
    <>
      <div className="text-primary text-sm uppercase tracking-wide font-semibold">
        Platform for learning
      </div>
      <h1 className="text-4xl font-bold leading-normal md:text-5xl lg:text-6xl">
        Build a global experience <br /> that customers love
      </h1>

      <div className="w-48 ">
        <Button label='Get Started' classNames='rounded-lg' />
      </div>

    </>
  );
};




const FormSection: React.FC = () => {
  return (
    <div className="mt-4 flex flex-col md:flex-row md:space-x-4 w-full space-y-4 md:space-y-0">
      <div className="relative w-full md:w-1/4">
        <select
          className="border border-gray-300 focus:border-primary focus:outline-none rounded-lg px-4 py-2 w-full appearance-none bg-white text-left pr-10"
          style={{
            backgroundImage: `url(${bottomArrow.src})`,
            backgroundSize: '16px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 10px center',
          }}
        >
          <option>Curriculum</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="relative w-full md:w-1/4">
        <select
          className="border border-gray-300 focus:border-primary focus:outline-none rounded-lg px-4 py-2 w-full appearance-none bg-white text-left pr-10"
          style={{
            backgroundImage: `url(${bottomArrow.src})`,
            backgroundSize: '16px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 10px center',
          }}
        >
          <option>Level</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="relative w-full md:flex-1">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:border-primary focus:outline-none"
        />
      </div>
      <button className="flex justify-center items-center px-6 py-2 bg-primary text-white rounded-lg w-full md:w-auto">
        <Image src={searchIcon} alt="Search" width={24} height={24} />
      </button>
    </div>
  );
};

