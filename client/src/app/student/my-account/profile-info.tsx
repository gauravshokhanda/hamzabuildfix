import Image from "next/image";
import React from "react";
import avatar from "public/images/session-oversight/avatar.svg";
import download from "public/images/my-account/upload.svg";
import dropDown from "public/images/my-account/arrow_drop_down.svg";

const ProfileInfo = () => {
  return (
    <div>
      <div className="pt-[20px] md:pt-[0px] px-[18px] shadow-xl pb-[18px] rounded-[8px]">
        <div className="flex gap-[12px]">
          <Image src={avatar} alt="avatar" className="w-[40px] md:w-[80px]" />
          <div className="flex md:block items-center gap-[12px] text-[14px] leading-4">
            <div>
              <h1>Demi Wikinson</h1>
              <h1 className="font-bold">Designations</h1>
            </div>
            <div className="bg-[#ff66361a] flex gap-[4px] md:mt-[20px] px-[8px] py-[4px] rounded-full">
              <Image src={download} alt="download" />
              <h1 className="text-[9px] md:text-[12px] text-[#FF6636]">
                Change Profile Image
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-[24px]">
          <div className="flex w-full gap-[16px]">
            <div className="w-full">
              <h1 className="text-[14px]">First Name</h1>
              <input
                type="text"
                className="w-full border border-[#E9EAF0] mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5"
                placeholder="Alex"
              />
            </div>
            <div className="w-full">
              <h1 className="text-[14px]">First Name</h1>
              <input
                type="text"
                className="w-full border border-[#E9EAF0] mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5"
                placeholder="Thompson"
              />
            </div>
          </div>
          <div className="flex w-full gap-[16px] mt-[16px]">
            <div className="w-full">
              <h1 className="text-[14px]">Email</h1>
              <input
                type="email"
                className="w-full border border-[#E9EAF0] mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5"
                placeholder="Alex@gmail.com"
              />
            </div>
            <div className="w-full">
              <h1 className="text-[14px]">Country</h1>
              <input
                type="text"
                className="w-full border border-[#E9EAF0] mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5"
                placeholder="United Kingdom"
              />
            </div>
          </div>
          <div className="flex w-full gap-[16px] mt-[16px]">
            <div className="w-full">
              <h1 className="text-[14px]">City</h1>
              <input
                type="text"
                className="w-full border border-[#E9EAF0] mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5"
                placeholder="London"
              />
            </div>
            <div className="w-full">
              <h1 className="text-[14px]">Gender</h1>
              <input
                type="text"
                className="w-full border border-[#E9EAF0] mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5"
                placeholder="Male"
              />
            </div>
          </div>
          <div className="flex w-full gap-[16px] mt-[16px]">
            <div className="w-full">
              <h1 className="text-[14px]">Birth Date</h1>
              <input
                type="text"
                className="w-full border border-[#E9EAF0] mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5"
                placeholder="Dec-22, 1999"
              />
            </div>
            <div className="w-full">
              <h1 className="text-[14px]">WhatsApp Number</h1>
              <input
                type="number"
                className="w-full border border-[#E9EAF0] mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5"
                placeholder="+92 312 4049137"
              />
            </div>
          </div>
          <div className="flex w-full gap-[16px] mt-[16px]">
            <div className="w-full">
              <h1 className="text-[14px]">Parent WhatsApp Phone Number</h1>
              <input
                type="number"
                className="w-full border border-[#E9EAF0]  mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5"
                placeholder="+92 312 4049137"
              />
            </div>
            <div className="w-full mt-[21px] md:mt-[0px]">
              <h1 className="text-[14px]">School Name</h1>
              <input
                type="text"
                className="w-full border border-[#E9EAF0] mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5"
                placeholder="London Aspire School"
              />
            </div>
          </div>

          <div className="md:flex w-full gap-[16px] mt-[16px]">
            <div className="flex w-full gap-[10px]">
              <div className="w-full">
                <h1 className="text-[14px]">Preffered Languiage</h1>
                <select
                  className="w-full border border-[#E9EAF0] mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5 text-gray-500 appearance-none bg-no-repeat bg-right bg-[length:40px_25px]"
                  style={{ backgroundImage: `url(${dropDown.src})` }}
                >
                  <option value="english">English</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center md:justify-end mt-[15px] cursor-pointer">
          <div className="flex items-center justify-center w-full md:w-[158px] h-[42px] md:h-[52px] bg-[#FF6636]">
            <h1 className="text-white">Save Changes</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
