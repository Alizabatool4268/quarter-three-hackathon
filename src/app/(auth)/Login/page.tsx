"use client";
import React from 'react';
import Link from 'next/link';
import { useState, FormEvent } from 'react';
import {createClient} from '@sanity/client';

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
    useCdn: false,
    apiVersion: '2025-01-15',
});

interface LoginForm {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginForm>({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const query = `*[_type == "signup" && username == $username && password == $password]`;
      const params = { username: formData.username, password: formData.password };
      const result = await client.fetch(query, params);

      if (result.length > 0) {
        alert('Login successful!');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <section>
      <div className="w-full h-[200px] bg-[#F6F5FF] mt-5">
        <h1 className="text-[36px] font-bold">My Account</h1>
        <span className="flex gap-3">
          <Link href={"/"}>Home</Link>
          <p className="text-[#FB2E86]">My Account</p>
        </span>
      </div>
      <section className='flex justify-center items-center mt-11 mb-11'>
        <form onSubmit={handleLogin} className='flex flex-col justify-center items-center border-[1px] 
        border-solid border-black w-[544px] h-[474px] gap-3 msm:w-[400px] ssm:w-[340px] xsm:w-[280px]'>
             <h1 className='text-[32px] font-bold'>My Account</h1>
            <p className='text-[#9096B2]'>Please login using account detail bellow.</p>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            className='border-[1px] border-solid border-black h-[52px] w-[432px] msm:w-[300px] ssm:w-[300px] xsm:w-[240px] '
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
          <button type="submit" className='text-white bg-[#FB2E86] w-[432px] h-[52px] msm:w-[300px] ssm:w-[300px] xsm:w-[240px]'>Login</button>
          <Link href={"/Signup"}>Do not have an account Signup</Link>
        </form>
      </section>
    </section>
  );
};

export default Login;