import React from "react";
import missionImage from "public/images/about-us/mission.svg";
import visionImage from "public/images/about-us/vision.svg";
import Image from "next/image";
import Heading from "../components/Heading";

export default function Mission() {
  return (
    <div className=" py-20 bg-background_blue px-4">
      <div className=" flex md:flex-row flex-col justify-center gap-24">
        <MissionCard
          icon={missionImage}
          header="Mission"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris,Lorem ipsum dolor sit amet, consectetur."
        />
        <MissionCard
          icon={visionImage}
          header="Vision"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris,Lorem ipsum dolor sit amet, consectetur."
        />
      </div>
    </div>
  );
}

interface MissionProps {
  icon: string;
  header: string;
  paragraph: string;
}
const MissionCard: React.FC<MissionProps> = ({ icon, header, paragraph }) => {
  return (
    <div className=" flex flex-col gap-3 items-center text-center">
      <div className=" w-20 md:w-24">
        <Image src={icon} alt={header} />
      </div>
      <Heading title={header} />
      <p className=" text-gray max-w-80 md:text-xl md:max-w-96">{paragraph}</p>
    </div>
  );
};
