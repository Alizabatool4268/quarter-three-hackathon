import Image from "next/image";
import Link from "next/link";

import React from 'react'

function Page() {
    const shopexOffer =[
        { id:1,image:"/Images/free-delivery 1.png", heading:"24/7 Support"},
        { id:2,image:"/Images/cashback 1.png", heading:"24/7 Support"},
        { id:3,image:"/Images/Group.png", heading:"24/7 Support"},
        { id:4,image:"/Images/24-hours-support 1.png", heading:"24/7 Support"}
      ];
  return (
    <main>
        <div className='w-full h-[200px] bg-[#F6F5FF] mt-5'>
           <h1 className='text-[36px] font-bold'>About us</h1>
           <span className='flex gap-3'>
              <Link href={"/"}>Home</Link>
              <p className='text-[#FB2E86]'>About us</p>
           </span>
        </div>
        <section>
        <div className="flex md:flex-row items-center justify-center gap-x-6 mt-[90px] sm:flex-col msm:flex-col ssm:flex-col xsm:flex-col">
          <div className="relative w-[290px] h-[318px] ssm:w-[410px] sm:w-[400px] lg:w-[465px] md:w-[560px] xsm:h-[295px]  bg-[#2B3CAB] rounded-[10px]">
            <Image
              src="/Images/Rectangle 56.png"
              alt="about us"
              width={425}
              height={390}
              className="sm:h-[400px]"
            ></Image>
          </div>
          <div className=" w-[95%] text-center md:text-left md:h-auto md:w-[50%] lg:w-[550px] mt-8 md:mt-0 ml-0 md:ml-3">
            <div className="h-[70%] mt-0 lg:mt-4">
              <h1 className="text-[#151875] max-w:text-[25px] text-[30px] md:text-[25px] min6:text-[29px] min3:text-[36px] font-josefin font-[600]">
                Know About Our Ecomerce Business, History
              </h1>
              <p className="text-[#8A8FB9] font-[600] mt-4 font-lato">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </p>
            </div>
            <div className="mt-8 md:mt-10">
              <button className="bg-pink-600 text-white h-[35px] w-[100px] rounded-md">Contact Us</button>
            </div>
          </div>
        </div>
        </section>
        {/* shopex offer */}
        <section className="flex justify-center items-center flex-col mt-14">
               <h1 className="text-[42px] flex justify-center items-center font-bold text-[#151875] xsm:text-[28px] ssm:text-[28px] msm:text-[35px] ">What Shopex Offer!</h1>
               <div className="grid grid-cols-4 gap-3 grid-rows-1 xsm:grid-cols-1 xsm:grid-rows-4 md:grid-cols-2
                md:grid-rows-2 ssm:grid-cols-1 ssm:grid-rows-4 msm:grid-cols-1 msm:grid-rows-4 sm:grid-cols-2 
                sm:grid-rows-2 text-center">
                {shopexOffer.map((product)=>(
                  <div className="h-[320px] w-[270px] flex justify-center items-center md:h-[280px] flex-col shadow-md" key={product.id}>
                     <Image height={54} width={54} alt="services" src={product.image}></Image>
                     <h3 className="text-[#151875] font-bold">{product.heading}</h3>
                     <p className="text-[#1A0B5B4D] ">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. <br /> Massa purus gravida.</p>
                  </div>
                ))}
               </div>
             </section>
    </main>
  )
}

export default Page;