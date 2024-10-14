import React from "react";
import avatar from "../../public/images/session-oversight/avatar.svg";
import Image from "next/image";
import pin from "../../public/images/student/pin.svg";
import threedot from "../../public/images/session-oversight/threedot.svg";
import seen from "../../public/images/student/seen.svg";
import ChatInput from "./chatInput";

const Chatbox = () => {
  return (
    <div className="p-[16px] md:p-[24px] shadow-lg rounded-[16px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[12px] text-[#3F3F44] font-medium">
          <Image src={avatar} alt="" className="w-[50px] rounded-full" />
          <div>
            <h1>Ilkay Olivier</h1>
            <div className="flex items-center gap-[4px]">
              <div className="p-1 bg-[#CCEABB] w-2 rounded-full">
                <h1></h1>
              </div>
              <h1>Online</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[22px]">
          <Image src={pin} alt="" />
          <Image src={threedot} alt="" />
        </div>
      </div>
      <hr className="border-t border-[#c0bebe] mt-[30px]" />
      <div>
        <div className="mt-[40px]">
          <div className="flex items-center justify-end">
            <div className="px-[24px] py-[12px] bg-[#3F3F44] rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[8px]">
              <h1 className="text-[#FFFFFF] text-[12px]">
                Morbi vitae leo sed nunc
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <div className="mt-[8px] flex items-center gap-[10px]">
              <h1 className="text-[14px] text-[#a09e9e]">08.30 AM</h1>
              <Image src={seen} alt="" />
            </div>
          </div>
        </div>
        <div className="mt-[40px]">
          <div className="flex items-center">
            <div className="px-[24px] py-[12px] bg-[#F1F1F1] rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px]">
              <h1 className="text-[#737272] text-[12px]">
                Ut volutpat pulvinar ullamcorper
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-[40px]">
          <div className="flex items-center justify-end">
            <div className="px-[24px] py-[12px] bg-[#3F3F44] rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[8px]">
              <h1 className="text-[#FFFFFF] text-[12px]">
                Curabitur interdum, sapien eu phare tra efficitur, ipsum erat.
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <div className="mt-[8px] flex items-center gap-[10px]">
              <h1 className="text-[14px] text-[#a09e9e]">08.30 AM</h1>
              <Image src={seen} alt="" />
            </div>
          </div>
        </div>
        <div className="mt-[40px]">
          <div className="flex items-center gap-[10px]">
            <h1 className="text-[#959494]">Typing</h1>
            <div className="flex items-center gap-[2px]">
              <div className="p-1 bg-[#cccdcb] w-2 rounded-full">
                <h1></h1>
              </div>
              <div className="p-[3px] bg-[#cccdcb] w-1 rounded-full">
                <h1></h1>
              </div>
              <div className="p-[2px] bg-[#cccdcb] w-1 rounded-full">
                <h1></h1>
              </div>
            </div>
          </div>
        </div>
        <ChatInput />
      </div>
    </div>
  );
};

export default Chatbox;
