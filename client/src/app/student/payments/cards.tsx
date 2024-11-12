"use client"
import Image from "next/image";
import React, { useState } from "react";
import tabs from "public/images/student/Tabs.svg";
import master from "public/images/student/Mastercard.svg";

const cardData = [
  { id: 1, balance: 4560, lastFour: 4456, name: 'Lloyd Lyons', bank: 'My Bank', color: 'bg-green-400', logo: 'mastercard' },
  { id: 2, balance: 6753, lastFour: 6753, name: 'Jane Doe', bank: 'My Bank', color: 'bg-purple-400', logo: 'mastercard' },
  { id: 3, balance: 9875, lastFour: 9875, name: 'John Smith', bank: 'My Bank', color: 'bg-gray-600', logo: 'visa' },
  { id: 4, balance: 7875, lastFour: 7875, name: 'ahan Smith', bank: 'My Bank', color: 'bg-black-600', logo: 'mastercard' },
];

const Cards = () => {
  const [selectedCard, setSelectedCard] = useState(cardData);
  return (
    <div>
      <div className="flex items-start space-x-4">
        {/* Enlarged Card View */}
        {selectedCard && (
          <div className={`p-6 rounded-lg ${selectedCard.color} w-80 text-white`}>
            <h2 className="text-2xl font-bold">${selectedCard.balance}</h2>
            <p className="text-sm mt-1">.... .... .... {selectedCard.lastFour}</p>
            <p className="text-lg font-semibold mt-4">{selectedCard.bank}</p>
            <p className="text-sm mt-2">{selectedCard.name}</p>
          </div>
        )}

        {/* Scrollable Card List */}
        <div className="flex flex-col space-y-4 overflow-y-scroll py-4 h-80">
          {cardData.map(card => (
            <div
              key={card.id}
              className={`p-4 rounded-lg ${card.color} w-32 h-20 flex flex-col justify-between items-start text-white cursor-pointer`}
              onClick={() => setSelectedCard(card)}
            >
              <p className="text-xs">.... {card.lastFour}</p>
              <div className="text-sm font-bold">{card.logo === 'mastercard' ? 'Mastercard' : 'Visa'}</div>
            </div>
          ))}
        </div>
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
