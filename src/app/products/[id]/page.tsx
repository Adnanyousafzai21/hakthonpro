import Image from "next/image";
import products from "@/utils/moks";
import { Button } from "@/app/component/ui/button";
import Quantity from "@/app/component/quantity";
import { ShoppingCart } from "lucide-react";
const getproductid = (id: number | string) => {
  return products.filter((product) => product.id == id);
};
export default function Page({ params }: { params: { id: string } }) {
  const result = getproductid(params.id);
  console.log(result);
  return (
    <>
      <div className="flex justify-center">
        {result.map((products,i) => {
          return (
            <div className="flex  flex-col sm:flex-row sm:justify-between justify-center w-[700px] items-center  gap-y-7  py-20 ">
              <div key={i} className="flex-1">
                <Image
                  src={products.image}
                  alt=""
                  width={200}
                  height={200}
                  className="h-[300px] w-[300px]"
                />
              </div>
              <div className="p-2 flex flex-col gap-y-3 flex-1 w-[80%]">
                <p className="text-sky-500 font-medium">{products.title.slice(0, 38)}</p>
                <p>
                  Price: <span className="ml-5">${products.price}</span>{" "}
                </p>
                <p>
                  Category:<span className="ml-5">{products.category}</span>
                </p>
                {/* <p className="font-normal text-sky-500">Description:{products.description.slice(0,100)}</p> */}
                 <p className="flex">Quantity:<span className="ml-5"><Quantity/></span></p>
                 <Button className="bg-sky-300 rounded text-sm text-white h-[35px] w-[150px] hover:bg-white hover:text-sky-300 hover:border border-sky-300">
             Add to Cart <ShoppingCart className="ml-3"/>
          </Button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
