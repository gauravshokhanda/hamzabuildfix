import React from 'react';
import Image from 'next/image';
import searchIcon from '../../../public/images/landing-page/searchIcon.png';
import bottomArrow from '../../../public/images/landing-page/bottomArrow.png';

const FormSection: React.FC = () => {
  return (
    <div className="mt-4 flex flex-col md:flex-row md:space-x-4 w-full space-y-4 md:space-y-0">
      <div className="relative w-full md:w-1/4">
        <select
          className="border border-gray-300 focus:border-primary focus:outline-none rounded-lg px-4 py-2 w-full appearance-none bg-white text-left"
          style={{ backgroundImage: `url(${bottomArrow.src})`, backgroundSize: '16px', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center' }}
        >
          <option>Curriculum</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="relative w-full md:w-1/4">
        <select
          className="border border-gray-300 focus:border-primary focus:outline-none rounded-lg px-4 py-2 w-full appearance-none bg-white text-left"
          style={{ backgroundImage: `url(${bottomArrow.src})`, backgroundSize: '16px', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center' }}
        >
          <option>Level</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="relative w-full  md:flex-1">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:border-primary focus:outline-none"
        />
      </div>
      <button className="flex justify-center items-center  px-6 py-2 bg-primary text-white rounded-lg w-full md:w-auto">
        <Image src={searchIcon} alt="Search" width={24} height={24} />
      </button>
    </div>
  );
};

export default FormSection;
