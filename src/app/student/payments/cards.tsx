import Image from "next/image";
import React from "react";
import tabs from "../../public/images/student/Tabs.svg";
import master from "../../public/images/student/Mastercard.svg";

const Cards = () => {
  return (
    <div>
      <div className="flex gap-[18px]">
        <div className="bg-[#A3D154] p-[20px] md:p-[30px] rounded-[10px] w-[350px]">
          <div className="flex items-center justify-between text-white">
            <h1 className="font-bold text-[22px] md:text-[35px]">$ 4 560</h1>
            <h1 className="font-bold md:text-[18px]">My Bank</h1>
          </div>
          <h1 className="text-white font-bold md:text-[25px] mt-[18px]">
            .... .... .... 4456
          </h1>
          <div className="flex items-center justify-between mt-[18px]">
            <h1 className="text-white font-bold">Lloyd Lyons</h1>
            <Image src={master} alt="" />
          </div>
        </div>
        <Image src={tabs} alt="" />
      </div>
      <h1 className="hidden md:block mt-[20px] md:mt-[40px] md:text-[22px] font-medium">
        Once adding a payment information, Tafawwaq will deduct a $1 free which{" "}
        <br />
        will be reversed with 5 business days
      </h1>
      <h1 className="md:hidden mt-[20px] md:mt-[40px] md:text-[22px] font-medium">
        Once adding a payment information, Tafawwaq will deduct a $1 free which{" "}
        will be reversed with 5 business days
      </h1>
      <div className="mt-[20px] md:mt-[40px]">
        <h1 className="text-[20px] md:text-[22px] font-medium">
          Credit Card Details:
        </h1>
        <div className="flex w-full gap-[16px] mt-[20px]">
          <div className="w-full">
            <h1 className="text-[14px]">First Name</h1>
            <input
              type="text"
              className="w-full bg-[#F7F7F7] mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5 rounded-[8px]"
              placeholder="Alex"
            />
          </div>
          <div className="w-full">
            <h1 className="text-[14px]">First Name</h1>
            <input
              type="text"
              className="w-full bg-[#F7F7F7] mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5 rounded-[8px]"
              placeholder="Thompson"
            />
          </div>
        </div>
        <div className="flex w-full gap-[16px] mt-[20px]">
          <div className="w-full">
            <h1 className="text-[14px]">Card Number</h1>
            <input
              type="text"
              className="w-full bg-[#F7F7F7] mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5 rounded-[8px]"
              placeholder=".... .... .... 4325"
            />
          </div>
          <div className="w-full">
            <h1 className="text-[14px]">Expiry date</h1>
            <input
              type="text"
              className="w-full bg-[#F7F7F7] mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5 rounded-[8px]"
              placeholder="12-12-24"
            />
          </div>
          <div className="w-full">
            <h1 className="text-[14px]">CVV</h1>
            <input
              type="text"
              className="w-full bg-[#F7F7F7] mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5 rounded-[8px]"
              placeholder="..."
            />
          </div>
        </div>
        <div className="flex items-center justify-center cursor-pointer">
          <div className="bg-[#A3D154] w-full md:w-[213px] h-[40px] flex items-center justify-center rounded-[8px] mt-[30px]">
            <h1 className="text-white">Save</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
