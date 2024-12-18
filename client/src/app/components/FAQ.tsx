'use client';
import React, { useState } from "react";
import Button from "./Button";

export default function FAQ() {
    return (
        <div className="text-black bg-background_blue grid px-3 md:px-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-5 py-16 content-center">

            <div className="mr-auto place-self-center col-span-2  px-4 md:px-8 ">

                <h2 className="text-4xl font-bold text-black mb-4 ">
                    We&apos;ve <span className="text-primary">got you</span> covered!
                </h2>

                <p className="mb-6 font-light  lg:mb-8 md:text-md lg:text-lg ">
                    Discover the transformative journey of our tutor through their teaching techniques. These stories speak to the impact our courses have had on their professional and personal lives.
                </p>

                <div className="w-48 mb-6">
                    <Button label="View All" onClick={() => { }} classNames="rounded-xl" />
                </div>
            </div>

            <div className="lg:mt-0 px-4 lg:flex col-span-3">
                <Dropdowns />
            </div>
        </div>
    );
}

const Dropdowns: React.FC = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null); // Keeps track of which accordion is open

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index); // Open or close the accordion
    };

    return (
        <section className="w-full">
            <div className="accordion-group space-y-4" data-accordion="default-accordion">
                {accordionItems.map((item, index) => (
                    <div
                        key={index}
                        className={`accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 lg:p-4 bg-white ${openAccordion === index ? 'accordion-active:bg-indigo-50 accordion-active:border-indigo-600' : ''
                            }`}
                    >
                        <button
                            className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600"
                            onClick={() => toggleAccordion(index)}
                            aria-controls={`accordion-content-${index}`}
                        >
                            <h5 className="text-md font-semibold">{item.title}</h5>
                            <svg
                                className={`w-6 h-6 transition duration-500 ${openAccordion === index ? 'hidden' : 'block'}`}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 12H18M12 18V6"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                            <svg
                                className={`w-6 h-6 transition duration-500 ${openAccordion === index ? 'block' : 'hidden'}`}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 12H18"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </button>
                        <div
                            id={`accordion-content-${index}`}
                            className={`accordion-content w-full overflow-hidden transition-max-height duration-500 ${openAccordion === index ? 'max-h-[250px]' : 'max-h-0'
                                }`}
                        >
                            <p className="text-base text-gray-900 font-normal leading-6">{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const accordionItems = [
    {
        title: "How can I reset my password?",
        content:
            "To reset your password, find the 'Forgot Password' option on the login page, follow the instructions, and you'll receive an email to reset your password.",
    },
    {
        title: "How do I update my billing information?",
        content:
            "To update your billing information, go to the 'Billing' section in your account settings and update the necessary information.",
    },
    {
        title: "How can I contact customer support?",
        content:
            "You can contact customer support via the 'Help' section in the platform or by sending an email to support@example.com.",
    },
    {
        title: "How do I delete my account?",
        content:
            "To delete your account, go to your account settings, find the 'Delete Account' option, and follow the instructions. Please note this action is irreversible.",
    },
];
