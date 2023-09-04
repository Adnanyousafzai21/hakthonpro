import Link from 'next/link'
import React from 'react'
const Categories = () => {

  return (

  
    <div>
       <ul className="flex gap-3 sm:gap-5 justify-center mt-10">
        <li className="border-b-2 border-3  hover:border-sky-300 hover:text-sky-300"> <Link  href={'/categorey/women'}>Women</Link></li>
        <li className="border-b-2 border-3  hover:border-sky-300 hover:text-sky-300"> <Link  href={'/categorey/men'}>Men</Link> </li>
        <li className="border-b-2 border-3  hover:border-sky-300 hover:text-sky-300"> <Link  href={'/categorey/jewelery'}>Jewelery</Link> </li>
        <li className="border-b-2 border-3  hover:border-sky-300 hover:text-sky-300"> <Link  href={'/categorey/electronics'}>Electronics</Link> </li>
      </ul>
    </div>
  )
}

export default Categories
