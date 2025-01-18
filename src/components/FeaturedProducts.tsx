"use client";
import React from 'react';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import {client} from "@/sanity/lib/client";
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Loader from '@/components/Loader';
import { LuRectangleHorizontal } from "react-icons/lu";
import { TbRectangleFilled } from "react-icons/tb";

function FeaturedProduct() {
   interface ProductsDetails{
        _id:string,
        name:string,
        image:string,
        price:number,
        description:string,
        discountPercentage:number,
        stockLevel:number,
        category:string
   };
   const [product,setproduct] = useState<ProductsDetails[]>([]);
   const [Loading,setLoading] = useState(false);
   useEffect(()=>{
    async function fetchproduct (){
        setLoading(true)
        const fetchproductdata:ProductsDetails[]= await client.fetch(`
            *[_type=="product" && isFeaturedProduct == true]{
              _id,
              name,
              image,
              price,
             description,
             discountPercentage,
             stockLevel,
             category
         }`)
        console.log("fetched product",fetchproductdata);
        setLoading(false)
        setproduct(fetchproductdata)
    }
    fetchproduct()
   },[]);
   if(Loading === true){
    return(<Loader/>)
   }
   if(!product){
    console.log("product not found")
   }

  return (
    <section className="mt-11">
       <h1 className="text-[42px] text-[#1A0B5B] font-bold flex justify-center items-center xsm:text-[32px] ssm:text-[34px]">Featured Products</h1>
       <div className="grid grid-cols-4 grid-rows-1 gap-2 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-2 sm:grid-rows-2 
         msm:grid-cols-1 msm:grid-rows-4 ssm:grid-cols-1 ssm:grid-rows-4 xsm:grid-cols-1 xsm:grid-rows-4">
        {product.map((products)=>(
        <div className='flex justify-center items-center'  key={products._id}>
          <div className="h-[261px] w-[270px] flex flex-col justify-around items-center shadow-md" key={products._id}>
             <div className='bg-[#EEEFFB] w-[270px] flex justify-center items-center'>
             <Image height={130} width={150} alt="product" src={urlFor(products.image).url()}></Image>
             </div>
             <div className="flex justify-center items-center flex-col hover:bg-[#2F1AC4] w-[270px]">
               <Link href={`/Shop/${products._id}`} className='text-pink-600'>{products.name}</Link>
               <Image height={24} width={54} alt="seperator" src={"/Images/Group 141.png"} ></Image>
               <p>${products.price}</p>
             </div>
          </div>
        </div>
        ))}
       </div>
       <div className="text-[#FB2E86] flex justify-center items-center gap-2 text-sm mt-4">
         <TbRectangleFilled />
         <LuRectangleHorizontal />
         <LuRectangleHorizontal />
         <LuRectangleHorizontal />
       </div>
     </section>
  )
}

export default FeaturedProduct;