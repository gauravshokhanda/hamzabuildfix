// HeaderText.tsx
'use client'
import React from 'react';
import Button from '../../Button';
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

export default HeaderText;
