"use client"
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
   
      <div className="flex flex-col items-center gap-10 sm:flex-row sm:justify-between flex-wrap py-4 duration-500 px-8">
        {/* Map over the products and conditionally display based on 'show' state */}
        {!show
          ? products.slice(0, 8).map((product, i) => (
              <Link key={i} href={`/products/${product.id}`}>
                {/* Rest of the product JSX */}
                <div className="border border-gray-600 rounded p-2">
                  <Image
                    src={product.image}
                    alt=""
                    width={250}
                    height={200}
                    className="h-[200px] w-[250px]"
                  />
                  <div className="p-2 flex flex-col gap-y-1 px-5">
                    <p className="">
                      Name: <span className="ml-2">{product.title.slice(0,10)}</span>
                    </p>
                    <p className="">
                      Price: <span className="ml-2">${product.price}</span>
                    </p>
                    <p className="">
                      Category:
                      <span className="ml-2">
                        {product.category.slice(0, 10)}
                      </span>
                    </p>
                    <Button className="bg-sky-300 rounded text-sm text-white h-[30px] w-[120px] hover:bg-white hover:text-black hover:border border-black">
                      Details
                    </Button>
                  </div>
                </div>
              </Link>
            ))
          : products.map((product, i) => (
              <Link key={i} href={`/products/${product.id}`}>
                {/* Rest of the product JSX */}
                <div className="border border-gray-600 rounded p-2">
                  <Image
                    src={product.image}
                    alt=""
                    width={250}
                    height={200}
                    className="h-[200px] w-[250px]"
                  />
                  <div className="p-2 flex flex-col gap-y-1 px-5">
                    <p className="">
                      Name: <span className="ml-2">{product.title.slice(0,10)}</span>
                    </p>
                    <p className="">
                      Price: <span className="ml-2">${product.price}</span>
                    </p>
                    <p className="">
                      Category:
                      <span className="ml-2">
                        {product.category.slice(0, 10)}
                      </span>
                    </p>
                    <Button className="bg-sky-300 rounded text-sm text-white h-[30px] w-[120px] hover:bg-white hover:text-black hover:border border-black">
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
          className="bg-sky-300 rounded text-sm text-white h-[35px] w-[150px] hover:bg-white hover:text-sky-300 hover:border border-sky-300 duration-1000"
        >
          {show ? "Show less " :"Show more"}
        </Button>
      </div>
    </>
  );
};

export default Products;
