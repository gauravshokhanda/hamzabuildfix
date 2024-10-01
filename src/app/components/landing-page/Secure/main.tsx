// components/SecureLearningEnvironment.tsx
import React from 'react';
import Card from './Card';
import logo1 from '../../../public/images/landing-page/security1.png';
import logo2 from '../../../public/images/landing-page/securty2.png';

const SecureLearningEnvironment: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] py-16 px-4 lg:px-8">
      <div className="max-w-7xl  p-6 md:p-12 mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Secure and Safe Learning <br />Environment
        </h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card
            icon={logo1}
            iconAlt="Privacy and Safety Logo"
            title="Privacy and Safety"
            description="Ensuring privacy and safety in every session."
            buttonLabel="Sign Up"
          />

          <Card
            icon={logo2}
            iconAlt="Compliance Logo"
            title="Compliance"
            description="Adherence to necessary regulations and standards."
            buttonLabel="Sign Up"
          />
        </div>
      </div>
    </div>
  );
};

export default SecureLearningEnvironment;
