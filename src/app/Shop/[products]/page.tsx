"use client";
import React from "react";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Loader from "@/components/Loader";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { IoStar } from "react-icons/io5";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

interface PageProps {
  params: Promise<{
    products: string;
  }>;
}
interface ProductsDetails {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  discountPercentage: number;
  stockLevel: number;
  category: string;
}
function Page({ params }: PageProps) {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<ProductsDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const resolvedParams = await params;
        const productId = resolvedParams.products;
        if (!productId) {
          setError("Invalid product ID");
          return;
        }

        const fetchedProduct = await client.fetch<ProductsDetails>(
          groq`*[_type == "product" && _id == $productId][0]`,
          { productId }
        );
        if (!fetchedProduct) {
          setError("Product not found");
          return;
        }
        setProduct(fetchedProduct);
        setError(null);
      } catch (error) {
        console.error("Error:", error);
        setError("Error loading product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params]);
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!product) {
    return null;
  }
  return (
    <main>
      <section>
        <div className="w-full h-[200px] bg-[#F6F5FF] mt-5">
          <h1 className="text-[36px] font-bold">Product Details</h1>
          <span className="flex gap-3">
            <Link href={"/"}>Home</Link>
            <p className="text-[#FB2E86]">Product Details</p>
          </span>
        </div>
      </section>
      <section className="flex justify-center gap-4 items-center mt-11 shadow-md xsm:flex-col ssm:flex-col msm:flex-col">
        <div className="grid grid-cols-3 grid-rows-3 gap-3 w-[300px] mt-11">
          <span className="border-[1px] border-solid border-gray-300">
            <Image
              height={100}
              width={100}
              src={urlFor(product.image).url()}
              alt={product.name}
            ></Image>
          </span>
          <span className="col-span-2 row-span-3 flex justify-center items-center border-[1px] border-solid border-gray-300">
            <Image
              height={200}
              width={200}
              src={urlFor(product.image).url()}
              alt={product.name}
            ></Image>
          </span>
          <span className="row-start-2 border-[1px] border-solid border-gray-300">
            <Image
              height={100}
              width={100}
              src={urlFor(product.image).url()}
              alt={product.name}
            ></Image>
          </span>
          <span className="row-start-3 border-[1px] border-solid border-gray-300">
            <Image
              height={100}
              width={100}
              src={urlFor(product.image).url()}
              alt={product.name}
            ></Image>
          </span>
        </div>
        <div className="flex flex-col gap-2 ">
          <h1 className="text-[#0D134E] font-bold ">{product.name}</h1>
          <span className="flex gap-1 text-yellow-300">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </span>
          <span className="flex gap-2">
            <p>${product.price}</p>
            <p className="text-pink-600">Discount {product.discountPercentage}%</p>
          </span>
          <span className="flex items-center">
             <p className="text-[#0D134E] font-bold">Color</p>
             <span className="flex">
              <GoDotFill className="text-[#9d8cd2] text-[25px]" />
              <GoDotFill className="text-[#000000] text-[25px]" />
              <GoDotFill className="text-[#8a591e] text-[25px]" />
            </span>
          </span>
          <p className="text-[#A9ACC6]">{product.description}</p>
          <span className="flex items-center gap-2">
            <p className="text-[#0D134E] font-bold">Categories:</p>
            <p className="text-[#0D134E] cursor-pointer">S L</p>
          </span>
          <span className="flex gap-2">
            <p className="text-[#0D134E] font-bold">share</p>
             <span className=" flex justify-center items-center gap-1">
              <FaFacebook className="text-[#0D134E]" />
              <FaTwitterSquare className="text-pink-600" />
              <FaInstagramSquare  className="text-[#0D134E]"/>
             </span>
          </span>
          <button className="hover:bg-[#8175ec] hover:text-white text-[#0D134E] h-[35px] w-[100px] rounded-sm">
            Add to cart
          </button>
        </div>
      </section>
      <section className="mt-14 bg-[#F6F5FF] py-8">
        <div className="flex justify-around items-center text-[#151875] font-bold cursor-pointer xsm:text-sm">
            <p className="underline">Description</p>
            <p>Additional Info</p>
            <p>Reviews</p>
            <p>Video</p>
        </div>
        <div>
            <h3 className="text-[#151875] font-bold text-[28px]">Varius tempor.</h3>
            <p className="text-[#A9ACC6]">
             Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend 
             habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur
             neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget
             faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis 
             justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
            </p>
        </div>
        <div>
            <h3 className="text-[#151875] font-bold text-[28px]">More details</h3>
              <span className="flex gap-1 ssm:flex-col xsm:flex-col">
                <IoMdArrowForward className="text-black text-[22px]"/>
                <p className="flex items-center text-[#A9ACC6]">
                 Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
              </span>
            <br />
              <span className="flex gap-1 ssm:flex-col xsm:flex-col">
                <IoMdArrowForward className="text-[#151875] text-[22px]"/>
                <p className="flex items-center text-[#A9ACC6]">
                 Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>           
              </span>
            <br />
              <span className="flex gap-1 ssm:flex-col xsm:flex-col">
                <IoMdArrowForward className="text-black text-[22px]"/>
                <p className="flex items-center text-[#A9ACC6]">
                 Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
              </span>
            <br />
              <span className="flex gap-1 ssm:flex-col xsm:flex-col">
                <IoMdArrowForward className="text-black text-[22px]"/>
              <p className="flex items-center text-[#A9ACC6]">
                 Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
              </span>
        </div>
      </section>
        <section className="flex justify-center items-center w-full mt-11">
          <Image height={100} width={500} alt="brands" src={"/Images/image 1174.png"}></Image>
        </section>
    </main>
  );
}

export default Page;
