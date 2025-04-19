import Link from 'next/link'
import React from 'react'


export default function ServicesProducts() {
  const projects = [
    {
      image:"/images/service1.webp",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit deserunt unde labore",
      title:"Shop and Food Services",
      href:"/"
    },
    {
      image:"/images/service2.webp",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit deserunt unde labore",
      title:"Car Wash",
      href:"/"
    },
    {
      image:"/images/service3.webp",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit deserunt unde labore",
      title:"Car Maintenance",
      href:"/"
    },
    {
      image:"/images/service4.webp",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit deserunt unde labore",
      title:"Restuarant and Cofee Shop",
      href:"/"
    },
    {
      image:"/images/service5.webp",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit deserunt unde labore",
      title:"Digital Services",
      href:"/"
    },
    {
      image:"/images/service6.webp",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit deserunt unde labore",
      title:"Fuels",
      href:"/"
    },
  ]
  return (
    <div>
      <div className="bg-gray-100 text-black p-8 md:p-16">
        <h2 className='text-4xl py-4'>OUR SERVICES, PROOF OF OUR COMMITMENT </h2>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
          {
            projects.map((project) =>{
              return(
                <Link href={project.href}className="bg-white  flex flex-col items-center gap-2 rounded-2xl pb-2">
            <img src={project.image} alt="" className='rounded-t-2xl w-full cover'/>
            
            <p className='font-semibold text-gray-600 px-4'>{project.title}</p>
            
            <p className='text-gray-600 px-4'>{project.description}</p>
            <a className='text-red-600 px-4 font-semibold'>Discover More</a>
            </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
