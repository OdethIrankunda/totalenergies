import Link from 'next/link';
import React from 'react'
import { FiHome } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";


export default function ServicesHero() {
  return (
    <div>
      <div className="px-8 md:px-16 py-8 bg-white text-black flex-col flex gap-2">
        <div className="flex items-center gap-2">
        <Link href="/"><FiHome className='text-red-600' /></Link>
        <Link href="/"><IoIosArrowForward className='text-red-600' /></Link>
        
        <Link href="/services" className='font-semibold text-gray-600'>Products and Services</Link>
        </div>
        <div className="">
          <img src="/images/shero.webp" className='w-full object-cover rounded-2xl' alt=""/>
        </div>
        <h2 className='text-blue-500 text-4xl pt-8 md:pt-16'>TotalEnergies Extra Mile</h2>
        <a href="https://www.youtube.com/watch?v=vMbz2rvHaw4" className='text-red-600 px-4 py-2 rounded-full border border-red-500 flex justify-start'>https://www.youtube.com/watch?v=vMbz2rvHaw4</a>
      </div>
    </div>
  )
}

