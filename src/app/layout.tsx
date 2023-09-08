import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './component/Header'
import Footer from './component/foter'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: "adnan",
  description: 'Created by adnan rafiq',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main className=''>
           {children}  
        </main>
        <Footer/>
        </body>
    </html>
  )
}
