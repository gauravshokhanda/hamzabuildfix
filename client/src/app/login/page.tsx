"use client";  // Add this at the very top

import React, { useState } from 'react';
import InputField from '../components/InputField';
import bg from "public/images/auth/bg.png";
import facebook from "public/images/auth/facebook.png";
import google from "public/images/auth/google.png";
import Button from '../components/Button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg.src})` }}>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full relative">
        {/* Social Sign In */}
        <div className="flex flex-col items-center bg-secondary absolute top-[-70px] left-[50%] translate-x-[-50%] z-10  shadow-lg p-4 rounded-lg" style={{ width: '60%' }}>
          <div className="text-white text-center rounded-t-lg w-full pb-3">
            <span className="font-bold">Sign in with</span>
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

        <form className='pt-8'>
          {/* Input Fields */}
          <InputField
            label="Email or username"
            type="text"
            placeholder="e.g. john@doe.com"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            label="Password"
            type="text"
            placeholder="*******"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="mb-8 text-left">
            <a href="#" className="text-sm text-gray opacity-50 hover:underline">
              Forgot password?
            </a>
          </div>
          <Button classNames='rounded-lg' label='Sign In' />
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray opacity-50">
            New here?{' '}
            <a onClick={() => router.push("/signUp")} href="#" className="text-primary opacity-100 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
