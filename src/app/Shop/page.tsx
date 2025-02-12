"use client"
import React from 'react';
import Link from 'next/link';
import { FaWindows } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { useState,useEffect } from 'react';
import {client} from "@/sanity/lib/client";
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Loader from '@/components/Loader';
import { GoDotFill } from "react-icons/go";
import { useCart } from '@/components/cartcontext';


function Page() {
  interface ProductsDetails{
       _id: string,
       name: string,
       image: string,
       price: number,
       description: string,
       discountPercentage: number,
       stockLevel: number,
       category: string
  };

  const {
      getStockLevel,
      cartItems,
    } = useCart();

  const [products, setProducts] = useState<ProductsDetails[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductsDetails[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [loading, setLoading] = useState(false);

  const Mycategories = ['All', 'Chair', 'Sofa'];
  const getGridClasses = (category: string) => {
    if (category === 'Sofa') {
      return 'grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 ' +
             'sm:grid-cols-1 msm:grid-cols-1 ssm:grid-cols-1 xsm:grid-cols-1';
    }
    return 'grid grid-cols-4 grid-rows-3 gap-2 md:grid-cols-2 md:grid-rows-5 ' +
           'lg:grid-cols-3 lg:grid-rows-4 xl:grid-cols-4 xl:grid-rows-3 ' +
           'sm:grid-cols-2 sm:grid-rows-5 msm:grid-cols-1 msm:grid-rows-12 ' +
           'ssm:grid-cols-1 ssm:grid-rows-12 xsm:grid-cols-1 xsm:grid-rows-12';
  };

  // Function to handle the categories 
  const handleCategoryFilter = async (category: string) => {
    setLoading(true);
    setSelectedCategory(category);

    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = await client.fetch(`
        *[_type == "product" && category == "${category}"]{
          _id,
          name,
          image,
          price,
          description,
          discountPercentage,
          stockLevel,
          category
        }
      `);
      setFilteredProducts(filtered);
    }
    setLoading(false);
  };

  // Fetch all products on initial load
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const fetchProductData: ProductsDetails[] = await client.fetch(`
        *[_type == "product"]{
          _id,
          name,
          image,
          price,
          description,
          discountPercentage,
          stockLevel,
          category
        }
      `);
      setLoading(false);
      setProducts(fetchProductData);
      setFilteredProducts(fetchProductData);
    }
    fetchProducts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main>
      <section>
        <div className='w-full h-[200px] bg-[#F6F5FF] mt-5'>
          <h1 className='text-[36px] font-bold'>Shop Grid Default</h1>
          <span className='flex gap-3'>
            <Link href={"/"}>Home</Link>
            <p className='text-[#FB2E86]'>Shop Grid Default</p>
          </span>
        </div>

        <div className='flex justify-around items-center xsm:flex-col ssm:flex-col'>
           <span>
            <h5 className='text-[#151875] font-bold'>Ecommerce Acceories & Fashion item </h5>
            <p className='text-[#8A8FB9]'>About 9,620 results (0.62 seconds)</p>
           </span>
           <span className='flex justify-center gap-1 items-center msm:flex-col ssm:flex-col xsm:flex-col sm:flex-col'>
              <span className='flex gap-1'>
                <p>Per Page:</p>
                <p className='border-[1px] border-solid border-black h-[25px] w-[35px] sm:w-[100px] ssm:w-[100px] xsm:w-[100px] msm:w-[100px]'></p>
              </span>
              <span className='flex gap-1'>
                <p>Sort By:</p>
                <select name="matchproduct" id="matchproduct" className='border-[1px] border-solid border-black rounded-sm'>
                 <option value="Bestmatch"  >Best Match</option>
                </select>
              </span>
              <span className='flex gap-1'>
                <p className='flex gap-1 items-center'>View:<FaWindows/> <FaList /> </p>
                <p className='border-[1px] border-solid border-black h-[30px] w-[162px]'></p>
              </span>
           </span>
       </div>
      </section>

      <div className="flex justify-center gap-4 my-8">
          {Mycategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedCategory === category
                  ? 'bg-[#FB2E86] text-white'
                  : 'bg-[#F6F5FF] text-[#151875] hover:bg-[#FB2E86] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      <section  className={getGridClasses(selectedCategory)}>
        {filteredProducts.slice(0, 12).map((data) => (
          <div className='flex justify-center items-center' key={data._id}>
            <div className={`w-[270px] flex justify-center items-center flex-col bg-[#F2F0FF] hover:bg-[#EBF4F3] `}>
              <Image width={169} height={169} src={urlFor(data.image).url()} alt={data.name}></Image>
              <span className='flex justify-center flex-col items-center'>
                <Link href={`/Shop/${data._id}`}>
                  <h1 className='text-[#151875] text-center'>{data.name}</h1>
                </Link>
                <span className='flex gap-1'>
                  <GoDotFill className='text-[#DE9034]'/>
                  <GoDotFill className='text-[#EC42A2]'/>
                  <GoDotFill className='text-[#8568FF]'/>
                </span>
                <span className='flex gap-3'>
                  <p className='text-[#151875] text-sm'>${data.price}</p>
                  <p className='text-[#FB2E86] text-sm'>Discount {data.discountPercentage}%</p>
                </span>
                <p className='text-[#151875]' >stock{cartItems.length === 0 ? data.stockLevel : getStockLevel(data._id) }</p>
              </span>
            </div>
          </div>
        ))}
      </section>

      <section className="flex justify-center items-center w-full mt-11">
        <Image height={100} width={500} alt="brands" src={"/Images/image 1174.png"}></Image>
      </section>
    </main>
  );
}

export default Page;