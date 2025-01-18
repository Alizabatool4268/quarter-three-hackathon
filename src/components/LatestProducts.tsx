"use client";
import React from 'react';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import {client} from "@/sanity/lib/client";
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Loader from '@/components/Loader';

function LatestProducts() {
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
            *[_type=="product" && LatestProducts == true]{
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
    <section className="flex justify-center items-center flex-col mt-16">
       <h1 className="text-[42px] text-[#1A0B5B] font-bold flex justify-center items-center xsm:text-[32px] ssm:text-[34px]">Leatest Products</h1>
       <div className="flex justify-center items-center gap-2 xsm:text-[12px]">
       <p  className='hover:text-[#FB2E86] hover:underline decoration-[#FB2E86]'>New Arrival</p>
       <p  className='hover:text-[#FB2E86] hover:underline decoration-[#FB2E86]'>Best Seller</p>
       <p  className='hover:text-[#FB2E86] hover:underline decoration-[#FB2E86]'>Featured</p>
       <p  className='hover:text-[#FB2E86] hover:underline decoration-[#FB2E86]'>Special Offer</p>
       </div>
       <div className="grid grid-rows-2 grid-cols-3 gap-6 mt-3 md:grid-cols-2 md:grid-rows-3  sm:grid-cols-2 sm:grid-rows-3 msm:grid-cols-1 msm:grid-rows-4 ssm:grid-cols-1 ssm:grid-rows-4 xsm:grid-cols-1 xsm:grid-rows-4">
         {product.map((products)=>(
          <div className="h-[365px] w-[306px] msm:w-[260px] shadow-md flex justify-center items-center" key={products._id}>
            <div className="flex justify-center flex-col items-center ">
              <Image height={223} width={229} alt="products" src={urlFor(products.image).url()} className="bg-[#F7F7F7]"></Image>
              <span className="w-[229px] flex justify-between items-center msm:w-[200px] flex-col" >
              <Link href={`/Shop/${products._id}`} className='text-[#2F1AC4]'>{products.name}</Link>
                 <span className="flex justify-center items-center gap-2">
                 <p className="text-[#2F1AC4]">{products.price}</p>
                 <p className="text-red-600">{products.discountPercentage}% off</p>
                 </span>
              </span>
            </div>
          </div>
         ))}
       </div>
     </section>
  )
}

export default LatestProducts;