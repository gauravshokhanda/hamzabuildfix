// BackgroundShapes.tsx
import React from 'react';
import backgroundShape from "public/images/landing-page/shape-3.png.png"
import Image from 'next/image';

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

export default BackgroundShapes;
