// HeroSection.tsx
import React from 'react';
import HeaderText from './HeaderText';
import FormSection from './FormSection';
import HeroImage from './HeroImage';

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

export default HeroSection;
