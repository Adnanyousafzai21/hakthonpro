import Link from 'next/link'
import React from 'react'
const Categories = () => {

  return (

    // <div className="buttons d-flex justify-content-center mb-5 pb-5">
    //     <button className="btn btn-outline-dark me-2"      onClick={()=>{setFilter(data)}}>All</button>
    //     <button className="btn btn-outline-dark me-2" onClick={()=>{FilterProduct("men's clothing")}}>Men's Clothing</button>
    //     <button className="btn btn-outline-dark me-2" onClick={()=>{FilterProduct("women's clothing")}}>Women's Clothing</button>
    //     <button className="btn btn-outline-dark me-2" onClick={()=>{FilterProduct("jewelery")}}>jewelry</button>
    //     <button className="btn btn-outline-dark me-2" onClick={()=>{FilterProduct("electronics")}}>gadgets</button>
    //   </div>
    <div>
       <ul className="flex gap-3 sm:gap-5 justify-center mt-10">
        <li className="border-b-2 border-3  hover:border-sky-300"> <Link  href={'/categorey/women'}>Women</Link></li>
        <li className="border-b-2 border-3  hover:border-sky-300"> <Link  href={'/categorey/men'}>Men</Link> </li>
        <li className="border-b-2 border-3  hover:border-sky-300"> <Link  href={'/categorey/jewelery'}>Jewelery</Link> </li>
        <li className="border-b-2 border-3  hover:border-sky-300"> <Link  href={'/categorey/electronics'}>Electronics</Link> </li>
      </ul>
    </div>
  )
}

export default Categories
