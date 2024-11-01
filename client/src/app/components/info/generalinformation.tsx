"use client";
import React, { useState } from "react";
import InputField from "../InputField";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';  // Importing styles for react-phone-input-2
import Dropdown from "./DropDown";
import uploadIcon2 from "public/images/auth/upload2.png";

const GeneralInformation: React.FC = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    username: "",
    country: "",
    city: "",
    gender: "",
    month: "",
    day: "",
    year: "",
    whatsapp: "",
    tutor: false,
  });

  // State to manage open dropdowns
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    console.log(id, value)
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  // Handle Phone Input change separately
  const handleWhatsAppChange = (value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      whatsapp: value,
    }));
  };

  // Toggle dropdown open/close state
  const handleToggle = (dropdownName: string) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null); // Close if the same dropdown is clicked again
    } else {
      setOpenDropdown(dropdownName); // Open the clicked dropdown
    }
  };

  return (
    <form className="container mx-auto max-w-4xl p-6" onSubmit={(e) => e.preventDefault()}>
      {/* Username */}
      <InputField
        label="Username"
        type="text"
        id="username"
        placeholder="Enter your username"
        value={formData.username}
        onChange={handleChange}
      />

      {/* Country Dropdown */}
      <div className="mb-6">
        <label htmlFor="country" className="block text-sm font-medium text-gray-700 pb-2">Country</label>
        <Dropdown
          hideCheckBox={true}
          placeHolderLabel="Select Country"
          options={[
            "United States",
            "Canada",
            "United Kingdom",
            "Australia",
            "India",
            "Germany",
            "France",
            "Singapore",
            "United Arab Emirates",
            "Japan",
            "South Korea",
            "Brazil",
            "China",
            "New Zealand",
            "South Africa",
            "Mexico",
            "Italy",
            "Netherlands",
            "Spain",
            "Sweden"
          ]}
          selectedOptions={[]}
          isOpen={openDropdown === "country"}
          onToggle={() => handleToggle("country")}
          onSelectionChange={(selected) => console.log(selected)}
        />
      </div>

      {/* City Dropdown */}
      <div className="mb-6">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700 pb-2">City</label>
        <Dropdown
          hideCheckBox={true}
          placeHolderLabel="Select City"
          options={[
            "New York",
            "Los Angeles",
            "London",
            "Sydney",
            "Mumbai",
            "Berlin",
            "Paris",
            "Singapore",
            "Dubai",
            "Tokyo",
            "Seoul",
            "São Paulo",
            "Beijing",
            "Auckland",
            "Cape Town",
            "Mexico City",
            "Rome",
            "Amsterdam",
            "Madrid",
            "Stockholm"
          ]}
          selectedOptions={[]}
          isOpen={openDropdown === "city"}
          onToggle={() => handleToggle("city")}
          onSelectionChange={(selected) => console.log(selected)}
        />
      </div>

      {/* Gender Dropdown */}
      <div className="mb-6">
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700 pb-2">Gender</label>
        <Dropdown
          hideSearch={true}
          hideCheckBox={true}
          placeHolderLabel="Select Gender"
          options={["Male", "Female"]}
          selectedOptions={[]}
          isOpen={openDropdown === "gender"}
          onToggle={() => handleToggle("gender")}
          onSelectionChange={(selected) => console.log(selected)}
        />
      </div>

      {/* Date of Birth (Month, Day, Year) */}
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Date of Birth
      </label>
      <div className="flex space-x-4 mb-4">
        {/* Month */}
        <div className="w-full">
          <Dropdown
            hideSearch={true}
            hideCheckBox={true}
            placeHolderLabel="Select Month"
            options={[
              "01 - January",
              "02 - February",
              "03 - March",
              "04 - April",
              "05 - May",
              "06 - June",
              "07 - July",
              "08 - August",
              "09 - September",
              "10 - October",
              "11 - November",
              "12 - December"
            ]}
            selectedOptions={[]}
            isOpen={openDropdown === "month"}
            onToggle={() => handleToggle("month")}
            onSelectionChange={(selected) => console.log(selected)}
          />
        </div>

        {/* Day */}
        <div className="w-full">
          <Dropdown
            hideSearch={true}
            hideCheckBox={true}
            placeHolderLabel="Date"
            options={[...Array(31)].map((_, i) => String(i + 1).padStart(2, "0"))}
            selectedOptions={[]}
            isOpen={openDropdown === "day"}
            onToggle={() => handleToggle("day")}
            onSelectionChange={(selected) => console.log(selected)}
          />
        </div>

        {/* Year */}
        <div className="w-full">
          <Dropdown
            hideSearch={true}
            hideCheckBox={true}
            placeHolderLabel="Year"
            options={[...Array(101)].map((_, i) => String(new Date().getFullYear() - i))}
            selectedOptions={[]}
            isOpen={openDropdown === "year"}
            onToggle={() => handleToggle("year")}
            onSelectionChange={(selected) => console.log(selected)}
          />
        </div>
      </div>

      {/* WhatsApp Number with Country Code */}
      <div className="mb-1 w-full">
        <label className="block text-sm font-medium text-gray-700 mb-3" htmlFor="whatsapp">
          WhatsApp Number
        </label>
        <div className="w-full">
          <PhoneInput
            country={'us'}
            value={formData.whatsapp}
            onChange={handleWhatsAppChange}
            dropdownClass="bg-white"
            containerClass="w-full"
            inputStyle={{
              width: '100%',
              backgroundColor: 'white',
              paddingTop: '22px',
              paddingBottom: '22px',
              borderRadius: '8px',
            }}
            buttonStyle={{
              backgroundColor: 'white',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderRightWidth: 0
            }}
          />
        </div>
      </div>

      <p className="text-zinc-400 text-sm">
        We need the WhatsApp number to text you once a session is confirmed with its details!
      </p>

      {/* UAE Private Tutor License */}
      <div className="flex flex-col space-y-2 mt-6">
        <label className="text-gray-700 text-sm">
          Do you have a UAE private tutor - MOHRE permit/license?
        </label>
        <div className="flex space-x-14 pt-4">
          <label className="flex items-center space-x-2">
            <input
              id="tutor"
              type="radio"
              name="tutorPermit"
              value="yes"
              className="form-radio h-4 w-4 text-indigo-600"
              onChange={handleChange}
            />
            <span className="text-zinc-400">Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              id="tutor"
              type="radio"
              name="tutorPermit"
              value="no"
              className="form-radio h-4 w-4 text-indigo-600"
              onChange={handleChange}
            />
            <span className="text-zinc-400">No</span>
          </label>
        </div>

        {formData.tutor === true &&
          <div className="pt-4 max-w-[500px]">
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
              // onChange={(e) => setVideo(e.target.files?.[0] || null)}
              />
            </div>
            <span style={{ fontSize: 14 }} className="font-normal text-light_gray mt-1">Formats accepted are mp4.</span>
          </div>
        }

        {formData.tutor === false && (
          <div className="pt-4">
            <p className="text-text_secondary mb-2">
              Tutors who don’t have the license yet should be navigated to the link:
            </p>
            <a
              href="https://publicservices.mohre.gov.ae/UserNotifications/MohrePrivateTeacherWorkPermit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline mb-2 block"
            >
              https://publicservices.mohre.gov.ae/UserNotifications/MohrePrivateTeacherWorkPermit
            </a>
            <ul className="list-disc ml-5 text-text_secondary">
              <li className="mb-2">Don’t worry, it’s a quick process and it’s free of charge.</li>
              <li>Once the license is granted, you may come back anytime, upload it and then start teaching!</li>
            </ul>
          </div>
        )}

      </div>
    </form>
  );
};

export default GeneralInformation;