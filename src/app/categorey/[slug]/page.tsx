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
      <div className="flex flex-col items-center gap-10 sm:flex-row sm:justify-between flex-wrap py-4 duration-500 px-12 ">
        {result.map((products,i) => {
          return (
            <Link href={`/products/${products.id}`} key={i}>
              <div
                className="border border-gray-600 rounded p-3  "
                
              >
                <Image
                  src={products.image}
                  alt=""
                  width={200}
                  height={200}
                  className="h-[200px] w-[220px]"
                />
              <div className="p-2 flex flex-col gap-y-1">
                    <p className="">
                      Name: <span className="ml-2">{products.title.slice(0,10)}</span>
                    </p>
                    <p className="">
                      Price: <span className="ml-2">${products.price}</span>
                    </p>
                    <p className="">
                      Category:
                      <span className="ml-2">
                        {products.category.slice(0, 10)}
                      </span>
                    </p>
                    <Button className="bg-sky-200 rounded text-sm text-white h-[30px] w-[120px] hover:bg-white hover:text-sky-300 hover:border border-sky-300">
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
