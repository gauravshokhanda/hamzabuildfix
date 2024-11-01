"use client";
import { useState } from "react";
import InputField from "../components/InputField";

const TutorContract = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <div className="max-w-4xl mx-auto p-8 ">

            {/* Agreement Header */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-text_primary mb-3">
                    Agreement And Terms For Tutoring
                </h2>
                <p className="text-sm text-text_secondary">
                    This Agreement (Agreement) is made effective as of [Date] by and between [Client Name] (Client) and [Designer Name] (Designer).
                </p>
            </div>

            {/* Contract Body */}
            <div className="bg-background_blue p-5 rounded-md mb-8">
                <p className="text-sm text-text_secondary mb-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled...
                </p>
                <p className="text-sm text-text_secondary mb-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled...
                </p>
                <p className="text-sm text-text_secondary mb-4">
                    Text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                </p>
                <p className="text-sm text-text_secondary mb-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                </p>
                <ul className="list-decimal pl-6 text-sm text-text_secondary mb-4 space-y-1">
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li>Lorem Ipsum is simply dummy text of the printing.</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry, typesetting.</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry, typesetting in.</li>
                </ul>
                <div className="text-sm text-text_secondary mt-6 space-y-2">
                    <p><span className="font-semibold">Name:</span> Daniel Jobbar</p>
                    <p><span className="font-semibold">Dated:</span> 2/4/2024</p>
                    <p><span className="font-semibold">Name:</span> Daniel Jobbar</p>
                    <p><span className="font-semibold">Dated:</span> 2/4/2024</p>
                </div>

            </div>

            {/* Checkbox Section */}
            <div className="mb-8">
                <div className="flex items-start mb-6">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <p className="text-sm text-text_secondary">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <p className="text-sm text-text_secondary">
                        I have read the term and condition
                    </p>
                </div>
            </div>

            {/* Digital Signature Section */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold text-text_primary mb-3">
                    The following is the legal digital signature
                </h3>
                <div className="flex flex-col sm:flex-row mt-6 sm:space-y-0 sm:space-x-6">
                    <InputField
                        label="Legal First Name"
                        type="text"
                        placeholder="Legal First Name"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <InputField
                        label="Legal Last Name"
                        type="text"
                        placeholder="Legal Last Name"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
            </div>


        </div>
    );
};

export default TutorContract;