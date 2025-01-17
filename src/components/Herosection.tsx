import React from 'react';
import Image from 'next/image';
import { GoDiamond } from "react-icons/go";
import { FaDiamond } from "react-icons/fa6";

function Herosection() {
  return (
    <section className='overflow-x-hidden bg-[#F2F0FF]'>
      <div className='grid grid-cols-3 grid-rows-1 sm:grid-cols-2 msm:grid-cols-2 ssm:grid-cols-2 '>
        <Image
        height={300}
        width={300}
        src={"/Images/image 32.png"}
        alt='heroImage'
        className='md:h-[200px] md:w-[200px]'
        ></Image>
        <div>
          <h4 className='text-[#FB2E86] xsm:text-[11px]'>Best Furniture For Your Castle....</h4>
          <h1 className='text-[53px] font-bold md:text-[35px] sm:text-[35px] msm:text-[30px] ssm:text-[24px] xsm:text-[16px]'>New Furniture Collection <br />Trends in 2020</h1>
          <p className='text-[#8A8FB9] ssm:text-sm xsm:text-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing <br />
          in phasellus non in justo.</p>
          <button className='bg-[#FB2E86] h-[50px] w-[163px] xsm:h-[35px] xsm:w-[100px] xsm:text-sm'>Shop Now</button>
        </div>
       <div className='flex justify-center items-start sm:hidden msm:hidden ssm:hidden xsm:hidden'>
         <Image height={629} width={629} alt='heroImage' src={"/Images/sofa promotional header.png"} className='md:h-[300px] md:w-[400px]' ></Image>
       </div>
      </div>
       <div className='flex gap-3 justify-center items-center mt-4 text-[#FB2E86] text-[10px]'>
        <FaDiamond />
        <GoDiamond />
        <GoDiamond />
       </div>
    </section>
  )
}

export default Herosection;