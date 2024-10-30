"use client";
import Searchbar from "../../components/admin-panel/ui/Searchbar";
import Image from "next/image";
import React from "react";
import avatar from "public/images/session-oversight/avatar.svg";

const Messages = () => {
  const messages = [
    { id: 1, name: "Daniel Berraldi", avatar },
    { id: 2, name: "James Atkinson", avatar, number: 3 },
    { id: 3, name: "Olivia James", avatar },
    { id: 4, name: "Rodrigo Mendez", avatar },
    { id: 4, name: "Michael Trippier", avatar, number: 3 },
  ];

  return (
    <div className="md:w-[376px] p-[24px] bg-[#F7F7F780]">
      <h1 className="text-[#3F3F44] font-bold">All Messages</h1>
      <div className="mt-[20px]">
        <Searchbar />
      </div>
      <h1 className="text-[#9a9999] text-[14px] mt-[20px] ml-[2px]">PINNED</h1>
      <div className="mt-[20px]">
        {messages.map((message) => (
          <div
            key={message.id}
            className="flex items-center justify-between mt-[20px]"
          >
            <div className="flex items-center gap-[12px]">
              <Image src={message.avatar} alt="" className="rounded-full" />
              <h1 className="text-[14px]">{message.name}</h1>
            </div>
            <div className="bg-[#A3D154] rounded-full px-1">
              <h1 className="text-[10px] font-bold">{message.number}</h1>
            </div>
          </div>
        ))}
        <div className="bg-[#A3D154] flex items-center justify-center w-[300px] h-[40px] mt-[40px] rounded-[8px]">
          <h1 className="text-[14px] font-bold text-white">New Message</h1>
        </div>
      </div>
    </div>
  );
};

export default Messages;
