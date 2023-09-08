import React from "react";
import Image from "next/image";
import image from "../../../../public/images.jpg";
import Quantity from "../quantity";
import { Trash2 } from "lucide-react";
const page = () => {
  return (
    <div className="py-20  md:w-[70%] m-auto w-[95%]">
      <div className="flex justify-between px-2 md:px-5 bg-sky-500 text-white items-center">
        <div className="flex gap-3 col-span-2">Products</div>
        <div>Quantity</div>
        <div>Price</div>
      </div>

      <div className="flex justify-between py-5 md:px-5 items-center">
        <div className="flex gap-3">
          <Image
            src={image}
            alt="cardImage"
            className="rounded w-[65px] md:[100px] h-[80px]"
            width={100}
            height={50}
          />
          <div className="flex flex-col gap-1 md:gap-3 flex-1">
            <p>title</p>
            <p>price</p>
            <p className="text-red-950 font-bold">{<Trash2 />}</p>
          </div>
        </div>
        <div>
          <Quantity />
        </div>
        <div>
          <p>$500</p>
        </div>
      </div>

      <div className="flex justify-between py-5 md:px-5 items-center">
        <div className="flex gap-3">
          <Image
            src={image}
            alt="cardImage"
            className="rounded w-[65px] md:[100px] h-[80px]"
            width={100}
            height={50}
          />
          <div className="flex flex-col gap-1 md:gap-3 ">
            <p>title</p>
            <p>price</p>
            <p className="text-red-950 font-bold">{<Trash2 />}</p>
          </div>
        </div>

        <div>
          <Quantity />
        </div>
        <div>
          <p>$500</p>
        </div>
      </div>

      <div className="flex justify-between py-5 md:px-5 items-center">
        <div className="flex gap-3">
          <Image
            src={image}
            alt="cardImage"
            className="rounded w-[65px] md:[100px] h-[80px]"
            width={100}
            height={50}
          />
          <div className="flex flex-col gap-1 md:gap-3">
            <p>title</p>
            <p>price</p>
            <p className="text-red-950 font-bold">{<Trash2 />}</p>
          </div>
        </div>

        <div>
          <Quantity />
        </div>
        <div>
          <p>$500</p>
        </div>
      </div>

      <div className="w-full flex justify-center md:justify-end">
        <div className="flex flex-col gap-4 w-[300px] px-10 border-0 py-3 border-t-4 border-t-sky-500">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>$1000</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery</p>
            <p>$100</p>
          </div>
          <div className="flex justify-between">
            <p>Total</p>
            <p>$4000</p>
          </div>
          <div className="text-center">
            <button className="bg-sky-500 text-white hover:bg-white md:px-16 px-10 py-2 duration-500 rounded hover:text-sky-500 border hover:border-sky-500">
              Check-Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
