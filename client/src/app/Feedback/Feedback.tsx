'use client';
import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';

const FeedBack = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Submit logic here
        console.log({
            userName,
            email,
            message,
        });
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-box rounded-lg p-8 max-w-lg w-full mb-24">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">User Feedback</h2>
                <form onSubmit={handleSubmit}>
                    {/* User Name Field */}
                    <InputField
                        label="User Name"
                        type="text"
                        id="userName"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter your name"
                        required
                    />

                    {/* Email Field */}
                    <InputField
                        label="Email"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                    />

                    {/* Message Field */}
                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Write your message..."
                            className="mt-1 w-full px-3 py-3 border border-light_gray rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-black placeholder-gray-600"
                            rows={5}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6">
                        <Button classNames='rounded-lg' label='Submit your Feedback'/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FeedBack;
