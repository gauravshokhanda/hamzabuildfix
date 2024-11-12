"use client";
import Image from "next/image";
import React, { useState }from "react";
import eye from "public/images/my-account/Eye.svg";
type CheckedState = {
  knowBuyers: boolean;
  knowReviewers: boolean;
  knowCommenters: boolean;
  knowDownloaders: boolean;
};

export const ChangePassword = () => {
  const [checkedState, setCheckedState] = useState<CheckedState>({
    knowBuyers: false,
    knowReviewers: false,
    knowCommenters: false,
    knowDownloaders: false,
  });



  const handleCheckboxChange = (name: keyof CheckedState) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };
  
  return (
    <div>
      <div className="md:w-[346px] px-[16px] shadow-2xl mt-[24px] md:mt-[0px] pb-[16px] rounded-[8px]">
        <h1 className="text-[24px] font-semibold ">Change Password</h1>
        <h1 className="text-[14px] mt-[24px]">Current Password</h1>
        <div className="relative flex items-center">
          <input
            type="password"
            className="border h-[35px] mt-[6px] md:h-[42px] px-2 md:px-5 pr-10 w-full"
            placeholder="Password"
          />
          <Image
            src={eye}
            alt="eye"
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          />
        </div>
        <h1 className="text-[14px] mt-[24px]">New Password</h1>
        <div className="relative flex items-center">
          <input
            type="password"
            className="border h-[35px] mt-[6px] md:h-[42px] px-2 md:px-5 pr-10 w-full"
            placeholder="New Password"
          />
          <Image
            src={eye}
            alt="eye"
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          />
        </div>
        <h1 className="text-[14px] mt-[24px]">Confirm Password</h1>
        <div className="relative flex items-center">
          <input
            type="password"
            className="border h-[35px] mt-[6px] md:h-[42px] px-2 md:px-5 pr-10 w-full"
            placeholder="Confirm New Password"
          />
          <Image
            src={eye}
            alt="eye"
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          />
        </div>
        <div className="bg-[#FF6636] flex items-center justify-center mt-[24px] w-[200px] h-[40px] md:h-[50px] rounded-[7px]">
          <h1 className="text-white font-semibold">Change Password</h1>
        </div>
      </div>
      <div className="md:w-[346px] px-[16px] shadow-2xl mt-[24px] md:mt-[24px] pb-[16px] rounded-[8px] pt-[16px]">
        <h1 className="text-[24px] font-semibold ">Notifications</h1>
        <div>
          <input type="checkbox" className="mt-[16px]" checked={checkedState.knowBuyers} onChange={() => handleCheckboxChange('knowBuyers')} />
          <label htmlFor="" className="ml-[10px]" style={{ color: checkedState.knowBuyers ? 'black' : '#7F8493' }}>
            I want to know who buy my course.
          </label>
        </div>
        <div>
          <input type="checkbox" className="mt-[16px]" 
          checked={checkedState.knowReviewers}
          onChange={() => handleCheckboxChange('knowReviewers')} />
          <label htmlFor="" className="ml-[10px]" 
          style={{ color:checkedState.knowReviewers ? 'black' : '#7F8493' }}>
            I want to know who write a review on my course.
          </label>
        </div>
        <div>
          <input type="checkbox" className="mt-[16px]" 
            checked={checkedState.knowCommenters}
            onChange={() => handleCheckboxChange('knowCommenters')} />
          <label htmlFor="" className="ml-[10px] text-gray-500" 
            style={{ color: checkedState.knowCommenters ? 'black' : '#7F8493' }}

          >
            I want to know who commented on my lecture.
          </label>
        </div>
        <div>
          <input type="checkbox" className="mt-[16px]" 
            checked={checkedState.knowDownloaders}
            onChange={() => handleCheckboxChange('knowDownloaders')}
             />
          <label htmlFor="" className="ml-[10px]"
            style={{ color: checkedState.knowDownloaders ? 'black' : '#7F8493' }}
           >
            I want to know who download my lecture notes.
          </label>
        </div>

        <div className="bg-[#FF6636] flex items-center justify-center mt-[24px] w-[200px] h-[40px] md:h-[50px] rounded-[7px]">
          <h1 className="text-white font-semibold">Save Changes</h1>
        </div>
      </div>
    </div>
  );
};
