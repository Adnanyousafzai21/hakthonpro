import Image from 'next/image'
import Hero from './component/viwes/Hero'
import Categories from './component/viwes/categories'
import Products from './products/page'
import Contact from './contact/page'
export default function Home() {
  return (
   <>
<Hero/>
<Categories/>
<Products/>
<Contact/>
   </>
  )
}
