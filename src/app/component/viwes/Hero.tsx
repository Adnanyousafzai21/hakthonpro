import React from "react";
import Image from "next/image";
import Myproject from "/public/ecomrce.png";
import { Badge } from "@/app/component/ui/badge";
import { Button } from "@/app/component/ui/button";
import { ShoppingCart } from "lucide-react";
const Hero = () => {
  return (
    <div className="bg-sky-100">
      <div className=" flex flex-col gap-y-10 justify-center items-center py-10 md:flex-row md:py-20 md:px-10 ">
        <div className=" flex-1">
          <Badge className="bg-sky-200 text-sky-700 ">70%</Badge>
          <h1 className="scroll-m-20 text-4xl my-3">New Season Arrival</h1>
          <p>Enjoy all new trends in the world.</p>
          <Button className=" duration-500 bg-sky-300 rounded text-sm text-white h-[40px] w-auto] hover:bg-white hover:text-sky-300 hover:border border-sky-700 mt-7 px-10 ">
                  Add to Cart <ShoppingCart className="ml-3"/>
                    </Button>
        </div>
        <div className="">
          <div className="h-[300px] w-[300px] bg-sky-200 relative md:mx-[25px] w-150 rounded-full ">
            <Image src={Myproject} alt="hero img" className=" absolute mt-5 ml-[-10px] w-[270px]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
