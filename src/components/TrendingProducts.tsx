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

function TrendingProduct() {
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
            *[_type=="product" && TrendingProducts == true]{
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
    <main>

    <section className="mt-11">
      <h1  className="text-[42px] flex justify-center items-center font-bold text-[#151875] xsm:text-[28px]
       ssm:text-[28px] msm:text-[35px] ">Trending Products</h1>
       <div  className="grid grid-cols-4 grid-rows-1 gap-2 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-2 sm:grid-rows-2 
         msm:grid-cols-1 msm:grid-rows-4 ssm:grid-cols-1 ssm:grid-rows-4 xsm:grid-cols-1 xsm:grid-rows-4">
          {product.map((products)=>(
            <div className='flex justify-center items-center' key={products._id}>
              <div className="h-[350px] w-[270px] flex flex-col justify-around items-center shadow-md" key={products._id}>
              <div className="bg-[#F5F6F8]">
              <Image height={171} width={171} alt="trendingproducts" src={urlFor(products.image).url()} ></Image>
              </div>
               <span >
                  <Link href={`/Shop/${products._id}`} className='text-blue-700'>{products.name}</Link>
                  <span className="flex justify-between items-center text-sm">
                    <p className="text-[#151875]">{products.discountPercentage}%</p>
                    <p className="text-[#1518754D]">{products.price}</p>
                  </span>
               </span>
            </div>
          </div>

))}
       </div>
     </section>
     <section className='grid grid-cols-3 mt-11 grid-rows-1 md:grid-cols-2 md:grid-rows-2 xsm:grid-cols-1 xsm:grid-rows-3 ssm:grid-cols-1 ssm:grid-rows-3 msm:grid-cols-1 msm:grid-rows-3 sm:grid-cols-1 sm:grid-rows-3'>
      
      <div className='flex justify-center items-center'>
        <span className="h-[270px] w-[420px] bg-[#FFF6FB] ssm:w-[300px] xsm:w-[260px]  msm:w-[300px]">
          <div className="flex flex-col justify-start items-start mt-4">
           <h1 className="text-[#151875] font-semibold">23% off in all products</h1>
           <Link href={"/"} className="text-[#FB2E86] underline decoration-[#FB2E86]">Shop Now</Link>
          </div>
          <span className="flex justify-end items-end">
            <Image height={100} width={200} alt="info" src={"/Images/image 1162.png"} ></Image>
          </span>
         </span>
      </div>

      <div className='flex justify-center items-center'>
         <span className="h-[270px] w-[420px] bg-[#EEEFFB] ssm:w-[300px] xsm:w-[260px] msm:w-[300px]">
          <div className="flex flex-col justify-start items-start mt-4">
           <h1 className="text-[#151875] font-semibold">23% off in all products</h1>
           <Link href={"/"} className="text-[#FB2E86] underline decoration-[#FB2E86]">View Collection</Link>
          </div>
          <span className="flex justify-end items-end">
            <Image height={300} width={300} alt="info" src={"/Images/image 1161.png"} ></Image>
          </span>
         </span>
      </div>


         <div className="flex flex-col gap-3 w-[420px] ">
           <span className="flex justify-center items-center">
           <Image height={71} width={64} alt="info" src={"/Images/image 30.png"} ></Image>
            <span className="text-[#151875] flex flex-col">
              <h5 >Executive Seat chair</h5>
              <p>$32.00</p>
            </span>
           </span>
           <span className="flex justify-center items-center">
           <Image height={71} width={64} alt="info" src={"/Images/image 19.png"} ></Image>
            <span className="text-[#151875] flex flex-col">
              <h5 >Executive Seat chair</h5>
              <p>$32.00</p>
            </span>
           </span>
           <span className="flex justify-center items-center">
           <Image height={71} width={64} alt="info" src={"/Images/image 28.png"} ></Image>
            <span className="text-[#151875] flex flex-col">
              <h5 >Executive Seat chair</h5>
              <p>$32.00</p>
            </span>
           </span>
         </div>
     </section>
</main>
  )
}

export default TrendingProduct;