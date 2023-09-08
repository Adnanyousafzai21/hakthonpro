import React from "react";
import Image from "next/image";
import image from "../../../../public/images.jpg";
import Quantity from "../quantity";
// import products from "@/utils/moks";
const page = () => {
  return (
    <div
      className="py-20 md:w-[70%] m-auto w-[90%]
   "
    >
      <div className="grid grid-cols-4 px-5 bg-sky-500 text-white  ">
        <div className="col-span-2 flex gap-3">Products</div>
        <div>Qunatity</div>
        <div>Price</div>
      </div>

      <div className="grid grid-cols-4  py-5 px-5">
        <div className="col-span-2 flex gap-3">
          <Image
            src={image}
            alt="cardImage"
            className="rounded"
            width={80}
            height={50}
          />
          <div className="flex flex-col gap-3">
            <p>title</p>
            <p>price</p>
            <p className="text-red-950 font-bold">remove</p>
          </div>
        </div>

        <div>
          <Quantity />
        </div>
        <div>
          <p>$500</p>
        </div>
      </div>
      <div className="grid grid-cols-4  py-5 px-5">
        <div className="col-span-2 flex gap-3">
          <Image
            src={image}
            alt="cardImage"
            className="rounded"
            width={80}
            height={50}
          />
          <div className="flex flex-col gap-3">
            <p>title</p>
            <p>price</p>
            <p className="text-red-950 font-bold">remove</p>
          </div>
        </div>

        <div>
          <Quantity />
        </div>
        <div>
          <p>$500</p>
        </div>
      </div>
      <div className="grid grid-cols-4  py-5 px-5">
        <div className="col-span-2 flex gap-3">
          <Image
            src={image}
            alt="cardImage"
            className="rounded"
            width={80}
            height={50}
          />
          <div className="flex flex-col gap-3">
            <p>title</p>
            <p>price</p>
            <p className="text-red-950 font-bold">remove</p>
          </div>
        </div>

        <div>
          <Quantity />
        </div>
        <div>
          <p>$500</p>
        </div>
      </div>
      <div className="grid grid-cols-4  py-5 px-5">
        <div className="col-span-2 flex gap-3">
          <Image
            src={image}
            alt="cardImage"
            className="rounded"
            width={80}
            height={50}
          />
          <div className="flex flex-col gap-3">
            <p>title</p>
            <p>price</p>
            <p className="text-red-950 font-bold">remove</p>
          </div>
        </div>

        <div>
          <Quantity />
        </div>
        <div>
          <p>$500</p>
        </div>
      </div>

      <div className=" w-[100%]justify-items-end">
        <div className="flex flex-cols flex-col gap-2 w-[20%] ">
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
        </div>
      </div>
    </div>
  );
};

export default page;
