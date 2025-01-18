import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className='bg-[#EEEFFB] mt-11'>
        <div className='grid grid-cols-4 grid-rows-1 msm:grid-rows-2 msm:grid-cols-2 ssm:grid-rows-4 ssm:grid-cols-1
        xsm:grid-rows-4 xsm:grid-cols-1'>
            <span className='sm:text-sm '>
                <h5 className='text-[35px] font-bold'>Hekto</h5>
                <span>
                <input type="email" placeholder='Enter Email Address' className='' />
                <button className='h-[25px] bg-[#FB2E86] text-white w-[135px]'>Sign Up</button>
                </span>
                <p className='text-[#8A8FB9]'>Contact Info</p>
                <p className='text-[#8A8FB9]'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </span>
            <div className='flex justify-center items-center text-center'>
            <span className='xsm:flex xsm:justify-center xsm:flex-col xsm:items-center'>
                <h6 className='font-bold'>Catagories</h6>
                <ul className='text-[#8A8FB9] sm:text-sm'>
                    <li>Laptops & Computers</li>
                    <li>Cameras & Photography</li>
                    <li>Smart Phones & Tablets</li>
                    <li>Video Games & Consoles</li>
                    <li>Waterproof Headphones</li>
                </ul>
            </span>
            </div>

            <div className='flex justify-center items-center text-center'>
            <span className='xsm:flex xsm:justify-center xsm:flex-col xsm:items-center xsm:text-center'>
            <h6 className='font-bold'>Customer Care</h6>
                <ul className='text-[#8A8FB9] sm:text-sm'>
                    <li>My Account</li>
                    <li>Discount</li>
                    <li>Returns</li>
                    <li>Orders History</li>
                    <li>Order Tracking</li>
                </ul>
            </span>
            </div>

            <div className='flex justify-center items-center text-center'>
            <span className='xsm:flex xsm:justify-center xsm:flex-col xsm:items-center xsm:text-center'>
            <h6 className='font-bold'>Pages</h6>
                <ul className='text-[#8A8FB9] sm:text-sm'>
                    <li>Blog</li>
                    <li>Browse the Shop</li>
                    <li>Category</li>
                    <li>Pre-Built Pages</li>
                    <li>Visual Composer Elements</li>
                    <li>WooCommerce Pages</li>
                </ul>
            </span>
            </div>
        </div>
        <div className='bg-[#E7E4F8] flex justify-around items-center'>
            <p className='text-[#8A8FB9]'>©Webecy - All Rights Reserved</p>
             <span className=' flex justify-center items-center gap-1 text-[#151875]'>
                <FaFacebook />
                <FaTwitterSquare />
                <FaInstagramSquare />
             </span>
        </div>
    </footer>
  )
}

export default Footer