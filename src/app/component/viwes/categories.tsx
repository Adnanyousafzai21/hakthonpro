"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
const Categories = () => {
const pathaname= usePathname()
  return (

  
    <div>
       <ul className="flex gap-3 sm:gap-5 justify-center mt-10">
        <li className={`border-b-2 ${pathaname=="/categorey/women"? "border-sky-300" :""} hover:border-sky-300 hover:text-sky-300`}> <Link  href={'/categorey/women'}>Women</Link></li>
        <li className={`border-b-2 ${pathaname=="/categorey/men"? "border-sky-300" :""} hover:border-sky-300 hover:text-sky-300`}> <Link  href={'/categorey/men'}>Men</Link> </li>
        <li className={`border-b-2 ${pathaname=="/categorey/jewelery"? "border-sky-300" :""} hover:border-sky-300 hover:text-sky-300`}> <Link  href={'/categorey/jewelery'}>Jewelery</Link> </li>
        <li className={`border-b-2 ${pathaname=="/categorey/electronics"? "border-sky-300" :""} hover:border-sky-300 hover:text-sky-300`}> <Link  href={'/categorey/electronics'}>Electronics</Link> </li>
      </ul>
    </div>
  )
}

export default Categories
