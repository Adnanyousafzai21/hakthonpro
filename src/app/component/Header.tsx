
"use client"
import Image from "next/image";
import React, { useState } from "react";
import frame from "/public/Frame 11.png";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Menu } from "lucide-react";
import { Input } from "@/app/component/ui/input";
import { X } from "lucide-react";
import { useRouter } from 'next/router';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between px-7 md:px-20 py-4 items-center relative z-[100] max-w-[1500px] m-auto">

      <Image src={frame} alt="logo " className="w-[170px]" />

      <ul className={`duration-500 md:flex absolute md:static md:justify-center md:mt-auto ${open?'mt-[360px] opacity-[100%]':'mt-[-380px] opacity-0 '} w-full left-0 gap-10  md:gap-3 bg-white z-[10] py-5 md:py-0 pl-11  md:mt-auto md:flex-row md:w-auto md:opacity-100 `}>
       <Link href={"/"}><li className="my-3 p-3 md:my-auto md:py-0 w-[200px] md:w-auto rounded bg-sky-100 cursor-pointer   md:hover-bg md:bg-white md:border-b-2   hover:border-sky-300 ">Home</li></Link> 
       <Link href={"/products"}><li className="my-3 p-3 md:my-auto md:py-0 w-[200px] md:w-auto rounded bg-sky-100 cursor-pointer  md:hover-bg md:bg-white md:border-b-2   hover:border-sky-300 ">Products</li></Link> 
       <Link href={"/categorey/women"}><li className="my-3 p-3 md:my-auto md:py-0 w-[200px] md:w-auto rounded bg-sky-100 cursor-pointer  md:hover-bg md:bg-white md:border-b-2   hover:border-sky-300 ">Categories</li></Link> 
       <Link href={"/contact"}><li className="my-3 p-3 md:my-auto md:py-0 w-[200px] md:w-auto rounded bg-sky-100 cursor-pointer  md:hover-bg md:bg-white md:border-b-2   hover:border-sky-300 ">Contact us</li></Link> 
      </ul>
      
      <Input
        type="search"
        placeholder="search"
        className=" w-45 h-6 rounded border-gray-500 text-sm md:absolute hidden"
      />
      <div className="w-6 h-6 bg-sky-100 rounded-full flex justify-center items-center ">
        <ShoppingCart className="w-4 h-4" />
      </div>
      <div className=" md:hidden text-sky-300">
       { open?<X onClick={()=>{setOpen(!open)}}/> :<Menu onClick={()=>{setOpen(!open)}}/>}
         
      </div>
    </div>
  );
};

export default Header;
