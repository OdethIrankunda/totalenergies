import React from 'react'

export default function ProjectsHero() {
  return (
    <div>
      <div className="bg-gray-100 md:flex items-center shadow-xl p-8 md:px-16 w-screen">
        <div className="md:w-[50%]">
          <img src="/images/tilenga.webp" alt="" className='md:w-[100%]' />
        
        </div>
        <div className="flex flex-col items-center justify-center md:max-w-[50%]md:pr-24 p-8 ">
          <h3 className='text-blue-500 text-3xl '>The Tilenga project is very important as it is completely inline with our strategy of approving only new projects if they low cost and low emmissions </h3>
          <button className='border text-red-600 py-2 px-4 rounded-full border-red-600 cursor-pointer'>Discover</button>
        </div>
      </div>
    </div>
  )
}
