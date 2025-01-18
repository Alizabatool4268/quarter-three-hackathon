import Herosection from "@/components/Herosection";
import Image from "next/image";
import FeaturedProduct from "@/components/FeaturedProducts";
import LatestProducts from "@/components/LatestProducts";
import { GoDotFill } from "react-icons/go";
import TrendingProduct from "@/components/TrendingProducts";
import { TiTick } from "react-icons/ti";
import Link from "next/link";
import Topcategory from "@/components/TopCategory";
import { FaPenNib } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function Home() {
  const shopexOffer =[
    { id:1,image:"/Images/free-delivery 1.png", heading:"24/7 Support"},
    { id:2,image:"/Images/cashback 1.png", heading:"24/7 Support"},
    { id:3,image:"/Images/Group.png", heading:"24/7 Support"},
    { id:4,image:"/Images/24-hours-support 1.png", heading:"24/7 Support"}
  ];
  const latestBlog =[
    {id:5, image:"/Images/bedroom-1.png", heading:"Top esssential Trends in 2021"},
    {id:6, image:"/Images/bedroom-2.png", heading:"Top esssential Trends in 2021"},
    {id:7, image:"/Images/bedroom-3.png", heading:"Top esssential Trends in 2021"},
  ]
  return (
   <main className="overflow-x-hidden">
     <section> <Herosection /> </section>
     <section> <FeaturedProduct/> </section>
     <section> <LatestProducts/> </section>
     {/* shopex offer */}
     <section className="flex justify-center items-center flex-col mt-11">
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
     {/* unique features */}
     <section className="mt-5 bg-[#F1F0FF] overflow-x-hidden">
        <div className="flex justify-center items-center gap-2 msm:flex-col ssm:flex-col xsm:flex-col sm:flex-col">
          <Image height={550} width={558} alt="featuresImages" src={"/Images/Group 153.png"} className="md:w-[400px] xsm:w-[280px]  "></Image>
          <div className="flex flex-col gap-3">
            <h1 className="text-[35px] text-[#151875] font-semibold md:text-[30px] msm:text-[29px] xsm:text-[24px]">Unique Features Of leatest & <br className="xsm:hidden"/>Trending Poducts</h1>
           <ul className="flex justify-center flex-col xsm:text-[10px] ssm:text-sm msm:text-sm ">
             <li className="flex"> <GoDotFill className="text-red-600"/>All frames constructed with hardwood solids and laminates</li>
             <li className="flex"> <GoDotFill className="text-blue-700"/>Reinforced with double wood dowels, glue, screw - nails corner <br /> blocks and machine nails</li>
             <li className="flex"> <GoDotFill className="text-cyan-500"/>  Arms, backs and seats are structurally reinforced</li>
           </ul>
           <span className="flex gap-1">
             <button className="text-white h-[45px] w-[157px] bg-[#FB2E86] xsm:text-sm ssm:text-sm xsm:w-[120px]">Add To Cart</button>
             <span className="xsm:text-sm">
             <p>B&B Italian Sofa </p>
             <p>$32.00</p>
             </span>
           </span>
           </div>
         </div>
     </section>
     <section>
      <TrendingProduct/>
     </section>
     {/* discount */}
     <section className="mt-11">
       <h1  className="text-[42px] flex justify-center items-center font-bold text-[#151875] xsm:text-[28px]
       ssm:text-[28px] msm:text-[35px] ">Discount Item</h1>
       <div className="flex justify-center items-center gap-2 ">
         <p className='hover:text-[#FB2E86] cursor-pointer'>Wood Chair</p>
         <p className='hover:text-[#FB2E86] cursor-pointer'>Plastic Chair</p>
         <p className='hover:text-[#FB2E86] cursor-pointer'>Sofa Colletion</p>
       </div>
       <div className=" flex justify-around items-center gap-3 msm:flex-col  ssm:flex-col xsm:flex-col sm:flex-col">
         <span className="ml-2">
           <h2 className="text-[35px] text-[#151875] font-bold">20% Discount Of All Products</h2>
           <p className="text-[#FB2E86]">Eams Sofa Compact</p>
           <p className="text-[#B7BACB]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget <br />
            feugiat habitasse nec, bibendum condimentum.
           </p>
           <div className="flex items-center gap-3 text-[#B7BACB] ">
           <span>
            <p className="flex"> <TiTick className="text-black"/> Material expose like metals</p>
            <p className="flex"> <TiTick className="text-black"/>Clear lines and geomatric figures</p>
           </span>
           <span>
            <p className="flex"> <TiTick className="text-black"/>Simple neutral colours.</p>
            <p className="flex"> <TiTick className="text-black"/>Material expose like metals</p>
           </span>
           </div>
           <button className="h-[46px] bg-[#FB2E86] w-[200px] text-white text-sm">Shop Now</button>
         </span>
         <Image width={699} height={597} alt="productImage" src={"/Images/Group 154.png"}></Image>
       </div>
     </section>
     <section><Topcategory/></section>
      {/* subsscribe to our newsteller */}
      <section className="mt-11">
      <div className="w-full bg-[url('/images/Rectangle-102.png')] bg-center bg-cover h-[462px] flex justify-center items-center flex-col">
       <h1 className="text-[35px] text-center text-[#151875] font-semibold md:text-[30px] msm:text-[29px] xsm:text-[24px]">Get Leatest Update By Subscribe <br /> 0ur Newslater</h1>
       <button className="text-white bg-[#FB2E86] h-[49px] w-[173px] rounded-sm">Shop Now</button>
      </div>
     </section>
     {/* brand sponser */}
     <section className="flex justify-center mt-11 items-center w-full">
       <Image height={100} width={500} alt="brands" src={"/Images/image 1174.png"}></Image>
     </section>
   {/* latest blog */};
   <section className="mt-11 flex justify-around items-center flex-col">
   <h1 className="text-[42px] flex justify-center items-center font-bold text-[#151875] xsm:text-[28px]
    ssm:text-[28px] msm:text-[35px] ">Leatest Blog</h1>
   <div className="grid grid-cols-3 grid-rows-1 gap-2 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-2 sm:grid-rows-2 
   msm:grid-cols-1 msm:grid-rows-3 ssm:grid-cols-1 ssm:grid-rows-3 xsm:grid-cols-1 xsm:grid-rows-3" >
     {latestBlog.map((products)=>(
      <div className="flex justify-center items-center" key={products.id}>
       <div className="h-[493px] w-[370px] flex justify-around items-center flex-col xsm:w-[280px] shadow-md" key={products.id}>
          <Image height={370} width={370} alt="bedroom" src={products.image}></Image>
          <span className="flex justify-around items-center gap-1">
            <p className="flex">
             <FaPenNib className="text-[#FB2E86]"/>
             SaberAli
           </p> 
           <p className="flex">
             <FaRegCalendarAlt className="text-[#FFA454]"/>
             21 August,2020
           </p>
          </span>
           <h5 className="text-[#151875] font-semibold">{products.heading}</h5>
           <p className="text-[#72718F]">More off this less hello samlande lied much <br />
           over tightly circa horse taped mightly</p>
           <Link href={"/"} className="text-[#151875] underline decoration-[#151875]">Read More</Link>
        </div>
      </div>
))};
   </div>
  </section>
</main>
  );
}
