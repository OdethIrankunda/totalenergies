
import { CiSearch } from "react-icons/ci";
import Link from 'next/link'
import React from 'react'
import { HiBars3 } from "react-icons/hi2";

export default function Header() {
  return (
    <div>
      <div className="">
        <div className="flex items-center bg-white text-red-600 justify-end pt-2 px-8 md:px-16 text-sm font-semibold">
          <Link href="/media">Media</Link>
          <form class="">
  <select id="countries" class=" focus:ring-red-500  block w-full p-2.5 outline-none border-none ">
    <option value="US">   Select Country</option>
    <option value="US">   Uganda</option>
    <option value="CA"> Canada</option>
    <option value="FR"> France</option>
    <option value="DE">Germany</option>
  </select>
</form>
        </div>
      <header className="flex items-center justify-between px-8 pb-4 pt-2 md:px-16 bg-white text-black w-full hover:bg-red-700">
          <Link href="/" className='flex items-center gap-2'> 
          <img src="/images/logo-_1_.png" alt="" className='w-20' />
          <p className='text-red-600 font-semibold'>TotalEnergies <br /> Uganda</p>
          </Link>
         <nav className='md:flex items-center gap-4 hidden'>
        <Link href="/services" className=" flex flex-col gap-2 ">
        <span className="hover:text-red-500">Products and Services</span>
        <div className="bg-red-600 h-0.5 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
        </Link>
        
        <Link href="/" className="group flex flex-col gap-2">
        <span className="hover:text-red-500">TotalEnergies in Uganda MS & EP</span>
        <div className="bg-red-600 h-0.5 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
        </Link>
        <Link href="/projects" className="group flex flex-col gap-2">
        <span className="hover:text-red-500">Projects</span>
        <div className="bg-red-600 h-0.5 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
        </Link>
        <Link href="/stations" className="group flex flex-col gap-2">
        <span className="hover:text-red-500">Find a Station</span>
        <div className="bg-red-600 h-0.5 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
        </Link>
        <Link href="/" className="group flex flex-col gap-2">
        <span className="hover:text-red-500">Renewables</span>
        <div className="bg-red-600 h-0.5 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
        </Link>
        <Link href="/" className="group flex flex-col gap-2">
        <span className="hover:text-red-500">Aviation</span>
        <div className="bg-red-600 h-0.5 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
        </Link>
        <Link href="/" className="group flex flex-col gap-2">
        <span className="hover:text-red-500">Careers</span>
        <div className="bg-red-600 h-0.5 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
        </Link>
        <Link href="/" className="text-xl">
        <CiSearch />
        </Link>

         </nav>
         <HiBars3  className="text-2xl md:hidden"/>

          </header>
      </div>
    </div>
  )
}

