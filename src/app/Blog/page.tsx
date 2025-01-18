import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GoDotFill } from "react-icons/go";
import { FaPenNib } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

function Blog() {
    const Blog=[
        {id:1, image:"/Images/blog-pic-1.png", heading:"Mauris at orci non vulputate diam tincidunt nec."},
        {id:2, image:"/Images/blog-pic-2.png", heading:"Aenean vitae in aliquam ultrices lectus. Etiam."},
        {id:3, image:"/Images/blog-pic-3.png", heading:"Sit nam congue feugiat nisl, mauris amet nisi."},
    ]
  return (
    <section className='overflow-x-hidden'>
        <div className='w-full h-[200px] bg-[#F6F5FF] mt-5'>
           <h1 className='text-[36px] font-bold'>Blog Page</h1>
           <span className='flex gap-3'>
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Page</Link>
              <p className='text-[#FB2E86]'>Blog Page</p>
           </span>
        </div>
        <div className='flex justify-center items-center'>
                <input type="text" className='h-[40px] border-[1px] border-solid border-black w-[300px] xsm:w-[250px] md:w-[260px] sm:w-[400px]' />
               <span  className='bg-[#FB2E86] h-[40px] w-[30px] text-white text-[24px] flex items-center'><CiSearch /></span>
            </div>
        <div className='flex justify-around items-center flex-col gap-9 mt-14'>
            {Blog.map((blogs)=>(
                <div className='flex justify-center items-center flex-col' key={blogs.id}>
                     <Image height={450} width={450} alt='blogimg' src={blogs.image} className='xsm:w-[280px]'></Image>
                     <span className="flex justify-around items-center gap-1">
                      <p className="flex ">
                      <FaPenNib className="text-[#FB2E86]"/>
                       SaberAli
                     </p> 
                     <p className="flex">
                      <FaRegCalendarAlt className="text-[#FFA454]"/>
                      21 August,2020
                     </p>
                    </span>
                    <span>
                        <h5 className='text-[#151875] font-bold'>{blogs.heading}</h5>
                        <p className='text-sm text-[#8A8FB9] xsm:text-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Velit facilisis quis  auctor pretium ipsum, eu rutrum. Condimentum <br />
                         eu malesuada vitae ultrices in in neque, porta dignissim. <br /> Adipiscing purus, cursus vulputate id id dictum at.</p>
                    </span>
                    <p className='flex items-center'>Read More <GoDotFill className='text-[#FB2E86]'/></p>
                </div>
            ))}
        </div>
        <section className="flex justify-center items-center w-full mt-20">
            <Image height={100} width={500} alt="brands" src={"/Images/image 1174.png"}></Image>
        </section>
    </section>
  )
}

export default Blog;