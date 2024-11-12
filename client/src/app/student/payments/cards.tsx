"use client";
import Image from "next/image";
import React, { useState } from "react";
import tabs from "public/images/student/Tabs.svg";
import master from "public/images/student/Mastercard.svg";
import mastercardLogo from "public/images/student/masterCardLogo.png";

const cardData = [
  { id: 1, balance: 4560, lastFour: 4456, name: 'Lloyd Lyons', bank: 'My Bank', color: 'bg-secondary', logo: 'mastercard' },
  { id: 2, balance: 6753, lastFour: 6753, name: 'Jane Doe', bank: 'My Bank', color: 'bg-cardiary', logo: 'mastercard' },
  { id: 1, balance: 4560, lastFour: 4456, name: 'Lloyd Lyons', bank: 'My Bank', color: 'bg-yellowish', logo: 'mastercard' },
  { id: 2, balance: 6753, lastFour: 6753, name: 'Jane Doe', bank: 'My Bank', color: 'bg-shade', logo: 'mastercard' },
];

const Cards = () => {
  const [selectedCard, setSelectedCard] = useState(cardData[0]); // Initialize with the first card

  return (
    <div>
      <div className="flex items-center space-y-4">
        {/* Enlarged Card View */}
        {selectedCard && (
          <div className={`p-8 rounded-lg ${selectedCard.color} w-80 text-white shadow-[5px_41px_32px_0px_#f7eddc] relative flex justify-between`}>

            <div className="left">
              {/* Card Balance */}
              <h2 className="text-3xl font-bold mb-4">${selectedCard.balance}</h2>

              {/* Card Number with masked last four digits */}
              <p className="text-sm mt-2 font-bold text-gray-300">
                <span className="mx-1">....</span>
                <span className="mx-1">....</span>
                <span className="mx-1">....</span>
                {selectedCard.lastFour}
              </p>

              {/* Name */}
              <p className="text-sm mt-4 text-gray-400">{selectedCard.name}</p>
            </div>

            {/* Bank Name */}
            <div className="flex justify-end mb-4">
              <p className="text-lg">{selectedCard.bank}</p>
            </div>

            {/* Mastercard Logo */}
            <img
              src={mastercardLogo}
              alt=" Logo"
              className="absolute bottom-4 right-4 w-10 h-10"
            />
          </div>
        )}

        {/* Scrollable Card List */}
        <div className="flex flex-col space-y-4 overflow-y-auto h-[200px] mx-5">
          {cardData.map((card) => (
            <div
              key={card.id}
              className={`p-4 rounded-md ${card.color} w-16 h-10 flex flex-col justify-between items-start 
              text-white cursor-pointer relative`}
              onClick={() => setSelectedCard(card)}
            >
              <p className="text-xs">{card.lastFour}</p>

              {/* Mastercard Logo */}
              <img
                src={mastercardLogo}
                alt="Mastercard Logo"
                className="absolute bottom-1 right-1 w-4 h-4"
              />
            </div>
          ))}
        </div>
      </div>


      {/* Additional Text and Form */}
      <h1 className="hidden md:block mt-[20px] md:mt-[40px] md:text-[22px] font-medium">
        Once adding a payment information, Tafawwaq will deduct a $1 fee which{" "}
        <br />
        will be reversed within 5 business days.
      </h1>
      <h1 className="md:hidden mt-[20px] md:mt-[40px] md:text-[22px] font-medium">
        Once adding a payment information, Tafawwaq will deduct a $1 fee which{" "}
        will be reversed within 5 business days.
      </h1>

      {/* Credit Card Details Form */}
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
            <h1 className="text-[14px]">Last Name</h1>
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
