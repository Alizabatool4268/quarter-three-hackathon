import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GoDotFill } from "react-icons/go";

function Page() {
  return (
    <section className='overflow-hidden'>
         <div className='w-full h-[200px] bg-[#F6F5FF] mt-5'>
           <h1 className='text-[36px] font-bold'>Contact Us</h1>
           <span className='flex gap-3'>
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Page</Link>
              <p className='text-[#FB2E86]'>Contact Us</p>
           </span>
        </div>
        <div className='flex justify-around items-center mt-14 mb-14 sm:flex-col msm:flex-col ssm:flex-col xsm:flex-col'>
            <div>
                <h1 className='text-[#151875] text-[36px] font-bold'>Information About us</h1>
                <p className='text-sm text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br />
                 mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae <br /> 
                 eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                <span className='flex '>
                    <GoDotFill className='text-[#5625DF] text-[35px]'/>
                    <GoDotFill className='text-[#FF27B7] text-[35px]'/>
                    <GoDotFill className='text-[#37DAF3] text-[35px]' />
                </span>
            </div>
            <div>
                <h1 className='text-[#151875] text-[36px] font-bold'>Contact Way</h1>
                <div className='flex gap-2 xsm:flex-col ssm:flex-col'>
                <span className='flex items-center'>
                    <GoDotFill className='text-[44px] text-[#5726DF]' />
                    <span className='text-[#8A8FB9]'>
                     <p>Tel: 877-67-88-99</p>
                     <p>E-Mail: shop@store.com</p>
                    </span>
                </span>
                <span className='flex items-center'>
                    <GoDotFill className='text-[44px] text-[#FB2E86]' />
                    <span className='text-[#8A8FB9]'>
                     <p>Support Forum</p>
                     <p>For over 24hr</p>
                    </span>
                </span>
                </div>
                <div className='flex gap-2 xsm:flex-col ssm:flex-col'>
                <span className='flex items-center'>
                    <GoDotFill className='text-[44px] text-[#FFB265]' />
                    <span className='text-[#8A8FB9]'>
                     <p>20 Margaret st, London</p>
                     <p>Great britain, 3NM98-LK</p>
                    </span>
                </span>
                <span className='flex items-center'>
                    <GoDotFill className='text-[44px] text-[#1BE982]' />
                    <span className='text-[#8A8FB9]'>
                     <p >Free standard shipping</p>
                     <p>on all orders.</p>
                    </span>
                </span>
                </div>
            </div>
        </div>

        <div className='flex justify-around items-center mb-11'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <span>
                    <h1 className='text-[#151875] text-[36px] xsm:text-[24px] font-bold'>Get In Touch</h1>
                    <p className='text-sm text-[#8A8FB9] xsm:text-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br />
                     tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                </span>
                <span className='flex gap-3 w-[534px] justify-between xsm:justify-center msm:w-[400px] ssm:w-[300px] xsm:w-[270px]'>
                    <input type="text" placeholder='Your Name*' className='h-[45px] w-[255px] border-[1px] border-solid border-black  ssm:w-[130px] xsm:w-[130px]' />
                    <input type="email" placeholder='Your E-mail' className='h-[45px] w-[255px] border-[1px] border-solid border-black ssm:w-[130px] xsm:w-[130px]' />
                </span>
                <span>
                    <input type="text" placeholder='Subject*' className=' w-[534px] h-[45px] border-[1px] border-solid border-black msm:w-[400px] ssm:w-[300px] xsm:w-[270px] ' />
                </span>
                <span>
                    <input type="text" placeholder='Type Your Messege*' className='h-[166px] w-[534px] border-[1px] border-solid border-black msm:w-[400px] ssm:w-[300px] xsm:w-[270px]' />
                </span>
                <button className='bg-[#FB2E86] text-white h-[44px] w-[157px] rounded-sm '>Send Mail</button>
            </div>
            <div className='xsm:hidden ssm:hidden msm:hidden sm:hidden'>
              <Image height={500} width={500} alt='contactimage' src={"/Images/contact-page-img.png"}></Image>
            </div>
        </div>
    </section>
  )
}

export default Page;