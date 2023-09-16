"use client";
import Image from "next/image";
import products from "@/utils/moks";
import { Button } from "@/app/component/ui/button";
import Quantity from "@/app/component/quantity";
import { ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/feature/card";
import Link from "next/link";
const getproductid = (id: number | string) => {
  return products.filter((product) => product.id == id);
};

export default function Page({ params }: { params: { id: string } }) {
  const dispatch = useDispatch();
  const result = getproductid(params.id);
  const firstProduct = result[0];
  const [pop, setpop] = useState(false);

  const [data, setdata] = useState({
    id: firstProduct.id,
    title: firstProduct.title,
    price: firstProduct.price,
    img: firstProduct.image,
    color: "black",
    size: "",
  });
  const addtocart = () => {
  data.size && data.color?  dispatch(addToCart(data)):"";
    setpop(true);
  };

  return (
    <div className="relative">
      <div className={`flex justify-center md:px-8 py-10 lg:px-20 width-[100%]  ${pop?"opacity-25 disabled:":""}`}>
        {result.length > 0
          ? result.map((result) => (
              <div
                key={result?.id}
                className=" w-[90%] md:w-[80%]  flex md:px-10 flex-col sm:flex-row lg:justify-between justify-center  items-center gap-x-5 gap-y-7 md:py-20 max-w-[1500px] m-auto"
              >
                <div className="flex-1">
                  <Image
                    src={result?.image}
                    alt="slug pic"
                    className="md:h-[350px] h-[300px] w-[270px] "
                    width={350}
                    height={270}
                  />
                </div>
                <div className="p-2 flex flex-col gap-y-2 flex-1 w-[100%] md:w-[80%]">
                  <p className="text-sky-500 font-medium">{result?.title}</p>
                  <p>
                    <span className=" line-clamp-2 text-base">
                      {result?.description}
                    </span>
                  </p>
                  {/* color and size */}
                  <div className="flex mt-2 items-center border-b-2 pb-2  border-gray-100 justify-between ">
                    <div className="flex">
                      <span className="mr-3">Color</span>
                      {result.color.map((color: string) => (
                        <button
                          key={color}
                          onClick={() => setdata({ ...data, color: color })}
                          className={`border-2 border-gray-300 ml-1  rounded-full w-6 h-6 focus:outline-none hover:border-black hover:border-spacing-1 duration-1000`}
                          style={{ backgroundColor: color, }}
                        />
                      ))}
                    </div>
                    <div className="flex ml-6 items-center">
                      <span className="mr-3">Size</span>
                      <div className="relative">
                        <select
                          onChange={(e) =>
                            setdata({ ...data, size: e.target.value })
                          }
                          className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                        >
                          <option>size</option>
                          {result.size.map((size) => (
                            <option key={size}>{size}</option>
                          ))}
                        </select>
                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex my-3">
                      Quantity:
                      <span className="ml-5">
                        <Quantity />
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between w-[100%]">
                    <div>
                      <span className="font-bold">${result?.price}</span>
                      <span className="ml-2 line-through font-semibold">
                        ${(result?.price+10).toFixed(2)}
                      </span>
                    </div>
                    <Button
                      onClick={addtocart}
                      className="bg-sky-300 rounded text-sm text-white h-[35px] w-[150px] hover:bg-white hover:text-sky-300 hover:border border-sky-300"
                    >
                      Add to Cart <ShoppingCart className="ml-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          : " page not found"}
      </div>
      {pop ? (
        <div className={`absolute text-center w-[100%] duration-500`} >
          <div style={{boxShadow:"1px 1px 10px 5px gray"}} className="-mt-[100%]  md:-mt-[30%] mx-auto rounded   duration-500 bg-white  px-10 py-10 md:w-[30%] w-[90%]  my-20">
            <div className="text-center">
           { data.size && data.color ? <p>
                Product is added to card
                 <span className="text-sky-500"> Succeccfully</span>
                <br />
                Either you can check cart or close
              </p>:<p>
                Please select the 
                 <span className="text-red-500"> Color </span> and   <span className="text-red-500"> Size</span>
           
              </p>
             
              }
            </div>
            <div className="flex justify-between mt-10">
              <Link
                href={"/addtocart"}
                className="bg-sky-300 text-center pt-1 rounded text-sm text-white h-[35px]  w-[100px]  hover:bg-white hover:text-sky-300 hover:border border-sky-300"
              >
                Check Cart
              </Link>
              <button
                onClick={() => setpop(false)}
                className="bg-sky-300 rounded text-sm text-white h-[35px]  w-[100px]  hover:bg-white hover:text-sky-300 hover:border border-sky-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
