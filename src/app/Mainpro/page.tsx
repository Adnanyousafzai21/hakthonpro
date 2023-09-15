"use client";
import Image from "next/image";
import React, { useState } from "react";
import products from "@/utils/moks";
import womment from "/public/images/wommens.jpg";

import Link from "next/link";
import { Button } from "../component/ui/button";
const Mainpro = () => {
  const categries = [
    {
      name: "Wommen's",
      image: "/images/wommens.jpg",
      explore: "women's clothing",
      description:" about electronics descriptions",
      url:"/categorey/women"
    },
    {
      name: "Men's",
      image: "/images/men,s.jpg",
      explore: "men's clothing",
      description:" about electronics descriptions",
      url:"/categorey/men"
    },
    {
      name: "Electronics's",
      image: "/images/electronics.jpg",
      explore: "Electronics",
      description:" about electronics descriptions",
      url:"/categorey/electronics"
    },
    {
      name: "jewleries",
      image: "/images/jewlery.jpg",
      explore: "jeweleries",
      description:" about electronics descriptions",
      url:"/categorey/jewelery"
    },
  ];

  console.log(products);
  let uproute = new Set(products.map((prod) => prod));
  console.log(uproute);
  return (
    <div>
        <div className="tex-xl text-center text-sky-300 text-bold  mt-10">Categories</div>
         <div className="flex flex-col items-center  gap-10 md:flex-row md:justify-between  flex-wrap py-10 duration-500 md:px-28 max-w-[1500px] m-auto">
     
      {categries.map((prod) => (
                      <Link key={prod.name} href={prod.url}>
           
                      <div className="bp-0 rounded pt-4  duration-300 w-[250px] hover:scale-105 " style={{boxShadow:"-1px -1px 5px 2px #e0e0eb"}}>
                        {prod.image ? (
                          <Image
                            src={prod.image}
                            alt="prod"
                            width={250}
                            height={200}
                            className="h-[160px] w-[200px] m-auto mb-5"
                          />
                        ) : (
                          <div className="placeholder-image">
                      
                            <img
                              src="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
                              alt="Default Image"
                              width={250}
                              height={200}
                              className="h-[160px] w-[200px] m-auto"
                            />
                          </div>
                        )}
                        <div className=" flex flex-col items-center gap-y-3 pt-3 bg-sky-300" style={{borderRadius:"0px 0px 5px 5px"}}>
                          <p className="font-bold text-white">{prod.name}</p>
                          <p className="px-2 font-extralight">
                            {prod.description}
                          </p>
                         
      
                          <Button className="bg-sky-300 mb-0 text-sm text-white h-[35px] w-full outline-none border-t border-white hover:bg-white hover:text-black "style={{borderRadius:"0px 0px 5px 5px"}}>
                      Explore porducts
                          </Button>
                        </div>
                      </div>
                    </Link>
      ))}
    </div>
    </div>
   
  );
};

export default Mainpro;
