import React from "react";
import dropDown from "public/images/my-account/arrow_drop_down.svg";
import primary from "public/images/my-account/primary.svg";
import secondary from "public/images/my-account/secondary.svg";

const Settings = () => {
  return (
    <div className="shadow-xl px-[16px] pb-[24px] rounded-[8px] pt-[20px] md:pt-[0px]">
      <h1 className="text-[18px] font-bold">Settings</h1>
      <div className="mt-[10px] p-[16px] shadow-xl rounded-[8px]">
        <h1 className="text-[14px]">Default Language</h1>
        <div className="mt-[5px] flex gap-[6px]">
          <select
            className="w-full border mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5 text-gray-500 appearance-none bg-no-repeat bg-right bg-[length:40px_30px] md:bg-[length:75px_45px]"
            style={{
              backgroundImage: `url(${primary.src})`,
              backgroundPosition: "right 15px center",
            }}
          >
            <option value="primary">English</option>
          </select>
          <select
            className="w-full border mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5 text-gray-500 appearance-none bg-no-repeat bg-right bg-[length:50px_30px] md:bg-[length:95px_45px]"
            style={{
              backgroundImage: `url(${secondary.src})`,
              backgroundPosition: "right 15px center",
            }}
          >
            <option value="primary">French</option>
          </select>
          <div className="w-[20%] flex items-center justify-center cursor-pointer mt-[8px] md:mt-[0px]">
            <h1 className="text-[#00ADEF] underline font-semibold text-[12px] md:text-[16px]">
              +Add more
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-[10px] p-[16px] shadow-xl rounded-[8px]">
        <h1 className="text-[14px]">Preffered Currency</h1>
        <div className="mt-[5px] flex gap-[6px]">
          <select
            className="w-full border mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5 text-gray-500 appearance-none bg-no-repeat bg-right bg-[length:40px_25px]"
            style={{ backgroundImage: `url(${dropDown.src})` }}
          >
            <option value="primary">USD</option>
          </select>
        </div>
      </div>
      <div className="mt-[10px] p-[16px] shadow-xl rounded-[8px]">
        <h1 className="text-[14px]">Two-Factor Authentication</h1>
        <div className="mt-[5px] flex gap-[6px]">
          <select
            className="w-full border mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5 text-gray-500 appearance-none bg-no-repeat bg-right bg-[length:40px_25px]"
            style={{ backgroundImage: `url(${dropDown.src})` }}
          >
            <option value="primary">Select Method</option>
          </select>
          <input
            type="number"
            className="w-full border mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5 text-gray-500"
            placeholder="Enter Code to Verify"
          />
        </div>
        <div className="flex items-center justify-end">
          <div className="bg-[#FF6636] flex items-center justify-center mt-[24px] w-[200px] h-[40px] md:h-[50px] rounded-[7px]">
            <h1 className="text-white font-semibold">Submit</h1>
          </div>
        </div>
      </div>
      <div className="mt-[10px] p-[16px] shadow-xl rounded-[8px]">
        <h1 className="text-[14px]">Sessions</h1>
        <div className="mt-[5px] flex gap-[6px]">
          <select
            className="w-full border mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5 text-gray-500 appearance-none bg-no-repeat bg-right bg-[length:40px_25px]"
            style={{ backgroundImage: `url(${dropDown.src})` }}
          >
            <option value="primary">Select Sessions</option>
          </select>
        </div>
        <div className="flex items-center justify-end">
          <div className="bg-[#FF0000] flex items-center justify-center mt-[24px] w-[200px] h-[40px] md:h-[50px] rounded-[7px]">
            <h1 className="text-white font-semibold">Deactivate my Account</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
