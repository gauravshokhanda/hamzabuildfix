import Image from "next/image";
import React from "react";
import avatar from "../../public/images/session-oversight/avatar.svg";

type Recording = {
  videoUrl: string;
  subject: string;
  description: string;
  presenterName: string;
  date: string;
};

const recordingsData: Recording[] = [
  {
    videoUrl: "https://www.youtube.com/embed/U4aFbyzrTdc",
    subject: "English",
    description: "How do you create compelling presentations that wow your...",
    presenterName: "Jerome Bell",
    date: "20 Jan 2022",
  },
  {
    videoUrl: "https://www.youtube.com/embed/U4aFbyzrTdc",
    subject: "English",
    description: "How do you create compelling presentations that wow your...",
    presenterName: "Jerome Bell",
    date: "20 Jan 2022",
  },
  {
    videoUrl: "https://www.youtube.com/embed/U4aFbyzrTdc",
    subject: "English",
    description: "How do you create compelling presentations that wow your...",
    presenterName: "Jerome Bell",
    date: "20 Jan 2022",
  },
  {
    videoUrl: "https://www.youtube.com/embed/U4aFbyzrTdc",
    subject: "English",
    description: "How do you create compelling presentations that wow your...",
    presenterName: "Jerome Bell",
    date: "20 Jan 2022",
  },
  {
    videoUrl: "https://www.youtube.com/embed/U4aFbyzrTdc",
    subject: "English",
    description: "How do you create compelling presentations that wow your...",
    presenterName: "Jerome Bell",
    date: "20 Jan 2022",
  },
  {
    videoUrl: "https://www.youtube.com/embed/U4aFbyzrTdc",
    subject: "English",
    description: "How do you create compelling presentations that wow your...",
    presenterName: "Jerome Bell",
    date: "20 Jan 2022",
  },
];

const Recordings: React.FC = () => {
  return (
    <div className="pt-[20px] md:pt-[0px] px-[14px] md:px-[0px] pb-[20px] md:pb-[0px]">
      <h1 className="text-[18px] font-bold">Settings</h1>
      <div>
        <h1 className="mt-[10px]">
          <span className="text-[#FF3939] text-[14px]">Note:</span> The
          recordings will be available on the platform for 20 days.
        </h1>
      </div>
      <div className="flex md:gap-[12px] 2xl:gap-[24px] flex-wrap">
        {recordingsData.map((recording, index) => (
          <div
            key={index}
            className="mt-[24px] shadow-lg rounded-[16px] px-[14px] pb-[16px] md:w-[350px] 2xl:w-[430px]"
          >
            <iframe
              src={recording.videoUrl}
              title={`YouTube video player ${index}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="mt-[24px] rounded-md w-full h-[280px]"
            ></iframe>
            <div>
              <h1 className="text-[18px] mt-[32px]">
                Subject name: {recording.subject}
              </h1>
              <h1 className="mt-[8px] text-wrap">
                Description: {recording.description}
              </h1>
            </div>
            <div className="flex mt-[24px] gap-[12px]">
              <Image src={avatar} alt="avatar" className="rounded-full" />
              <div>
                <h1 className="font-semibold text-[14px]">
                  {recording.presenterName}
                </h1>
                <h1 className="font-normal text-[14px]">{recording.date}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recordings;
