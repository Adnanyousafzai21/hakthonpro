"use client";
import Image from "next/image";
import React, { useState } from "react";
import products from "@/utils/moks";
import Link from "next/link";
import { Button } from "../component/ui/button";
import Categories from "../component/viwes/categories";


const Products = () => {
  const [show, setShow] = useState(false);

  return (
    <>
     <div className="flex flex-col items-center  gap-10 md:flex-row md:justify-between  flex-wrap py-10 duration-500 md:px-28 max-w-[1500px] m-auto">
        {!show
          ? products.slice(0, 8).map((product, i) => (
              <Link key={i} href={`/products/${product.id}`}>
                {/* Rest of the product JSX */}
                <div className="bp-0 rounded pt-4 border border-sky-200 duration-300 w-[250px] hover:scale-105 ">
                  <Image
                    src={product.image}
                    alt=""
                    width={250}
                    height={200}
                    className="h-[160px] w-[200px] m-auto"
                  />
                  <div className=" flex flex-col items-center gap-y-3 pt-3 ">
                    <p className="font-bold">
                        {product.title.slice(0, 10)}
                    </p>
                    <p className="px-2 font-extralight">
                        {product.description.slice(0, 48)}
                    </p>
                    <p className="font-bold">
                       ${product.price}
                      </p>
                    
                      <Button className="bg-sky-300 mb-0 text-sm text-white h-[35px] w-full hover:bg-white hover:text-black hover:border border-black">
                        Details
                      </Button>
                   
                  </div>
                </div>
              </Link>
            ))
          : products.map((product, i) => (
              <Link key={i} href={`/products/${product.id}`}>
                {/* Rest of the product JSX */}
                <div className="bp-0 rounded pt-4 border border-sky-200 duration-300 w-[250px] hover:scale-105 ">
                  <Image
                    src={product.image}
                    alt=""
                    width={250}
                    height={200}
                    className="h-[160px] w-[200px] m-auto"
                  />
                  <div className=" flex flex-col items-center gap-y-3 pt-3 ">
                    <p className="font-bold">
                        {product.title.slice(0, 10)}
                    </p>
                    <p className="px-2 font-extralight">
                        {product.description.slice(0, 48)}
                    </p>
                    <p className="font-bold">
                       ${product.price}
                      </p>
                    
                      <Button className="bg-sky-300 mb-0 text-sm text-white h-[35px] w-full hover:bg-white hover:text-black hover:border border-black">
                        Details
                      </Button>
                   
                  </div>
                </div>
              </Link>
            ))}
      </div>
      <div className="flex justify-center w-full">
        <Button
          onClick={() => setShow((prevShow) => !prevShow)}
          className="bg-sky-300 rounded mb-8 text-sm text-white h-[35px] w-[150px] hover:bg-white hover:text-sky-300 hover:border border-sky-300 duration-1000"
        >
          {show ? "Show less " : "Show more"}
        </Button>
      </div>
    </>
  );
};

export default Products;
