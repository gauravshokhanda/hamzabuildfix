'use client';
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { FaChevronDown, FaSearch } from 'react-icons/fa';

interface DropdownProps {
    options: string[];
    selectedOptions: string[];
    placeHolderLabel?: string | ReactNode;
    hideSearch?: boolean;
    hideCheckBox?: boolean;
    onSelectionChange: (selected: string[]) => void;
    isOpen: boolean; // Control from parent component
    onToggle: () => void; // Function to toggle dropdown
}

const Dropdown: React.FC<DropdownProps> = ({
    options,
    selectedOptions,
    placeHolderLabel,
    onSelectionChange,
    hideSearch = false,
    hideCheckBox = false,
    isOpen,
    onToggle
}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);
    // Function to close dropdown if clicked outside
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            if (isOpen) {
                onToggle(); // Close dropdown if it's open
            }
        }
    };

    // Attach event listener to detect clicks outside
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleClickOutside, isOpen]);

    const handleOptionToggle = (option: string) => {
        const isSelected = selectedOptions.includes(option);
        const newSelectedOptions = isSelected
            ? selectedOptions.filter((item) => item !== option)
            : [...selectedOptions, option];

        onSelectionChange(newSelectedOptions);
    };

    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <button
                type="button"
                onClick={onToggle}
                className="w-full bg-white border border-light_gray rounded-md py-3 px-4 flex justify-between items-center shadow-sm text-sm text-text_secondary"
            >
                {selectedOptions.length > 0 ? selectedOptions.join(", ") : placeHolderLabel || "Select an option"}
                <FaChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>

            {isOpen && (
                <div className="absolute w-full bg-white border border-light_gray rounded-md mt-2 p-4 shadow-md z-10">
                    {!hideSearch && (
                        <div className="relative mb-3">
                            <input
                                type="text"
                                className="w-full text-sm border border-light_gray opacity-50 rounded-md py-3 px-3 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <FaSearch className="absolute right-3 top-4 text-light_gray" />
                        </div>
                    )}

                    <ul className={`max-h-60 overflow-y-auto ${hideSearch ? "mt-2" : "mt-5"}`}>
                        {filteredOptions.map((option, index) => (
                            <li key={index} className="flex items-center mb-4">
                                {!hideCheckBox ? (
                                    <>
                                        <input
                                            type="checkbox"
                                            checked={selectedOptions.includes(option)}
                                            onChange={() => handleOptionToggle(option)}
                                            className="form-checkbox h-4 w-4 text-primary border-light_gray rounded"
                                        />
                                        <label className="ml-2 text-sm text-text_secondary">{option}</label>
                                    </>
                                ) : (
                                    <label className="ml-2 text-sm text-text_secondary">{option}</label>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;