"use client";

import { useState } from 'react';

// Define the structure of each section with a component
interface Section {
    heading: string;
    Component?: React.FC; // Accepts a React component
}

// Define the props for the Policies component
interface PoliciesProps {
    sections: Section[];
}

const Policies: React.FC<PoliciesProps> = ({ sections = [] }) => {
    const [activeTab, setActiveTab] = useState(0);

    // Get the active component from the sections array
    const ActiveComponent = sections[activeTab]?.Component;

    return (
        <div>
            {/* Tabs for the current step */}
            <div className="border-b border-light_gray dark:border-gray-700 mt-6">
                <ul className="flex justify-center gap-24 flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    {sections.map((section, idx) => (
                        <li key={idx} className="mr-2">
                            <button
                                onClick={() => setActiveTab(idx)}
                                className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg ${activeTab === idx
                                    ? 'text-primary border-primary'
                                    : 'text-zinc-400	 border-transparent hover:text-gray-600 hover:border-gray-300'
                                    }`}
                            >
                                {section.heading}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tab Content */}
            <div className="mt-10 w-full p-6">
                {sections.length > 0 && ActiveComponent ? (
                    <div>
                        {/* Render the active component */}
                        <ActiveComponent />
                    </div>
                ) : (
                    <p className="text-gray-600">No content available</p>
                )}
            </div>
        </div>
    );
};

export default Policies;