// HeaderText.tsx
'use client'
import React from 'react';
import Button from '../../Button'
const HeaderText: React.FC = () => {
  return (
    <>
      <div className="text-primary text-sm uppercase tracking-wide font-semibold">
        Platform for learning
      </div>
      <h1 className="text-4xl font-bold leading-normal md:text-5xl lg:text-6xl">
        Build a global experience <br /> that customers love
      </h1>

      <button className="mt-6 px-6 py-3 text-white bg-primary hover:opacity-70 rounded-lg">
          Get Started
        </button>
   

    </>
  );
};

export default HeaderText;
