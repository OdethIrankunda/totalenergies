import React from 'react'

export default function Hero() {
  return (
    <div>
      <div className="bg-gray-100 flex items-center shadow-xl">
        <div className="">
          <img src="/images/hero4.webp" alt="" />
        
        </div>
        <div className="flex flex-col items-center justify-center  md:pr-24 p-8 ">
          <h3 className='text-blue-500 text-3xl md:text-5xl'>Your TotalEnergies cards are just a click away.</h3>
          <button className='border text-red-600 py-2 px-4 rounded-full border-red-600 cursor-pointer'>Discover</button>
        </div>
      </div>
    </div>
  )
}
