import React from 'react'


export default function Projects() {
  const projects = [
    {
      image:"/images/project1.webp",
      description:"Tilenga project",
      href:"/tilenga"
    },
    {
      image:"/images/project2.webp",
      description:"EACOP project",
      href:"/eacop"
    },
    {
      image:"/images/project3.webp",
      description:"Community engagement project",
      href:"/tilenga"
    },
    {
      image:"/images/project4.webp",
      description:"Tilenga project",
      href:"/tilenga"
    },
    {
      image:"/images/project5.webp",
      description:"Energy and environmenta conservation",
      href:"/tilenga"
    },
    {
      image:"/images/project6.webp",
      description:"Tilenga project",
      href:"/tilenga"
    },
    {
      image:"/images/project8.webp",
      description:"Wildlife conservation project",
      href:"/tilenga"
    },
    {
      image:"/images/project9.webp",
      description:"community training  project",
      href:"/tilenga"
    },
    
  ]
  return (
    <div>
      <div className="bg-gray-100 text-black p-8 md:p-16">
        <h2 className='text-4xl py-4'>Our Projects </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {
            projects.map((project) =>{
              return(
                <a href={project.href}className="bg-white  flex flex-col items-center gap-2 rounded-2xl">
            <img src={project.image} alt="" className='rounded-t-2xl'/>
            
            <p className='font-semibold text-gray-600 p-4'>{project.description}</p>
            </a>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
