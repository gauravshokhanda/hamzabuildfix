'use client';
import React, { useState } from "react";
import faq_bg from 'public/images/FAQ/faq_bg.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSearch } from "react-icons/fa";

// Sample FAQ Data (can be replaced with dynamic data)
const faqData = [
    {
        question: "Vestibulum maximus lacinia massa non porttitor?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        question: "Vestibulum maximus lacinia massa non porttitor?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        question: "Vestibulum maximus lacinia massa non porttitor?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        question: "Vestibulum maximus lacinia massa non porttitor?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        question: "Vestibulum maximus lacinia massa non porttitor?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
];

const Faq = () => {
    // Initially, all FAQs are open (all indices in the array)
    const [activeIndexes, setActiveIndexes] = useState([]);

    const toggleFaq = (index) => {
        if (activeIndexes.includes(index)) {
            // If the index is in the activeIndexes array, remove it (close it)
            setActiveIndexes(activeIndexes.filter(i => i !== index));
        } else {
            // Otherwise, add it to the array (open it)
            setActiveIndexes([...activeIndexes, index]);
        }
    };

    return (
        <div className="w-full flex flex-col items-center mb-20">
            {/* Background Image Section */}
            <div className="relative w-full h-[60vh] md:h-[500px] lg:h-[700px] overflow-hidden">
                <img
                    src={faq_bg.src}
                    alt="FAQ Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                    {/* Heading */}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 lg:mb-16">We Are Here To Help</h1>

                    {/* Search Bar */}
                    <div className="flex items-center bg-white rounded-full shadow-md w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]">
                        <div className="p-4">
                            {/* Search Icon */}
                            <svg style={{ width: 20, height: 20 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                            </svg>
                        </div>
                        {/* Input Field */}
                        <input
                            type="text"
                            placeholder="Ask Question or search by keyword"
                            className="w-full py-3 px-2 text-gray focus:outline-none text-sm lg:text-base"
                        />
                        {/* Search Button */}
                        <button className="bg-secondary text-white rounded-full px-8 py-2 md:px-20 mr-2 text-sm lg:text-base">
                            Search
                        </button>

                    </div>
                </div>
            </div>


            {/* FAQ Section */}
            <div className="container max-w-[1340px] flex flex-col items-center bg-faq_bg relative mt-32">
                <div className="w-full relative pb-16 px-10">
                    <div className=" w-full mx-auto bg-primary rounded-lg p-6 relative -mt-8 shadow-lg">
                        <h2 className="lg:text-2xl md:text-2xl sm:text-1xl font-bold text-center text-white">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="w-full relative pt-16">
                        {/* FAQ Cards */}
                        <div className="w-full space-y-4">
                            {faqData.map((item, index) => (
                                <div
                                    key={index}
                                    className="border border-light_gray rounded-lg shadow-md"
                                >
                                    <div
                                        className="flex justify-between items-center p-5 bg-white rounded-lg cursor-pointer hover:bg-background_blue transition-all duration-200"
                                        onClick={() => toggleFaq(index)}
                                    >
                                        <h3 className=" sm:text-1xl md:text-lg font-medium text-black">
                                            {item.question}
                                        </h3>
                                        <span className="ml-4">
                                            {activeIndexes.includes(index) ? (
                                                <button className="text-3xl text-icon_color">−</button>
                                            ) : (
                                                <button className="text-3xl text-icon_color">+</button>
                                            )}
                                        </span>
                                    </div>
                                    {activeIndexes.includes(index) && (
                                        <div className="p-5 bg-white rounded-b-lg">
                                            <p className="text-text_secondary">{item.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
