"use client";
import React from "react";
import Image from "next/image";
import { removeFromCart } from "../../../redux/feature/card";
import Quantity from "../component/quantity";
import { Trash2 } from "lucide-react";
import { useAppSelector } from "../../../redux/hooks";
import { useDispatch } from "react-redux";
const Page = () => {
  const cartItems = useAppSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();
  const Khatm = (id: any) => {
    dispatch(removeFromCart(id));
  };
  const totalPrice = cartItems.reduce((acc:any, cart:any) => {

    return acc + cart.price;
  }, 0);
  return (
    <>
    { cartItems.length > 0 ?   <div className="py-20  md:w-[70%] m-auto w-[95%]">
    <div className="flex justify-between px-2 md:px-5 bg-sky-300 text-white items-center">
         <div className="flex gap-3 w-40%">Products</div>
         <div>Quantity</div>
         <div>Price</div>
       </div>
 
       {cartItems.map((cart:any) => (
         <div
           key={cart?.id}
           className="flex justify-between pt-3 pb-7 md:px-5 items-center border-0 relative border-b-2 border-b-sky-100"
         >
           <div className="flex flex-col gap-1 flex-2">
             <img
               src={cart?.img}
               alt="cardImage"
               className="rounded w-[75px] md:[100px] h-[80px]"
               width={100}
               height={50}
             />
             <div>
               <p className="line-clamp-1 w-[180px] md:font-bold text-sky-300  absolute">
                 {cart.title}
               </p>
             </div>
           </div>
           <div className="">
             <Quantity />
           </div>
           <div className="flex flex-col gap-3 items-center ">
             <p>${cart.price}</p>
             <p
               className="text-red-950 font-bold"
               onClick={() => Khatm(cart.id)}
             >
               {<Trash2 className="text-sm" />}
             </p>
           </div>
         </div>
       ))}
 
       <div className="w-full flex justify-center md:justify-end">
         <div className="flex flex-col gap-4 w-[300px] px-10 border-0 py-3 border-t-2 -mt-1 border-t-sky-300">
           <div className="flex justify-between">
             <p>Subtotal</p>
             <p>$ {totalPrice.toFixed(2)}</p>
           </div>
           <div className="flex justify-between">
             <p>Delivery</p>
             <p>$ {10}</p>
           </div>
           <div className="flex justify-between">
             <p>Total</p>
             <p>{totalPrice + 10}</p>
           </div>
           <div className="text-center">
             <button className="bg-sky-300 text-white hover:bg-white md:px-16 px-10 py-2 duration-500 rounded hover:text-sky-500 border hover:border-sky-500">
               Check-Out
             </button>
           </div>
         </div>
       </div>
     </div>
     :
     <div className="text-center py-32">
       <p className="text-sky-400 font-bold text-2xl px-5 md:px-3">There is no product yet, The  <span className="text-red-600">add to cart product</span>  will be added here</p>
       </div>}
   </>)
};

export default Page;
