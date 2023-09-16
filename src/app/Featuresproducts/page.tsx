"use client"
import React from 'react'
import products from '@/utils/moks';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../component/ui/button';
const ProdFeature = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='max-w-[1500px] px-10 my-10 m-auto'>
        <div className="text-xl  text-sky-300 text-bold text-center">Products Features</div>
<div className='flex justify-center items-center mt-3 -ml-6'><span className='w-3 h-3 rounded-full bg-customcolor '></span><span className='rounded bg-customcolor w-[140px] h-[1px]  -ml-1'></span></div>
       
        <Slider {...settings}>
       {products.slice(0, 8).map((product, i) => (
              <Link key={i} href={`/products/${product.id}`}>
           
                <div className="bp-0 rounded pt-4 m-auto my-10 py-5 duration-300 max-w-[250px] border border-sky-200 " style={{boxShadow:"-1px -1px 5px 2px #e0e0eb"}}>
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt="prod"
                      width={250}
                      height={200}
                      className="h-[160px] w-[200px] m-auto"
                    />
                  ) : (
                    <div className="placeholder-image">
                
                      <img
                        src="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
                        alt="Default Image"
                        width={250}
                        height={200}
                        className="h-[160px] w-[200px] m-auto"
                      />
                    </div>
                  )}
                  <div className=" flex flex-col items-center gap-y-3 pt-3 ">
                    <p className="font-bold text-sky-300">{product.title.slice(0, 10)}</p>
                    <p className="px-6 font-extralight text-center line-clamp-2 ">
                      {product.description.slice(0, 48)}
                    </p>
                    {/* <p className="font-bold">${product.price}</p> */}

                    {/* <Button className="bg-sky-300 mb-0 text-sm text-white h-[35px]  w-full hover:bg-white hover:text-black hover:border border-black">
                      Details
                    </Button> */}
                  </div>
                </div>
              </Link>
            ))}
        </Slider>

       </div>
    // </div>
  )
}

export default ProdFeature
