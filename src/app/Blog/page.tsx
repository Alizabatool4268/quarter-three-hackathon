import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GoDotFill } from "react-icons/go";
import { FaPenNib } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function Blog() {
    const Blog=[
        {id:1, image:"/Images/blog-pic-1.png", heading:"Mauris at orci non vulputate diam tincidunt nec."},
        {id:2, image:"/Images/blog-pic-2.png", heading:"Aenean vitae in aliquam ultrices lectus. Etiam."},
        {id:3, image:"/Images/blog-pic-3.png", heading:"Sit nam congue feugiat nisl, mauris amet nisi."},
    ];
    const recentPost =[
        {id:4 , image:"/Images/Rectangle 126 (1).png" , title:"It is a long established fact" ,date:"Aug 09 2020"},
        {id:5 , image:"/Images/Rectangle 126 (2).png" , title:"It is a long established fact" ,date:"Aug 09 2020"},
        {id:6 , image:"/Images/Rectangle 126 (3).png" , title:"It is a long established fact" ,date:"Aug 09 2020"},
    ];
    const saleProduct =[
        {id:4 , image:"/Images/Rectangle 126 (4).png" , title:"Elit ornare in enim mauris." ,date:"Aug 09 2020"},
        {id:5 , image:"/Images/Rectangle 126 (5).png" , title:"Elit ornare in enim mauris." ,date:"Aug 09 2020"},
        {id:6 , image:"/Images/Rectangle 126 (6).png" , title:"Elit ornare in enim mauris." ,date:"Aug 09 2020"},
    ];
    const offerproducts =[
        {id:7 , image:"/Images/Mask Group (2).png",title:"Duis lectus est." ,date:"$12.00 - $15.00"},
        {id:8 , image:"/Images/Mask Group (3).png",title:"Sed placerat." ,date:"$12.00 - $15.00"},
        {id:9 , image:"/Images/salep.png",title:"Netus proin." ,date:"$12.00 - $15.00"},
        {id:10 ,image:"/Images/Mask Group (4).png",title:"Platea in." ,date:"$12.00 - $15.00"},
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
        {/* main blog section start */}
        <section className='flex justify-center gap-6 flex-row-reverse'>
            {/* blog sidebar */}
            <section className='mt-7 flex flex-col gap-4'>
             <h2 className='font-bold text-[#151875]'>Search</h2>
              <span className='flex justify-center items-center'>
                <input type="text" className='h-[40px] border-[1px] border-solid border-black w-[300px] xsm:w-[250px] md:w-[260px] sm:w-[400px]' />
                <span  className='bg-white h-[40px] w-[30px] text-black text-[24px] flex items-center border-[1px] border-solid border-black'><CiSearch /></span>
              </span>
              {/* sidebar categories */}
             <h2 className='text-[#151875] font-bold'>Categories</h2>
              <div className='grid grid-cols-2 grid-rows-3 text-center'>
                <p className='hover:bg-pink-500 hover:text-white'>Hobbies (14)</p>
                <p className='hover:bg-pink-500 hover:text-white'>Women (21)</p>
                <p className='hover:bg-pink-500 hover:text-white'>Women (21)</p>
                <p className='hover:bg-pink-500 hover:text-white'>Women (21)</p>
                <p className='hover:bg-pink-500 hover:text-white'>Women (21)</p>
                <p className='hover:bg-pink-500 hover:text-white'>Women (21)</p>
              </div>
              {/* recent post */}
              <h2 className='text-[#151875] font-bold'>Recent posts</h2>
              <div className='w-[300px]'>
                {recentPost.map((receost)=>(
                    <div className='flex justify-around items-center' key={receost.id}>
                        <Image height={50} width={50} src={receost.image} alt='recentpost'></Image>
                        <span>
                            <p className='text-[#3F509E] text-sm'>{receost.title}</p>
                            <p className='text-gray-500 text-sm'>{receost.date}</p>
                        </span>
                    </div>
                ))}
              </div>
              {/* saleproduct post */}
              <h2 className='text-[#151875] font-bold'>Recent posts</h2>
              <div className='w-[300px]'>
                {saleProduct.map((salep)=>(
                    <div className='flex justify-around items-center' key={salep.id}>
                        <Image height={50} width={50} src={salep.image} alt='recentpost'></Image>
                        <span>
                            <p className='text-[#3F509E] text-sm'>{salep.title}</p>
                            <p className='text-gray-500 text-sm'>{salep.date}</p>
                        </span>
                    </div>
                ))}
              </div>
              {/* saleproduct post */}
              <h2 className='text-[#151875] font-bold'>Offer product</h2>
              <div className='w-[300px] grid grid-cols-2 grid-rows-2 gap-3'>
                {offerproducts.map((offp)=>(
                    <div className='flex justify-around items-center' key={offp.id}>
                        <Image height={50} width={50} src={offp.image} alt='recentpost'></Image>
                        <span>
                            <p className='text-[#3F509E] text-[10px]'>{offp.title}</p>
                            <p className='text-gray-500 text-[10px]'>{offp.date}</p>
                        </span>
                    </div>
                ))}
              </div>
              {/* follow */}
              <span>
                <h2 className='text-[#151875] font-bold'>Follow</h2>
                 <span className=' flex gap-1 text-[#151875]'>
                    <FaFacebook className='text-blue-500' />
                    <FaTwitterSquare className='text-pink-500' />
                    <FaInstagramSquare className='text-cyan-400'/>
                </span>
              </span>
                <h2 className='text-[#151875] font-bold'>Tags</h2>
              <span className='grid grid-cols-3 text-[#151875] cursor-pointer'>
                <p className='hover:text-pink-500 hover:underline decoration-pink-500'>General</p>
                <p className='hover:text-pink-500 hover:underline decoration-pink-500'>Atsanil</p>
                <p className='hover:text-pink-500 hover:underline decoration-pink-500'>Insas.</p>
                <p className='hover:text-pink-500 hover:underline decoration-pink-500'>Bibsaas</p>
                <p className='hover:text-pink-500 hover:underline decoration-pink-500'>Nulla.</p>
              </span>
            </section>
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
        </section>
        <section className="flex justify-center items-center w-full mt-20">
            <Image height={100} width={500} alt="brands" src={"/Images/image 1174.png"}></Image>
        </section>
    </section>
  )
}

export default Blog;