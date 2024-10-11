import { IoLocationSharp } from "react-icons/io5";
import { TbClockHour4Filled } from "react-icons/tb";
import { MdOutlineWork } from "react-icons/md";
export default function Hero() {
  return (
    <div>
      <div className=" bg-background_blue py-20">
        <div className=" max-w-screen-lg m-auto">
          <div className=" text-header flex items-center flex-col gap-4 ">
            <h1 className=" text-3xl md:text-6xl font-semibold  ">
              Computer teacher
            </h1>
            <div className=" flex  gap-4 flex-wrap font-semibold text-sm">
              <p className=" flex items-center gap-1">
                <IoLocationSharp className=" text-secondary" />
                <span>Remote</span>
              </p>
              <p className=" flex items-center gap-1">
                <MdOutlineWork className=" text-secondary" />
                <span>Full-time</span>
              </p>
              <p className=" flex items-center gap-1">
                <TbClockHour4Filled className=" text-secondary" />
                <span>Posted 8 hours ago</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" max-w-screen-md m-auto py-20 px-4">
        <OverView />
      </div>
    </div>
  );
}

function OverView() {
  return (
    <div>
      <div className=" mb-10">
        <div className=" font-semibold text-header text-xl mb-4">
          Role overview:
        </div>
        <p className=" font-semibold text-[#707070] opacity-80 text-sm ">
          We are seeking a dedicated and knowledgeable IT Tutor to join our
          team. The IT Tutor will be responsible for providing expert
          instruction in various IT subjects, helping students to develop strong
          technical skills, and preparing them for success in their academic and
          professional careers.
        </p>
      </div>

      <div className=" mb-8">
        <div className=" font-semibold text-header text-xl mb-4">
          Roles and Responsibilities:
        </div>
        <div className=" mb-2 font-semibold text-[#707070]">
          Instruction and Teaching:
        </div>
        <ul className=" pl-4 list-disc flex flex-col gap-2 font-semibold text-[#707070] opacity-80 text-sm ">
          <li>
            Deliver engaging and effective lessons in IT-related subjects such
            as programming, networking, cybersecurity, and database management.
          </li>
          <li>
            Use a variety of teaching methods to accommodate different learning
            styles and ensure all students grasp the material.
          </li>
          <li>
            Provide personalized instruction and tutoring sessions to help
            students overcome challenges and improve their understanding of IT
            concepts
          </li>
          <li>
            Prepare lesson plans, assignments, and assessments that align with
            curriculum standards
          </li>
        </ul>
      </div>

      <div>
        <div className=" font-semibold text-header text-xl mb-4">
          Requirements:
        </div>
        <div className=" mb-2 font-semibold text-[#707070]">Education:</div>
        <ul className=" pl-4 list-disc flex flex-col gap-2 font-semibold text-[#707070] opacity-80 text-sm ">
          <li>
            A Bachelor’s degree in Information Technology, Computer Science, or
            a related field
          </li>
          <li>
            A Bachelor’s degree in Information Technology, Computer Science, or
            a related field
          </li>
        </ul>
        <div className=" mb-2 font-semibold text-[#707070]">Education:</div>
        <ul className=" pl-4 list-disc flex flex-col gap-2 font-semibold text-[#707070] opacity-80 text-sm ">
          <li>
            A Bachelor’s degree in Information Technology, Computer Science, or
            a related field
          </li>
          <li>
            A Bachelor’s degree in Information Technology, Computer Science, or
            a related field
          </li>
        </ul>
      </div>
    </div>
  );
}
