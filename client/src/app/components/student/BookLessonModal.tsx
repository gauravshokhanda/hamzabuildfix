import React from "react";
import { Button } from "../admin-panel/ui/button";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "../admin-panel/ui/dropdown";
import { NavbarItem } from "../admin-panel/ui/navbar";

const BookLessonModal = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <div className="">
      <div className="flex flex-col mb-5">
        <h2 className="text-xl font-semibold">Book a Lesson</h2>
        <p className="text-gray-600 text-sm">
          Please update the following fields to book a lesson.
        </p>
      </div>

      {/* Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:divide-x-2">
        <div>
          <label className="block text-sm font-medium mb-2">
            Select preferred date & time
          </label>
          <div className="flex gap-2">
            <Dropdown>
              <DropdownButton
                className="flex border rounded-xl w-full"
                as={NavbarItem}
              >
                <span className=" flex w-full justify-center gap-2 cursor-pointer">
                  {CalenderIcon}
                  Jan 6, 2022
                </span>
              </DropdownButton>
            </Dropdown>
            <Dropdown>
              <DropdownButton
                className="flex border rounded-xl w-full"
                as={NavbarItem}
              >
                <span className=" flex w-full justify-center gap-2 cursor-pointer">
                  {ClockIcon}
                  09:00 AM
                </span>
              </DropdownButton>
              <AccountDropdownMenu anchor="bottom end" />
            </Dropdown>
          </div>

          {/* Total Hours */}
          <InputField
            label="Total hours"
            placeholder="Add hours"
            type="number"
          />

          {/* Description */}
          <TextAreaField label="Description" placeholder="I need help for..." />
        </div>

        {/* Summary Section */}
        <div className="md:*:pl-3">
          <div className="text-sm">
            <CostSummaryItem label="Selected hours" value="10" />
            <CostSummaryItem label="Total hours cost" value="$320" />
            <CostSummaryItem label="Service fee" value="$20" />

            <hr className="mb-4" />
            <div className="flex justify-between">
              <p className="font-semibold text-lg">Total Cost</p>
              <p className="text-xl">$340</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="mt-6 flex justify-between w-full gap-3">
        <Button
          onClick={handleClose}
          outline
          className="bg-transparent !text-[#111111af] border-gray-500 sm:py-2 px-4 w-full rounded-md"
        >
          Cancel
        </Button>
        <Button
          color="button_primary"
          className="bg-admin_button text-white sm:py-2 px-4 w-full rounded-md"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

const InputField: React.FC<{
  label: string;
  placeholder: string;
  type?: string;
}> = ({ label, placeholder, type = "text" }) => {
  return (
    <div className="mt-4">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2 border rounded-md border-gray-300 text-sm"
      />
    </div>
  );
};

const TextAreaField: React.FC<{
  label: string;
  placeholder: string;
  rows?: number;
}> = ({ label, placeholder, rows = 3 }) => {
  return (
    <div className="mt-4">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <textarea
        rows={rows}
        placeholder={placeholder}
        className="w-full px-3 py-2 border rounded-md border-gray-300 text-sm"
      ></textarea>
    </div>
  );
};

const CostSummaryItem: React.FC<{
  label: string;
  value: string;
}> = ({ label, value }) => {
  return (
    <div className="flex justify-between">
      <p className="font-medium mb-2">{label}</p>
      <p className="mb-4">{value}</p>
    </div>
  );
};

export default BookLessonModal;

function AccountDropdownMenu({
  anchor,
}: {
  anchor: "top start" | "bottom end";
}) {
  const times = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM"];

  return (
    <DropdownMenu className=" w-[173px]" anchor={anchor}>
      {times.map((time) => (
        <React.Fragment key={time}>
          <DropdownItem>
            <DropdownLabel>{time}</DropdownLabel>
          </DropdownItem>
          <DropdownDivider />
        </React.Fragment>
      ))}
    </DropdownMenu>
  );
}

const ClockIcon = (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.4993 5V10L13.8327 11.6667M18.8327 10C18.8327 14.6024 15.1017 18.3333 10.4993 18.3333C5.89698 18.3333 2.16602 14.6024 2.16602 10C2.16602 5.39763 5.89698 1.66667 10.4993 1.66667C15.1017 1.66667 18.8327 5.39763 18.8327 10Z"
      stroke="#344054"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CalenderIcon = (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 8.33333H3M13.8333 1.66667V5M7.16667 1.66667V5M7 18.3333H14C15.4001 18.3333 16.1002 18.3333 16.635 18.0609C17.1054 17.8212 17.4878 17.4387 17.7275 16.9683C18 16.4335 18 15.7335 18 14.3333V7.33334C18 5.9332 18 5.23314 17.7275 4.69836C17.4878 4.22795 17.1054 3.8455 16.635 3.60582C16.1002 3.33333 15.4001 3.33333 14 3.33333H7C5.59987 3.33333 4.8998 3.33333 4.36502 3.60582C3.89462 3.8455 3.51217 4.22795 3.27248 4.69836C3 5.23314 3 5.9332 3 7.33333V14.3333C3 15.7335 3 16.4335 3.27248 16.9683C3.51217 17.4387 3.89462 17.8212 4.36502 18.0609C4.8998 18.3333 5.59987 18.3333 7 18.3333Z"
      stroke="#344054"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
