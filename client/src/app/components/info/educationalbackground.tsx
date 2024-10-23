"use client";
import InputField from "../InputField"; // Import your InputField component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";
import { useState } from "react";
import uploadIcon2 from "../../public/images/auth/upload2.png";
const Educationalbackground = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const degreeOptions = [
    "High School Diploma",
    "Associate Degree",
    "Bachelor’s Degree",
    "Master’s Degree",
    "Ph.D.",
  ];
  const majorOptions = [
    "Computer Science",
    "Engineering",
    "Business",
    "Arts",
    "Law",
  ];


  // Function to toggle dropdowns
  const handleToggle = (dropdownName: string) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null); // Close the dropdown if the same one is clicked
    } else {
      setOpenDropdown(dropdownName); // Open the clicked dropdown
    }
  };
  return (
    <form className="w-full max-w-4xl	 mx-auto p-6  rounded-xl">
      {/* Required: Highest Degree Attend (Dropdown) */}
      <div className="mb-4">
        <label
          htmlFor="highestDegreeRequired"
          className="block text-sm font-medium text-gray-700 pb-2"
        >
          Highest Degree Attend <span className="text-light_gray">(Required)</span>
        </label>
        <Dropdown
          hideCheckBox={true}
          placeHolderLabel="Select Degree"
          options={[
            "High School Diploma",
            "Associate Degree",
            "Bachelor's Degree",
            "Master's Degree",
            "Doctorate (Ph.D.)",
            "Professional Degree (MD, JD, etc.)",
            "Other"
          ]}
          isOpen={openDropdown === "degree"}
          onToggle={() => handleToggle("degree")}
          selectedOptions={[]}
          onSelectionChange={(selected) => console.log("Selected Degree:", selected)}
        />

      </div>

      {/* Required: Major (Dropdown) */}
      <div className="mb-4">
        <label
          htmlFor="majorRequired"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Major <span className="text-light_gray">(Required)</span>
        </label>
        <Dropdown
          hideCheckBox={true}
          placeHolderLabel="Select Major"
          options={majorOptions}
          isOpen={openDropdown === "major"}
          onToggle={() => handleToggle("major")}
          selectedOptions={[]}
          onSelectionChange={(selected) => console.log("Selected Major:", selected)}
        />

      </div>

      {/* Required: University Name */}
      <InputField
        label={
          <>
            University Name <span className="text-light_gray">(Required)</span>
          </>
        }
        type="text"
        id="universityNameRequired"
        placeholder="Enter your university name"
      />

      {/* Optional: Highest Degree Attend (Dropdown) */}
      <div className="mb-4">
        <label
          htmlFor="highestDegreeOptional"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Highest Degree Attend <span className="text-light_gray">(Optional)</span>
        </label>
        <Dropdown
          hideSearch={true}
          hideCheckBox={true}
          placeHolderLabel="Select Degree"
          options={degreeOptions}
          isOpen={openDropdown === "highestDegree"}
          onToggle={() => handleToggle("highestDegree")}
          selectedOptions={[]}
          onSelectionChange={(selected) => console.log("Selected Degree:", selected)}
        />
      </div>

      {/* Optional: Major (Dropdown) */}
      <div className="mb-4">
        <label
          htmlFor="majorOptional"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Major <span className="text-light_gray">(Optional)</span>
        </label>
        <Dropdown
          hideSearch={true}
          hideCheckBox={true}
          placeHolderLabel="Select Major"
          options={majorOptions}
          isOpen={openDropdown === "major2"}
          onToggle={() => handleToggle("major2")}
          selectedOptions={[]}
          onSelectionChange={(selected) => console.log("Selected Major:", selected)}
        />

      </div>

      {/* Optional: University Name */}
      <InputField
        label={<>University Name <span className="text-light_gray">(Optional)</span></>}
        type="text"
        id="universityNameOptional"
        placeholder="Enter your university name (optional)"
      />

      {/* Optional: Certificate (File Manager) */}
      <div className="w-full max-w-md mt-3">
        <label
          htmlFor="certificates"
          className="block text-sm font-medium text-gray-700  mb-2"
        >
          Certificates <span className="text-light_gray">(Optional)</span>
        </label>
        <div className="mb-6 max-w-[500px]">
          <div
            className="flex flex-col items-center justify-center align-middle border-dashed border-2 border-light_gray rounded-md p-6 pt-9 pb-9 text-center cursor-pointer hover:bg-gray-100"
            onClick={() => document.getElementById("videoUploadInput")?.click()}
          >
            <img src={uploadIcon2.src} />
            <p className="text-text_secondary mt-4">Click or drag file to this area to upload</p>
            <input
              type="file"
              id="videoUploadInput"
              accept="video/mp4"
              className="hidden"
            />
          </div>
          <span style={{ fontSize: 14 }} className="font-normal text-light_gray mt-1">Formats accepted are pdf, .csv and .xlsx</span>
        </div>
      </div>
    </form>
  );
};

export default Educationalbackground;
