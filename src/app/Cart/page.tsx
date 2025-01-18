import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CgArrowsScrollV } from "react-icons/cg";

function page() {
  return (
    <section>
        <div className='w-full h-[200px] bg-[#F6F5FF] mt-5'>
           <h1 className='text-[36px] font-bold'>Shopping Cart</h1>
           <span className='flex gap-3'>
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Page</Link>
              <p className='text-[#FB2E86]'>Shopping Cart</p>
           </span>
        </div> 
        <section className=' overflow-x-hidden'>
      <div className='grid grid-rows-4 gap-3'>
        <div className='h-[72px]'>
           <ul className='flex justify-around items-center font-bold text-[#1D3178] xsm:text-sm'>
             <li>Product</li>
             <li>Price</li>
             <li>Quantity</li>
             <li>Total</li>
           </ul>
        </div>
        <div className='h-[72px] flex justify-around items-center '>
          <Image
          height={54}
          width={54}
          alt='laptop'
          src={"/Images/Rectangle 34.png"}>
          </Image>
          <p>$32.00</p>
          <span className='h-[44px] w-[72px] flex justify-center items-center border-[1px] border-solid border-black rounded-sm gap-2'>
            <p>01</p>
            <CgArrowsScrollV />
          </span>
          <p>‎£219.00</p>
        </div>
        <div className='h-[72px] flex justify-around items-center'>
          <Image
          height={54}
          width={54}
          alt='controller'
          src={"/Images/Rectangle 35.png"}>
          </Image>
          <p>$32.00</p>
          <span className='h-[44px] w-[72px] flex justify-center items-center border-[1px] ml-2 border-solid border-black rounded-sm gap-2'>
            <p>02</p>
            <CgArrowsScrollV />
          </span>
          <p>‎£219.00</p>
        </div>       
        <div className='h-[72px] flex justify-around items-center'>
          <Image
          height={54}
          width={54}
          alt='controller'
          src={"/Images/Rectangle 36.png"}>
          </Image>
          <p>$32.00</p>
          <span className='h-[44px] w-[72px] flex justify-center items-center border-[1px] ml-2 border-solid border-black rounded-sm gap-2'>
            <p>02</p>
            <CgArrowsScrollV />
          </span>
          <p>‎£219.00</p>
        </div>       
        <div className='h-[72px] flex justify-around items-center'>
          <Image
          height={54}
          width={54}
          alt='controller'
          src={"/Images/Rectangle 37.png"}>
          </Image>
          <p>$32.00</p>
          <span className='h-[44px] w-[72px] flex justify-center items-center border-[1px] ml-2 border-solid border-black rounded-sm gap-2'>
            <p>02</p>
            <CgArrowsScrollV />
          </span>
          <p>‎£219.00</p>
        </div>       
        <div className='h-[72px] flex justify-around items-center'>
          <Image
          height={54}
          width={54}
          alt='controller'
          src={"/Images/Rectangle 38.png"}>
          </Image>
          <p>$32.00</p>
          <span className='h-[44px] w-[72px] flex justify-center items-center border-[1px] ml-2 border-solid border-black rounded-sm gap-2'>
            <p>02</p>
            <CgArrowsScrollV />
          </span>
          <p>£219.00</p>
        </div>       
        <div className='flex justify-around items-center '>
          <button className='h-[56px] w-[206px] text-white border-[1px] bg-[#FB2E86] border-solid border-black rounded-sm xsm:text-sm xsm:w-[130px] ssm:w-[150px]'>Return To Shop</button>
          <button className='h-[56px] w-[195px] text-white border-[1px] bg-[#FB2E86] border-solid border-black rounded-sm xsm:text-sm xsm:w-[130px] ssm:w-[150px]'>Update Cart</button>
        </div>
      </div>

      {/* shipping */}
      <div className='flex justify-around items-start mt-8 msm:flex-col xsm:flex-col ssm:flex-col
       ssm:justify-center msm:justify-center xsm:gap-4 xsm:items-center ssm:items-center ssm:gap-4 msm:gap-4
       msm:items-center sm:flex-col sm:justify-center sm:items-center'>

        <div className='flex gap-2 msm:h-[200px] ssm:flex-col xsm:flex-col xsm:justify-center 
           xsm:items-center ssm:items-center msm:flex-col msm:justify-center msm:items-center 
           sm:flex-col sm:justify-center sm:items-center'>

          <input type="text" placeholder='Coupon Code' className='h-[56px] w-[300px] border-[1px] 
          border-solid ml-2 border-black rounded-sm md:[240px] xsm:h-[40px] xsm:w-[270px] xsm:m-0 '/>
          <button className='h-[56px] w-[211px] bg-[#FB2E86] rounded-sm text-white md:w-[151px] 
          sm:text-sm xsm:ml-3 xsm:h-[40px]'>Apply Coupon</button>
        
        </div>


        <div className='flex justify-around items-center flex-col h-[324px]
         w-[470px] border-[1px] border-solid ml-2 border-black rounded-sm msm:h-[400px]
         xsm:w-[280px] xsm:m-0 ssm:m-0 ssm:w-[300px] msm:m-0 msm:w-[400px] md:w-[470px]'>

          <h5 className='w-[422px] text-start sm:w-[280px] xsm:w-[200px] ssm:w-[280px] msm:w-[380px]'>Cart Total</h5>
          <span className='flex w-[422px] justify-between border-b-[1px] border-solid ml-2 border-black
           sm:w-[280px] xsm:w-[200px] ssm:w-[280px] msm:w-[380px] '>
            <p>Subtotal:</p>
            <p>$1750</p>
          </span>
          <span className='flex w-[422px] justify-between border-b-[1px] border-solid ml-2 border-black
           sm:w-[280px] xsm:w-[200px] ssm:w-[280px] msm:w-[380px]'>
            <p>Shipping:</p>
            <p>Free</p>
          </span>
          <span className='flex w-[422px] justify-between border-b-[1px] border-solid ml-2 border-black
           sm:w-[280px] xsm:w-[200px] ssm:w-[280px] msm:w-[380px]'>
            <p>Total:</p>
            <p>$1750</p>
          </span>
          <button className='h-[56px] w-[211px] sm:w[211px] bg-[#FB2E86] rounded-sm text-white 
          sm:text-sm xsm:w-[140px]'>Procees to checkout</button>
        </div>
      </div>
    </section>
    </section>
  )
}

export default page;