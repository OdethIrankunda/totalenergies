import React from 'react'
import { GiJerrycan } from "react-icons/gi";
import { FaGasPump } from "react-icons/fa6";
import { FaFire } from "react-icons/fa6";
import { RiSunFoggyFill } from "react-icons/ri";
import { FaCar } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { BsPersonVideo2 } from "react-icons/bs";
import { FaPlane } from "react-icons/fa";

export default function Products() {
  const products = [
    {
      icon:<GiJerrycan  />,
      title:"Lubricants",
      href:"/lubricants"
    },
    {
      icon:<FaGasPump />,
      title:"Excellium Energy",
      href:"/excellium-energy"
    },
    {
      icon:<FaFire />,
      title:"TotalEnergies Gas",
      href:"/gas"
    },
    {
      icon:<RiSunFoggyFill />,
      title:"Sunshine Solar",
      href:"/solar"
    },
    {
      icon:<FaCar />,
      title:"Carcare products",
      href:"/carcare"
    },
    {
      icon:<FaRegCreditCard />,
      title:"TotalEnergies card",
      href:"/cards"
    },
    {
      icon:<BsPersonVideo2 /> ,
      title:"Professionals",
      href:"/professionals"
    },
    {
      icon:<FaPlane />,
      title:"Aviation",
      href:"/aviation"
    },
  ]
  return (
    <div>
      <div className="bg-white text-black p-8 md:p-16">
        <h2 className='text-4xl py-4'>Our Products And Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {
            products.map((product) =>{
              return(
                <a href={product.href}className="bg-gray-100 p-4 flex items-center gap-4 rounded-2xl">
            <div className='text-red-600 text-5xl'>{product.icon}</div>
            
            <p className='font-semibold'>{product.title}</p>
            </a>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
