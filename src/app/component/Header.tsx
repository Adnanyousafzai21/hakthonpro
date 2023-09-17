
"use client"
import Image from "next/image";
import React, { useState } from "react";
import frame from "/public/Frame 4.png";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Menu } from "lucide-react";
import { Input } from "@/app/component/ui/input";
import { X } from "lucide-react";
import { useAppSelector } from "../../../redux/hooks";

import { usePathname } from 'next/navigation';
const Header = () => {
  const [open, setOpen] = useState(false);
const data = useAppSelector((state:any)=>state.cart.items)
const pathname = usePathname()



  return (
    <div className="flex justify-between -top-2 shadow-sm bg-white sticky px-7 lg:px-20 py-4 items-center  z-[100] max-w-[1500px] m-auto">

      <Image src={frame} alt="logo " className="md:w-[140px] w-[100px]" />

      <ul className={` pl-20 lg:pl-0 duration-500 lg:flex absolute lg:static lg:justify-center lg:mt-auto ${open?'mt-[420px] opacity-[100%]':'mt-[-380px] opacity-0 '} w-full left-0 gap-10  lg:gap-3 bg-white z-[10] py-5 lg:py-0 pl-11  lg:mt-auto lg:flex-row lg:w-auto lg:opacity-100 `}>
       <Link href={"/"}><li className={` my-3 p-3 lg:my-auto lg:py-0 w-[200px] lg:w-auto rounded bg-sky-200 cursor-pointer   lg:hover-bg lg:bg-white lg:border-b-2   hover:border-sky-300 text-center ${pathname=='/'?'border-sky-300 sm:text-sky-300 text-white':''}`}>Home</li></Link> 
       <Link href={"/products"}><li className={`my-3 p-3 lg:my-auto lg:py-0 w-[200px] lg:w-auto rounded bg-sky-200 cursor-pointer  lg:hover-bg lg:bg-white lg:border-b-2   hover:border-sky-300 text-center ${pathname=='/products'?'border-sky-300 sm:text-sky-300 text-white':''}`}>Products</li></Link> 
       <Link href={"/categorey/women"}><li className={`my-3 p-3 lg:my-auto lg:py-0 w-[200px] lg:w-auto rounded bg-sky-200 cursor-pointer  lg:hover-bg lg:bg-white lg:border-b-2   hover:border-sky-300 text-center ${pathname=='/categorey/women'?'border-sky-300 sm:text-sky-300 text-white':''}`}>Categories</li></Link> 
       <Link href={"/contact"}><li className={`my-3 p-3 lg:my-auto lg:py-0 w-[200px] lg:w-auto rounded bg-sky-200 cursor-pointer  lg:hover-bg lg:bg-white lg:border-b-2   hover:border-sky-300 text-center ${pathname=='/contact'?'border-sky-300 sm:text-sky-300 text-white':''}`}>Contact us</li></Link> 
       <Link href={"/signin"}><li className={`my-3 p-3 lg:my-auto lg:py-0 w-[200px] lg:w-auto rounded bg-sky-200 cursor-pointer  lg:hover-bg lg:bg-white lg:border-b-2   hover:border-sky-300 text-center ${pathname=='/signin'?'border-sky-300 sm:text-sky-300 text-white':''}`}>Sign In</li></Link> 
      </ul>
      <Link href={"/addtocart"} className="relative w-8 h-8 bg-sky-100 rounded-full flex justify-center items-center ">
        <ShoppingCart className="w-5 h-5 text-customcolor" />
        {data.length > 0 ? <span className=" text-red-600 -mt-8 -mr-5 rounded-full bg-sky-500 w-5 font-semibold h-5 flex justify-center items-center p-2 absolute ">{data.length}</span>:" "}
      </Link>
      <div className=" lg:hidden text-sky-400">
       { open?<X onClick={()=>{setOpen(!open)}}/> :<Menu onClick={()=>{setOpen(!open)}}/>}
         
      </div>
    </div>
  );
};

export default Header;
