"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

const ScheduleALesson: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [hours, setHours] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Lesson scheduled:", {
      username,
      hours,
      price,
      date,
      time,
      description,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-10 backdrop-blur bg-[#344054B2] bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium">Schedule a Lesson</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Please update the following field to schedule a lesson.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Student Username
            </label>
            <input
              type="text"
              className="w-full p-2 border border-slate rounded-md"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total hours
              </label>
              <input
                type="text"
                className="w-full p-2 border border-slate  rounded-md"
                placeholder="Select hours"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total price
              </label>
              <input
                type="text"
                className="w-full p-2 border border-slate  rounded-md"
                placeholder="Add price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Date
              </label>
              <input
                type="date"
                className="w-full p-2 border border-slate rounded-md"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Time
              </label>
              <input
                type="time"
                className="w-full p-2 border border-slate  rounded-md"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              className="w-full p-2 border border-slate rounded-md"
              rows={4}
              placeholder="I can help with..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-slate  rounded-lg text-gray-600 w-1/2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#00ADEF] text-white rounded-lg w-1/2"
            >
              Schedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleALesson;
