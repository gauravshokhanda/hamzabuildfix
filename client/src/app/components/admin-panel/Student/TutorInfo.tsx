import React from "react";
import Tags from "./Tags";
import Rating from "./Rating";
import Image from "next/image";

const TutorInfo: React.FC = () => {
  return (
    <div>
      <div className="flex items-start gap-4">
        <Image
          src="https://images.unsplash.com/photo-1711349172907-64fa401f605d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHdhbGxwYXBlciUyMDRrfGVufDB8fDB8fHww"
          alt="Tutor"
          className="rounded-md aspect-square w-full max-w-[177px] object-cover"
          width={100}
          height={100}
        />
        <div>
          <h1 className="text-2xl font-semibold">Alexson David</h1>
          <p className="text-secondary text-lg font-medium">English expert</p>
          <p className="text-2xl font-semibold mt-1">$145/hr</p>
          <Tags tags={["English", "French", "Spanish", "Italian"]} />
          <Rating rating={4.5} reviews={178} />
        </div>
      </div>
      <p className="text-gray-600 mt-2 text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s,
      </p>
    </div>
  );
};

export default TutorInfo;
