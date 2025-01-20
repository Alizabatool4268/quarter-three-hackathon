"use client"
import React from 'react';
import { useState,FormEvent } from 'react';
import { createClient } from '@sanity/client';
import Link from 'next/link';


const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
    useCdn: false,
    apiVersion: '2025-01-20',
});

interface User {
  username: string;
  password: string;
  email: string;
}

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<User>({
    username: '',
    password: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newUser = {
        _type: 'signup',
        ...formData,
      };
      await client.create(newUser);
      alert('Signup successful!');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <section>
      <div className="w-full h-[200px] bg-[#F6F5FF] mt-5">
        <h1 className="text-[36px] font-bold">Sign up</h1>
        <span className="flex gap-3">
          <Link href={"/"}>Home</Link>
          <p className="text-[#FB2E86]">Sign up</p>
        </span>
      </div>
      <section className='flex justify-center items-center mt-11 mb-11'>
        <form onSubmit={handleSignup} className='flex flex-col justify-center items-center border-[1px] border-solid border-black w-[544px] h-[474px] gap-3 msm:w-[400px] ssm:w-[340px] xsm:w-[280px]'>
        <h1 className='text-[32px] font-bold'>Sign up</h1>
        <p className='text-[#9096B2]'>Please sign up using account details bellow.</p>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            className='border-[1px] border-solid border-black h-[52px] w-[432px] msm:w-[300px] ssm:w-[300px]
             xsm:w-[240px] '
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className='border-[1px] border-solid border-black h-[52px] w-[432px] msm:w-[300px] ssm:w-[300px] xsm:w-[240px] '
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className='border-[1px] border-solid border-black h-[52px] w-[432px] msm:w-[300px] ssm:w-[300px] xsm:w-[240px] '
          />
          <button type="submit" className='text-white bg-[#FB2E86] w-[432px] h-[52px] msm:w-[300px] ssm:w-[300px] xsm:w-[240px]'>Signup</button>
        </form>
      </section>
    </section>
  );
};

export default Signup;