import Image from "next/image";
import React from "react";
import avatar from "../../public/images/session-oversight/avatar.svg";
import download from "../../public/images/my-account/upload.svg";
import help from "../../public/images/my-account/help.svg";
import dropDown from "../../public/images/my-account/arrow_drop_down.svg";
import usd from "../../public/images/my-account/usd.svg";
import days from "../../public/images/my-account/days.svg";
import select from "../../public/images/my-account/select.svg";

const ProfileInfo = () => {
  return (
    <div>
      <div className="pt-[20px] md:pt-[0px] px-[18px] shadow-2xl pb-[18px] rounded-[8px]">
        <div className="flex gap-[12px]">
          <Image src={avatar} alt="avatar" className="w-[40px] md:w-[80px]" />
          <div className="flex md:block items-center gap-[12px] text-[14px] leading-4">
            <div>
              <h1>Demi Wikinson</h1>
              <h1 className="font-bold">Designations</h1>
            </div>
            <div className="bg-[#ff66361a] flex gap-[4px] md:mt-[20px] px-[8px] py-[4px] rounded-full">
              <Image src={download} alt="download" />
              <h1 className="text-[9px] md:text-[12px] text-[#FF6636]">
                Change Profile Image
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-[24px]">
          <div className="flex w-full gap-[16px]">
            <div className="w-full">
              <h1 className="text-[14px]">First Name</h1>
              <input
                type="text"
                className="w-full border mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5"
                placeholder="Alex"
              />
            </div>
            <div className="w-full">
              <h1 className="text-[14px]">First Name</h1>
              <input
                type="text"
                className="w-full border mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5"
                placeholder="Thompson"
              />
            </div>
          </div>
          <div className="flex w-full gap-[16px] mt-[16px]">
            <div className="w-full">
              <h1 className="text-[14px]">Email</h1>
              <input
                type="email"
                className="w-full border mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5"
                placeholder="Alex@gmail.com"
              />
            </div>
            <div className="w-full">
              <h1 className="text-[14px]">Country</h1>
              <input
                type="text"
                className="w-full border mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5"
                placeholder="United Kingdom"
              />
            </div>
          </div>
          <div className="flex w-full gap-[16px] mt-[16px]">
            <div className="w-full">
              <h1 className="text-[14px]">City</h1>
              <input
                type="text"
                className="w-full border mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5"
                placeholder="London"
              />
            </div>
            <div className="w-full">
              <h1 className="text-[14px]">Gender</h1>
              <input
                type="text"
                className="w-full border mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5"
                placeholder="Male"
              />
            </div>
          </div>
          <div className="flex w-full gap-[16px] mt-[16px]">
            <div className="w-full">
              <h1 className="text-[14px]">Birth Date</h1>
              <input
                type="text"
                className="w-full border mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5"
                placeholder="Dec-22, 1999"
              />
            </div>
            <div className="w-full">
              <h1 className="text-[14px]">WhatsApp Number</h1>
              <input
                type="number"
                className="w-full border mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5"
                placeholder="+92 312 4049137"
              />
            </div>
          </div>
          <div className="flex w-full gap-[16px] mt-[16px]">
            <div className="w-full">
              <h1 className="text-[14px]">Language Spoken</h1>
              <input
                type="text"
                className="w-full border mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5"
                placeholder="English"
              />
            </div>
            <div className="w-full">
              <h1 className="text-[14px]">Educational Background</h1>
              <input
                type="text"
                className="w-full border mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5"
                placeholder="Bachelor"
              />
            </div>
          </div>
          <div className="flex w-full gap-[16px] mt-[16px]">
            <div className="w-full mt-[21px] md:mt-[0px]">
              <h1 className="text-[14px]">WhatsApp Number</h1>
              <input
                type="number"
                className="w-full border mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5"
                placeholder="+92 312 4049137"
              />
            </div>
            <div className="w-full">
              <h1 className="text-[14px]">
                School You currently teach(optional)
              </h1>
              <input
                type="text"
                className="w-full border mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5"
                placeholder="New Castle School"
              />
            </div>
          </div>
          <div className="md:flex w-full gap-[16px] mt-[16px]">
            <div className="flex md:w-[40%] gap-[10px]">
              <div className="w-full">
                <h1 className="text-[14px]">Availability</h1>
                <select
                  className="w-full border mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5 text-gray-500 appearance-none bg-no-repeat bg-right bg-[length:40px_25px]"
                  style={{ backgroundImage: `url(${dropDown.src})` }}
                >
                  <option value="9 am">9 am</option>
                </select>
              </div>
              <h1 className="text-gray-500 font-medium mt-[38px] md:mt-[40px]">
                TO
              </h1>
              <div className="w-full md:mt-[20px]">
                <select
                  className="w-full border mt-[30px] md:mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5 text-gray-500 appearance-none bg-no-repeat bg-right bg-[length:40px_25px]"
                  style={{ backgroundImage: `url(${dropDown.src})` }}
                >
                  <option value="7 pm">7 pm</option>
                </select>
              </div>
            </div>
            <div className="flex md:w-[60%] gap-[10px] md:mt-[20px]">
              <div className="w-full">
                <select
                  className="w-full border mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5 text-gray-500 appearance-none bg-no-repeat bg-right bg-[length:40px_25px]"
                  style={{ backgroundImage: `url(${dropDown.src})` }}
                >
                  <option value="Choose Dayy">Choose Days</option>
                </select>
              </div>
              <div className="w-full">
                <select
                  className="w-full border mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5 text-gray-500 appearance-none bg-no-repeat bg-right bg-[length:40px_25px]"
                  style={{ backgroundImage: `url(${dropDown.src})` }}
                >
                  <option value="Mon">Mon Tue Wed</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex w-full gap-[16px] mt-[16px]">
            <div className="w-full">
              <h1 className="text-[14px]">Hourly Rate</h1>
              <select
                className="w-full border mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5 text-gray-500 appearance-none bg-no-repeat bg-right bg-[length:45px_30px] md:bg-[length:55px_40px]"
                style={{
                  backgroundImage: `url(${usd.src})`,
                  backgroundPosition: "right 15px center",
                }}
              >
                <option value="">15</option>
              </select>
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between">
                <h1 className="text-[14px]">Cancellation Notice</h1>
                <a
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Hello to you too!"
                >
                  <Image src={help} alt="help" />
                </a>
              </div>
              <select
                className="w-full border mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5 text-gray-500 appearance-none bg-no-repeat bg-right bg-[length:55px_30px] md:bg-[length:65px_40px]"
                style={{
                  backgroundImage: `url(${days.src})`,
                  backgroundPosition: "right 15px center",
                }}
              >
                <option value="">30</option>
              </select>
            </div>
          </div>
          <div className="flex w-full gap-[16px] mt-[16px]">
            <div className="w-full">
              <h1 className="text-[14px]">Hourly Rate</h1>
              <select
                className="w-full border mt-[10px] h-[35px] md:h-[42px] px-2 md:px-5 text-gray-500 appearance-none bg-no-repeat bg-right bg-[length:60px_30px] md:bg-[length:75px_45px]"
                style={{
                  backgroundImage: `url(${select.src})`,
                  backgroundPosition: "right 15px center",
                }}
              >
                <option value="">Arts = Music, Painting , Planting</option>
              </select>
            </div>
          </div>
        </div>
        <h1 className="text-[14px] mt-[14px]">Introduction Video</h1>

        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/U4aFbyzrTdc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mt-[24px] rounded-md"
        ></iframe>
      </div>
      <div className="bg-white text-[14px] md:text-[16px] flex items-center justify-between underline mt-[24px] p-[18px] shadow-2xl rounded-[8px]">
        <h1>Legal & Support</h1>
        <h1>Terms & Condition</h1>
        <h1>Privacy Policy</h1>
      </div>
    </div>
  );
};

export default ProfileInfo;
