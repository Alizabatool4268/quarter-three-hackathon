"use client";
import React from 'react'
import { useCart } from "@/components/cartcontext";
import { urlFor } from "@/sanity/lib/image";
import Link from 'next/link';
import Image from 'next/image';
import Swal from 'sweetalert2';

function Page() {
  const {
      cartItems,
      clearCart
    } = useCart();
  const shipping = ()=>{
    Swal.fire({
      title:"success",
      text:`Your order is completed. NOTE: once you click ok your cart will be cleared`,
      icon:"success",
      iconColor:"#FF1788",
      confirmButtonText:"continue shopping",
      confirmButtonColor:"#FF1788",
      draggable: true
    })
    clearCart()
      
  }
  return (
    <section>
      <div>
       <h1 className='text-[35px] font-bold text-center'>Proceed to checkout </h1>
      </div>
      {cartItems.length=== 0 ? (
        <div>
        <p className="text-gray-500 h-screen text-center">Your cart is empty <Link href={"/Shop"} className="text-pink-500">Continue shopping</Link> </p>
      </div>
      ):(
        <div>
          <h1 className=' text-pink-500 font-bold text-center'>Preview your selected items Items</h1>
          {cartItems.map((items)=>(
            <div key={items._id}>
              <div className='flex justify-between items-center m-5 shadow-sm'>
                <Image height={100} width={100} src={urlFor(items.image).url() } alt={items.name}></Image>
                <span>
                <p className='text-gray-500'>{items.name}</p>
                <p className='text-gray-500 font-bold'>Subtotal: ${(items.price * items.quantity).toFixed(2)}</p>
                </span>
              </div>
            </div>
          ))}
          <section className='flex justify-center items-center'>
          <form className='bg-[#F8F8FD] flex flex-col rounded-sm shadow-md'>
            <div className='flex flex-col justify-start items-start'>
            <h2 className='font-bold text-[#1D3178]'>Contact Information</h2>
            <input type="text" name="contactinfo" id="contactinfo" placeholder='Email or mobile phone number' required className='bg-[#F8F8FD] underline py-2 decoration-gray-400' />
            <p className='text-gray-500'> ✔ Keep me up to date on news and excluive offers</p>
            </div>
            {/* shipping */}
            <div className='flex flex-col'>
              <h2 className='font-bold text-[#1D3178]'>Shipping address</h2>
              <span >
               <input type="text" name="username" id="username" placeholder='First name' required className='bg-[#F8F8FD] py-2 underline decoration-gray-400' />
               <input type="text" name="username" id="username" placeholder='Last name' required className='bg-[#F8F8FD] underline py-2 decoration-gray-400' />
              </span>
                <input type="text" name='address' id='address' placeholder='Enter your address' required className='bg-[#F8F8FD] py-2 underline decoration-gray-400' />
                <input type="text" name='apartmentNo' id='apartmentNo' placeholder='Appaetnentment,suit,e.t.c (optinal)' required className='bg-[#F8F8FD] py-2 underline decoration-gray-400' />
                <input type="text" name='City' id='City' placeholder='City' required className='bg-[#F8F8FD] py-2 underline decoration-gray-400' />
               <span>
                 <input type="text" name='Country' id='Country' placeholder='Country' required className='bg-[#F8F8FD] py-2 underline decoration-gray-400' />
                 <input type="text" name='postalCode' id='PostalCode' placeholder='Postal code' required className='bg-[#F8F8FD] py-2 underline decoration-gray-400' />
               </span>
               <button className='bg-pink-500 text-white py-2 rounded-md' onClick={shipping}>Continue shipping</button>
            </div>
          </form>
          </section>
        </div>
      )}
    </section>
  )
}

export default Page;