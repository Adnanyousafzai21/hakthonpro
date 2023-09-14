import { StaticImageData } from "next/image";

export type typeproducts ={
    id:number,
    title:string,
    color:string[],
    size:string[],
    description:string,
    category:string,
    image?:string|any,
    price: number
}

export type typecart={
    id:number,
    title:string,
    image?:string|any,
    price: number}