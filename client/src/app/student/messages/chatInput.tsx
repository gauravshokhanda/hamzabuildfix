import React from "react";
import upImage from "public/images/student/upImage.svg";
import upFile from "public/images/student/upFile.svg";
import emoji from "public/images/student/emoji.svg";
import voice from "public/images/student/voice.svg";
import Image from "next/image";

function ChatInput() {
  return (
    <div className="items-center p-2 md:p-3 bg-[#FBFBFB] rounded-lg mt-[40px]">
      <input
        type="text"
        placeholder="Type something..."
        className="flex-1 p-2 bg-transparent outline-none w-full"
      />
      <div className="flex items-center justify-between mt-[50px]">
        <div className="flex items-center gap-3 ml-3">
          <button className="text-gray-400 hover:text-gray-600">
            <Image src={upImage} alt="" />
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <Image src={upFile} alt="" />
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <Image src={emoji} alt="" />
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <Image src={voice} alt="" />
          </button>
        </div>
        <button className="md:w-[112px] ml-3 px-4 py-1 md:py-2 text-white bg-[#A3D154] rounded-md hover:bg-green-600">
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatInput;
