"use client";
import React, { useState } from "react";
import Dropdown from "./DropDown";

const SubjectsTeach = () => {
  // State to manage open dropdowns
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Options for the subject dropdown
  const subjectOptions = {
    Primary: ['Math', 'Science', 'English', 'Social Studies'],
    Secondary: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'History'],
    Higher: ['Engineering', 'Medicine', 'Law', 'Business'],
  };

  // Function to toggle dropdowns
  const handleToggle = (dropdownName: string) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null); // Close the dropdown if the same one is clicked
    } else {
      setOpenDropdown(dropdownName); // Open the clicked dropdown
    }
  };

  return (
    <form className="w-full max-w-4xl mx-auto p-6 rounded-xl">
      {/* Curriculum Dropdown */}
      <div className="mb-6">
        <label htmlFor="curriculum" className="block text-sm font-medium text-gray-700 pb-2">
          Curriculum
        </label>
        <Dropdown
          options={[
            "British Curriculum (GCSE/A-Levels)",
            "CBSE (Central Board of Secondary Education - India)",
            "Singapore Curriculum",
            "UAE Ministry of Education Curriculum",
            "STEAM/Project-Based Learning"
          ]}
          selectedOptions={[]}
          isOpen={openDropdown === "curriculum"}
          onToggle={() => handleToggle("curriculum")}
          onSelectionChange={(selected: string[]) => console.log(selected)}
        />
      </div>

      {/* Level Dropdown */}
      <div className="mb-6">
        <label htmlFor="level" className="block text-sm font-medium text-gray-700 pb-2">
          Level
        </label>
        <Dropdown
          options={[
            "Primary",
            "Secondary",
            "Higher Education",
          ]}
          selectedOptions={[]}
          isOpen={openDropdown === "level"}
          onToggle={() => handleToggle("level")}
          onSelectionChange={(selected: string[]) => console.log(selected)}
        />
      </div>

      {/* Subject Dropdown */}
      <div className="mb-6">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 pb-2">
          Subject
        </label>
        <Dropdown
          options={subjectOptions.Primary}
          selectedOptions={[]}
          isOpen={openDropdown === "subject"}
          onToggle={() => handleToggle("subject")}
          onSelectionChange={(selected: string[]) => console.log(selected)}
        />
      </div>
    </form>
  );
};

export default SubjectsTeach;
