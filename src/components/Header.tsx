import React from 'react';
import { CiMail } from "react-icons/ci";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';

function Header() {
  return (
    <header className='overflow-x-hidden'>
        <div className='bg-[#7E33E0] text-white flex justify-around items-center h-[50px]'>
          <div className='flex justify-center items-center gap-2 msm:text-[10px] ssm:text-[10px] xsm:text-[10px] xsm:gap-1'>
            <span className='flex justify-center items-center xsm:text-[10px]'> <CiMail/> mhhasanul@gmail.com</span>
            <span className='flex justify-center items-center xsmtext-sm'> <MdOutlineWifiCalling3/> (12345)67890</span>
          </div>
          <div className='flex justify-between items-center w-[300px] msm:w-[210px] msm:text-[12px] ssm:text-[10px] ssm:w-[120px] xsm:text-[10px] xsm:w-[100px]'>
             <span className='flex items-center'>
                <p>English</p> 
                <IoMdArrowDropdown/> 
            </span>
             <span className='flex items-center'>
                <p className='xsm:text-[10px]'>USD</p> 
                <IoMdArrowDropdown/>
            </span>
             <span className='flex items-center'>
                <p className='xsm:hidden ssm:hidden'>Login</p> 
                <Link href={"/Login"}><FiUser /></Link>
            </span>
             <span className='flex items-center justify-center'>
                <p className='xsm:hidden ssm:hidden'>Wishlist</p> 
                <IoIosHeartEmpty/> 
            </span>
          </div>
        </div>
        <nav className=' h-[100px] flex justify-evenly items-center ssm:flex-col msm:flex-col xsm:flex-col sm:flex-col'>
            <div className='flex justify-between items-center gap-14 ssm:gap-1 msm:gap-5 xsm:gap-1 md:gap-7 sm:w-[540px]'>
             <h1 className='text-[34px] font-[700] ssm:text-[30px] xsm:text-[22px]'>Hekto</h1>
             <div className='flex gap-3  msm:gap-1 ssm:gap-1 ssm:text-sm xsm:text-[12px] xsm:gap-1 '>
                <Link href={"/"} className='hover:text-[#FB2E86]'>Home </Link>
                <Link href={"/"} className='hover:text-[#FB2E86]'>Products </Link>
                <Link href={"/Blog"} className='hover:text-[#FB2E86]'>Blog  </Link>
                <Link href={"/Shop"} className='hover:text-[#FB2E86]'>Shop </Link>
                <Link href={"/Contact"} className='hover:text-[#FB2E86]'>Contact </Link>
                <span><Link href={"/Cart"}><LuShoppingCart/></Link></span>
             </div>
            </div>
            <div className='flex'>
                <input type="text" className='h-[40px] border-[1px] border-solid border-black w-[300px] xsm:w-[250px] md:w-[260px] sm:w-[400px]' />
               <span  className='bg-[#FB2E86] h-[40px] w-[30px] text-white text-[24px] flex items-center'><CiSearch /></span>
            </div>
        </nav>
    </header> 

  )
}

export default Header