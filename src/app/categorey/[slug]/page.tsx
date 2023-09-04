import Image from "next/image";
import React from "react";
import frame from "/public/My project.png";
import products from "@/utils/moks";
import Categories from "@/app/component/viwes/categories";
import Home from "@/app/page";
import Link from "next/link";
import { Button } from "@/app/component/ui/button";

const getcategory = (category: string) => {
  const result = products.filter((products) => products.category === category);
  return result;
};
export default function Page({ params }: { params: { slug: string } }) {
  const result = getcategory(params.slug);
  return (
    <>
      <Categories />
      <div className="flex flex-col items-center  gap-10 md:flex-row md:justify-between  flex-wrap py-10 duration-500 px-28 max-w-[1500px] m-auto">
        {result.map((products, i) => {
          return (
            <Link href={`/products/${products.id}`} key={i}>
               <div className="bp-0 rounded pt-4 border border-sky-200 duration-300 w-[250px] hover:scale-105 ">
                  <Image
                    src={products.image}
                    alt=""
                    width={250}
                    height={200}
                    className="h-[160px] w-[200px] m-auto"
                  />
                  <div className=" flex flex-col items-center gap-y-3 pt-3 ">
                    <p className="font-bold">
                        {products.title.slice(0, 10)}
                    </p>
                    <p className="px-2 font-extralight">
                        {products.description.slice(0, 48)}
                    </p>
                    <p className="font-bold">
                       ${products.price}
                      </p>
                    
                      <Button className="bg-sky-300 mb-0 text-sm text-white h-[35px] w-full hover:bg-white hover:text-black hover:border border-black">
                        Details
                      </Button>
                   
                  </div>
                </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
