import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuRectangleHorizontal } from "react-icons/lu";
import { TbRectangleFilled } from "react-icons/tb";

function Page() {
  const shopexOffer = [
    { id: 1, image: "/Images/free-delivery 1.png", heading: "24/7 Support" },
    { id: 2, image: "/Images/cashback 1.png", heading: "24/7 Support" },
    { id: 3, image: "/Images/Group.png", heading: "24/7 Support" },
    { id: 4, image: "/Images/24-hours-support 1.png", heading: "24/7 Support" },
  ];
  return (
    <main>
      <div className="w-full h-[200px] bg-[#F6F5FF] mt-5">
        <h1 className="text-[36px] font-bold">About us</h1>
        <span className="flex gap-3">
          <Link href={"/"}>Home</Link>
          <p className="text-[#FB2E86]">About us</p>
        </span>
      </div>
      {/* about us main div */}
      <section className="mt-11">
        <div className="flex justify-center gap-4 items-center msm:flex-col ssm:flex-col xsm:flex-col msm:text-center xsm:text-center ssm:text-center ">
          <Image
            height={309}
            width={500}
            src={"/Images/Rectangle 56.png"}
            alt="aboutUsHeroImage"
            className="border-l-8 border-b-8 rounded-2xl border-[#2B3CAB] border-solid "
          ></Image>
          <div className="w-[300px]">
            <h1 className="text-[#151875] text-[36px] font-bold sm:text-[28px]">
              Know About Our Ecomerce Business, History
            </h1>
            <p className="text-[#8A8FB9]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
            <Link
              href={"/Contact"}
              className="bg-pink-500 py-2 rounded-sm text-white px-3"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
      {/* shopex offer */}
      <section className="flex justify-center items-center flex-col mt-14">
        <h1 className="text-[42px] flex justify-center items-center font-bold text-[#151875] xsm:text-[28px] ssm:text-[28px] msm:text-[35px] ">
          What Shopex Offer!
        </h1>
        <div
          className="grid grid-cols-4 gap-3 grid-rows-1 xsm:grid-cols-1 xsm:grid-rows-4 md:grid-cols-2
                md:grid-rows-2 ssm:grid-cols-1 ssm:grid-rows-4 msm:grid-cols-1 msm:grid-rows-4 sm:grid-cols-2 
                sm:grid-rows-2 text-center"
        >
          {shopexOffer.map((product) => (
            <div
              className="h-[320px] w-[270px] flex justify-center items-center md:h-[280px] flex-col shadow-md hover:border-b-2 border-yellow-300 border-solid"
              key={product.id}
            >
              <Image
                height={54}
                width={54}
                alt="services"
                src={product.image}
              ></Image>
              <h3 className="text-[#151875] font-bold">{product.heading}</h3>
              <p className="text-[#1A0B5B4D] ">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit. <br /> Massa purus gravida.
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* client reviews */}
      <section className="bg-[#FBFBFF] mt-11 flex justify-center items-center flex-col">
        <h1 className="text-[25px] font-bold text-center">Our Client Say!</h1>
        <div className="flex gap-2">
          <Image height={45} width={45} src={"/Images/Mask Group.png"} alt="reviews"></Image>
          <Image height={55} width={55} src={"/Images/aboutUsReview.png"} alt="reviews"></Image>
          <Image height={45} width={45} src={"/Images/Mask Group (1).png"} alt="reviews"></Image>
        </div>
        <span className="text-sm text-center">
         <p className="text-[#151875] font-bold">Selina Gomez</p>
         <p>Ceo At Webecy Digital</p>
        </span>
        <p className="text-gray-500 w-[280px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui 
          sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique 
          ultrices dolor aliquam lacus volutpat praesent.
        </p>
        <div className="text-[#FB2E86] flex justify-center items-center gap-2 text-sm mt-4">
                 <TbRectangleFilled />
                 <LuRectangleHorizontal />
                 <LuRectangleHorizontal />
                 <LuRectangleHorizontal />
               </div>
        <button></button>
      </section>
    </main>
  );
}

export default Page;
