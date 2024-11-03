import React, { useEffect, useRef, useState } from "react";
import 'react-phone-input-2/lib/style.css';  // Importing styles for react-phone-input-2
import Dropdown from "./DropDown";
import { FaChevronDown } from "react-icons/fa6";

// Define a type for the currency option
interface CurrencyOption {
  value: string;
  label: string;
  flag: string;
}

const ToggleSwitch = ({
  id,
  label,
  defaultChecked,
}: {
  id: string;
  label: string;
  defaultChecked?: boolean;
}) => {
  return (
    <div className="flex items-center gap-4">
      {/* Toggle Switch */}
      <label
        htmlFor={id}
        className="inline-flex relative items-center cursor-pointer"
      >
        <input
          type="checkbox"
          id={id}
          defaultChecked={defaultChecked}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-[#E7E7E7] rounded-full peer-checked:bg-blue-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
      </label>

      {/* Label */}
      <span className="text-gray-700">{label}</span>
    </div>
  );
};

const BusinessTafawwaq = () => {
  const currencyOptions: CurrencyOption[] = [
    { value: "USD", label: "USD", flag: "https://flagcdn.com/us.svg" },
    { value: "GBP", label: "GBP", flag: "https://flagcdn.com/gb.svg" },
    { value: "EUR", label: "EUR", flag: "https://flagcdn.com/eu.svg" },
    { value: "AUD", label: "AUD", flag: "https://flagcdn.com/au.svg" },
    { value: "CAD", label: "CAD", flag: "https://flagcdn.com/ca.svg" },
  ];
  const [selectedCurrency, setSelectedCurrency] = useState(currencyOptions[0]);
  const [timeFrom, setTimeFrom] = useState(Array(7).fill("09:00 AM"));
  const [timeTo, setTimeTo] = useState(Array(7).fill("05:00 PM"));
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isOpenCurrent, setIsOpenCurrency] = useState(false);
  const [hourlyRate, setHourlyRate] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const availableTimes = [
    "12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM", "2:00 AM", "2:30 AM",
    "3:00 AM", "3:30 AM", "4:00 AM", "4:30 AM", "5:00 AM", "5:30 AM",
    "6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM",
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
    "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"
  ];

  const handleTimeChange = (index: number, value: string, type: string) => {
    if (type === "from") {
      const newTimeFrom = [...timeFrom];
      newTimeFrom[index] = value;
      setTimeFrom(newTimeFrom);
    } else {
      const newTimeTo = [...timeTo];
      newTimeTo[index] = value;
      setTimeTo(newTimeTo);
    }
    setOpenDropdown(null); // Close dropdown after selection
  };

  const toggleDropdown = (dropdownId: string) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpenCurrency(false);
    }
  };

  // Attach event listener to detect clicks outside
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option: CurrencyOption) => {
    setSelectedCurrency(option);
    setIsOpenCurrency(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      {/* Hourly Rate */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Hourly Rate</label>
        <div className="flex">
          <div className="flex items-center w-full">
            <input
              type="number"
              value={hourlyRate}
              placeholder="Enter your hourly rate"
              onChange={(e) => setHourlyRate(e.target.value)}
              className="w-full px-3 h-12 border border-light_gray rounded-l-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-black placeholder-gray-600"
            />
            <div className="relative m-0 p-0 w-40" ref={dropdownRef}>
              <div
                onClick={() => setIsOpenCurrency(!isOpenCurrent)}
                className="cursor-pointer flex items-center justify-between w-full px-3 h-12 bg-white border-t border-b border-r border-light_gray rounded-r-md shadow-sm focus:outline-none"
              >
                <div className="rounded-full shadow-sm h-8 w-8 bg-gray text-center align-middle flex justify-center overflow-hidden mr-3">
                  <img src={selectedCurrency.flag} alt={selectedCurrency.label} className="object-cover" />
                </div>
                <span className="mr-auto">{selectedCurrency.label}</span>
                <span className="text-light_gray">
                  <FaChevronDown className={`transform transition-transform ${isOpenCurrent ? 'rotate-180' : 'rotate-0'}`} />
                </span>
              </div>

              {isOpenCurrent && (
                <div className="absolute z-10 w-full bg-white border rounded-md mt-1 border-light_gray shadow-lg">
                  {currencyOptions.map((option) => (
                    <div
                      key={option.value}
                      className="flex items-center px-3 py-0 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSelect(option)}
                    >
                      <img src={option.flag} alt={option.label} className="w-4 h-4 mr-2" />
                      <span>{option.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Add Discount Offer */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Add Discount Offer
        </label>
        <div className="flex gap-4">
          <Dropdown
            hideSearch={true}
            hideCheckBox={true}
            placeHolderLabel="Number of Hours"
            options={[
              "1 Hour",
              "2 Hours",
              "3 Hours",
              "4 Hours",
              "5 Hours",
              "6 Hours",
              "7 Hours",
              "8 Hours",
              "More than 8 Hours"
            ]}
            selectedOptions={[]}
            isOpen={openDropdown === "hours"}
            onToggle={() => toggleDropdown("hours")}
            onSelectionChange={(selected) => console.log("Selected Number of Hours:", selected)}
          />

          <Dropdown
            hideSearch={true}
            hideCheckBox={true}
            placeHolderLabel="Total Price"
            options={[
              "$10",
              "$20",
              "$30",
              "$40",
              "$50",
              "$60",
              "$70",
              "$80",
              "$90",
              "$100",
              "More than $100"
            ]}
            selectedOptions={[]}
            isOpen={openDropdown === "price"}
            onToggle={() => toggleDropdown("price")}
            onSelectionChange={(selected) => console.log("Selected Total Price:", selected)}
          />
        </div>
        <button className="mt-4 flex items-center text-black font-semibold text-sm border-light_gray" style={{ borderWidth: 1, padding: 5, paddingRight: 15, paddingLeft: 15, borderRadius: 10 }}>
          <span className="mr-2 text-xl">+</span>
          Add Another Offer
        </button>
      </div>

      {/* Cancellation Notice */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Cancellation Notice
        </label>
        <div className="flex">
          <input
            type="text"
            className="flex-grow p-3 border border-light_gray border-opacity-50 rounded-l-md focus:outline-none focus:ring-primary focus:border-primary"
            placeholder="30"
          />
          <div className="flex items-center px-0 border border-l-0 border-light_gray border-opacity-50 rounded-r-md">
            <select className="py-2 bg-gray-100 border-none focus:outline-none rounded-r-md" style={{ paddingLeft: 10, paddingRight: 10 }}>
              <option>Days</option>
              <option>Hours</option>
              <option>Minutes</option>
            </select>
          </div>
        </div>
      </div>

      {/* Set Your Availability */}
      <div className="w-full">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Set Your Availability
          </label>
          <div className="space-y-4">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => (
              <div key={index} className="flex justify-between items-center gap-2">
                <ToggleSwitch id={day} label={day} defaultChecked={index < 5} />
                <div className="min-w-[600px] gap-2 flex-row flex">
                  <Dropdown
                    placeHolderLabel={
                      <div className="flex justify-between w-full" style={{ paddingRight: 10 }}>
                        <span className="mr-4">From</span>
                        <span className="ml-auto">{timeFrom[index]}</span>
                      </div>
                    }
                    options={availableTimes}
                    selectedOptions={[]}
                    hideSearch={true}
                    hideCheckBox={true}
                    isOpen={openDropdown === `from-${index}`}
                    onToggle={() => toggleDropdown(`from-${index}`)}
                    onSelectionChange={(selected) => handleTimeChange(index, selected[0], "from")}
                  />
                  <Dropdown
                    placeHolderLabel={
                      <div className="flex justify-between w-full" style={{ paddingRight: 10 }}>
                        <span className="mr-4">To</span>
                        <span className="ml-auto">{timeTo[index]}</span>
                      </div>
                    }
                    options={availableTimes}
                    selectedOptions={[]}
                    hideSearch={true}
                    hideCheckBox={true}
                    isOpen={openDropdown === `to-${index}`}
                    onToggle={() => toggleDropdown(`to-${index}`)}
                    onSelectionChange={(selected) => handleTimeChange(index, selected[0], "to")}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessTafawwaq;
