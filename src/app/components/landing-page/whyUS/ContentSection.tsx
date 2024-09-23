// ContentSection.tsx
'use client'
import React from 'react';
import Button from '../../Button';

const ContentSection: React.FC = () => {
  return (
    <div className="lg:w-1/2">
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
        Why should <span className="text-primary">teach in our platform</span>
      </h2>
      <p className="text-gray-600 mb-4">
        Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit amet aliquet.
        Vestibulum maximus lacinia massa non porttitor.
      </p>
      <p className="text-gray-600 mb-6">
        Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit amet aliquet.
        Vestibulum maximus lacinia massa non porttitor.
      </p>
      <div className='w-48'>

        <Button label={"Become a teacher"} classNames="rounded-lg" />
      </div>
    </div>
  );
};

export default ContentSection;
