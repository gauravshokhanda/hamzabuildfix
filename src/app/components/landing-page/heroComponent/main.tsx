// FormSection.tsx
import React from 'react';
import BackgroundShapes from './BackgroundShapes';
import HeroSection from './HeroSection';

const FormSection: React.FC = () => {
  return (
    <div className="text-black md:min-h-[60vh] lg:min-h-screen pt-10 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Shape */}
      <BackgroundShapes />
      <HeroSection />
    </div>
  );
};

export default FormSection;
