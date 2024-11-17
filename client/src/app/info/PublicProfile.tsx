"use client";
import { useState } from "react";
import InputField from "../components/InputField";
import uploadIcon from "public/images/auth/upload.png";
import uploadIcon2 from "public/images/auth/upload2.png";
import Image from "next/image";
const PublicProfile = () => {
    const [headline, setHeadline] = useState("");
    const [bio, setBio] = useState("");
    const [about, setAbout] = useState("");
    const [profileImage, setProfileImage] = useState<File | null>(null);
    const [video, setVideo] = useState<File | null>(null);
    console.log(video);

    return (
        <div className="container mx-auto p-8 ">
            <div className="max-w-4xl mx-auto">
                {/* Headline Input */}
                <InputField
                    className="border-light_gray"
                    label="Headline"
                    type="text"
                    placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    id="headline"
                    value={headline}
                    onChange={(e) => setHeadline(e.target.value)}
                />
                <p className="text-sm text-gray-500 text-right">30/100</p>
                {/* Bio Input */}
                <div className="mb-4">
                    <label className="block text-text_primary mb-2">Bio</label>
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="w-full px-3 font-medium py-2 text-sm text-gray-700 border border-light_gray rounded-md focus:outline-none focus:border-primary"
                        rows={4}
                        placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry...... "
                    />
                    <p className="text-sm text-gray-500 text-right">300/1000</p>
                </div>
                {/* Profile Photo */}
                <div className="mb-4">
                    <label className="block text-text_primary mb-2">Profile Photo</label>
                    <div className="flex flex-col  items-start ">
                        <div className="w-32 h-32 border border-light_gray rounded-full flex justify-center items-center">
                            {profileImage ? (
                                <Image
                                    src={URL.createObjectURL(profileImage)}
                                    alt="Profile"
                                    className="rounded-full object-cover w-full h-full"
                                />
                            ) : (
                                <Image src={uploadIcon.src} alt={""} />
                            )}
                        </div>
                        <button
                            className="px-4 py-2 mt-2 border-light_gray mb-5 light_gray text-gray rounded-md"
                            style={{ borderWidth: 1 }}
                            onClick={() => document.getElementById("profileImageInput")?.click()}
                        >
                            Choose Image
                        </button>
                        <input
                            type="file"
                            id="profileImageInput"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => setProfileImage(e.target.files?.[0] || null)}
                        />
                    </div>
                    <p className="text-sm text-gray mt-2">
                        Tutors with profile pictures significantly increase their chances of attracting students. A profile picture adds a personal touch, making your profile more inviting and trustworthy to potential students.
                    </p>
                </div>
                {/* About Section */}
                <div className="mb-4">
                    <label className="block text-text_primary mb-2">Tell Us About You and Get Certified <span className="text-light_gray">(optional)</span></label>
                    <textarea
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        className="w-full px-3 py-2 border border-light_gray rounded-md focus:outline-none focus:border-primary"
                        rows={4}
                        placeholder="This section will be shown to students and is the first information a Tafawwaq Academic Officer will see when reviewing your application......"
                    />
                    <p className="text-sm text-gray-500 text-right">300/1000</p>
                </div>
                {/* Profile Preview */}
                <div className="mb-4 p-4 border border-light_gray rounded-md max-w-[680px]">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                        {/* Profile Image */}
                        <div>
                            <img
                                src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Profile Preview"
                                className="w-36 h-36 rounded-lg object-cover"
                            />
                            <div className="flex items-center">
                                <div className="flex text-yellow-400">
                                    {/* Replace the stars with actual icons if available */}
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.207 1.193-5.938 5.784 1.402 8.167L12 18.896l-7.339 3.866 1.402-8.167-5.938-5.784 8.207-1.193z" /></svg>
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.207 1.193-5.938 5.784 1.402 8.167L12 18.896l-7.339 3.866 1.402-8.167-5.938-5.784 8.207-1.193z" /></svg>
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.207 1.193-5.938 5.784 1.402 8.167L12 18.896l-7.339 3.866 1.402-8.167-5.938-5.784 8.207-1.193z" /></svg>
                                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.207 1.193-5.938 5.784 1.402 8.167L12 18.896l-7.339 3.866 1.402-8.167-5.938-5.784 8.207-1.193z" /></svg>
                                    <svg className="w-4 h-4 fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.207 1.193-5.938 5.784 1.402 8.167L12 18.896l-7.339 3.866 1.402-8.167-5.938-5.784 8.207-1.193z" /></svg>
                                </div>
                                <span className="text-sm text-gray ml-2">4.5 (178)</span>
                            </div>
                        </div>
                        {/* Profile Details */}
                        <div className="flex-1">
                            <div className="flex items-center mb-1">
                                <p className="font-semibold text-text_primary mr-2">Alexson David</p>
                                <span className="text-primary text-lg">âœ”</span>
                            </div>
                            <p className="text-sm text-text_secondary mb-1">English Tutor</p>
                            <p className="text-sm text-gray-700 mb-2">
                                Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a
                                typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the
                                final copy is available... <span className="text-primary cursor-pointer">See Full Profile</span>
                            </p>
                            {/* Rating and Chat Button */}
                            <div className="flex items-center justify-between">
                                {/* Rating */}
                                {/* Chat Now Button */}
                                <button className="px-3 py-1 bg-secondary text-white rounded-md text-sm">
                                    Chat Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Video Upload */}
                <div className="mb-6 max-w-[500px]">
                    <label className="block text-text_primary mb-2">Introduction Video Upload <span className="text-light_gray">(optional)</span></label>
                    <div
                        className="flex flex-col items-center justify-center align-middle border-dashed border-2 border-light_gray rounded-md p-6 pt-9 pb-9 text-center cursor-pointer hover:bg-gray-100"
                        onClick={() => document.getElementById("videoUploadInput")?.click()}
                    >
                        <Image src={uploadIcon2.src} alt={""} />
                        <p className="text-text_secondary mt-4">Click or drag file to this area to upload</p>
                        <input
                            type="file"
                            id="videoUploadInput"
                            accept="video/mp4"
                            className="hidden"
                            onChange={(e) => setVideo(e.target.files?.[0] || null)}
                        />
                    </div>
                    <span style={{ fontSize: 14 }} className="font-normal text-light_gray mt-1">Formats accepted are mp4.</span>
                </div>
            </div>
        </div>
    );
};
export default PublicProfile;