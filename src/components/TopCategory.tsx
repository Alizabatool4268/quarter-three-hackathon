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
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";

function Topcategory() {
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
            *[_type=="product" && TopCategory == true]{
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
    <section  className=" flex justify-center items-center flex-col">
      <h1 className="text-[42px] flex justify-center items-center font-bold text-[#151875] xsm:text-[28px]
       ssm:text-[28px] msm:text-[35px] ">Top Categories</h1> 
       <div className="grid grid-cols-4 gap-2 grid-rows-1 md:grid-cols-2 md:grid-rows-2 xsm:grid-cols-1 xsm:grid-rows-4 ssm:grid-cols-1 ssm:grid-rows-4 msm:grid-cols-1 msm:grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 ">
         {product.map((products)=>(
          <div className='flex justify-center items-center' key={products._id}>
           <div className="h-[350px] w-[270px] flex flex-col justify-around items-center shadow-md" key={products._id}>
            <span className="bg-[#31208A0D] h-[230px] w-[230px] rounded-[50%] flex justify-center items-center hover:border-l-8 border-solid border-purple-500">
               <Image height={178} width={178} alt="topcategories" src={urlFor(products.image).url()}></Image>
            </span>
            <span className="flex justify-center items-center flex-col text-[#151875]">
              <Link href={`/Shop/${products._id}`} className='text-[#2F1AC4] text-center'>{products.name}</Link>
              <p>{products.price}$</p>
            </span>
           </div>  
          </div>
         ))}
       </div>
       <div className="text-[#FB2E86] flex justify-center items-center">
        <GoDotFill />
        <GoDot/>
        <GoDot/>
       </div>
     </section>
     
  )
}

export default Topcategory;