"use client";
import React, { useState } from "react";
import Button from "../components/Button";
import bg from "public/images/auth/bg.png";
import facebook from "public/images/auth/facebook.png";
import google from "public/images/auth/google.png";
import InputField from "../components/InputField";
import Link from "next/link";
import Image from "next/image";

const SignUp: React.FC = () => {
  const [isRoleSelected, setIsRoleSelected] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg.src})` }}>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full z-10 relative">
        {!isRoleSelected ? (
          <>
            {/* Role Selection */}
            <div className="flex justify-between items-center mb-6">
              <Button
                label="Student"
                classNames={`rounded-lg bg-light_gray text-black`}
                onClick={() => setIsRoleSelected(true)}
              />
              <span className="px-4 text-light_gray">Or</span>
              <Button
                label="Mentor"
                classNames={`rounded-lg  bg-light_gray text-black`}
                onClick={() => setIsRoleSelected(true)}
              />
            </div>

            {/* Sign Up Button */}
            <div className="mt-6">
              <Button
                label="Sign up"
                classNames="py-4 rounded-lg"
                onClick={() => setIsRoleSelected(true)}
              />
            </div>
          </>
        ) : (
          <>
            <div
              className="flex flex-col items-center bg-secondary absolute top-[-70px] left-[50%] translate-x-[-50%] z-10 shadow-lg p-4 rounded-lg"
              style={{ width: "60%" }}
            >
              <div className="text-white text-center rounded-t-lg w-full pb-3">
                <span className="font-bold">Sign up with</span>
              </div>
              <div className="flex space-x-4">
                {/* Google Icon */}
                <button className="bg-white p-2 rounded-full shadow-md">
                  <Image src={google.src} alt="Google" className="w-5 h-5" />
                </button>
                {/* Facebook Icon */}
                <button className="bg-white p-2 rounded-full shadow-md">
                  <Image src={facebook.src} alt="Facebook" className="w-5 h-5" />
                </button>
              </div>
            </div>

            <form className="pt-8">
              {/* Input Fields */}
              <InputField
                labelStyle={{ fontWeight: 'bold' }}
                label="Your name"
                type="text"
                placeholder="e.g. john@doe.com"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <InputField
                labelStyle={{ fontWeight: 'bold' }}
                label="Username"
                type="text"
                placeholder="annie234"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <InputField
                labelStyle={{ fontWeight: 'bold' }}
                label="Email"
                type="text"
                placeholder="e.g. john@doe.com"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <InputField
                labelStyle={{ fontWeight: 'bold' }}
                label="Password"
                type="text"
                placeholder="*******"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <InputField
                labelStyle={{ fontWeight: 'bold' }}
                label="Re-enter Password"
                type="text"
                placeholder="*******"
                id="rePassword"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />

              {/* Checkbox for Terms and Conditions */}
              <div className="flex items-center my-4 mt-5">
                <input
                  type="checkbox"
                  id="terms"
                  className="mr-2"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I accept the terms and conditions to sign up
                </label>
              </div>
              <Link href={"/info"}>
                <Button
                  label="Sign up"
                  classNames="py-4 rounded-lg mt-6"
                />
              </Link>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUp;
