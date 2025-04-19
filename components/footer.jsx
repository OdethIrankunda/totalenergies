import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className='bg-gray-100 text-gray-600 p-8 md:p-16'>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <a href="/">TotalEnergies Cards</a>
            <a href="/">Excellium Fuels</a>
            <a href="/">Lubricants</a>
            <a href="/">TotalEnergies Gas</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="/">E-services</a>
            <a href="/">Customer Service</a>
            <a href="/">Aviation</a>
            <a href="/">Professionals</a>
          </div>
          <div className="flex flex-col gap-2 ">
            <p className='font-semibold'>Select a Station</p>
            <a href="/">Central Uganda</a>
            <a href="/">Western Uganda</a>
            <a href="/">Northern Uganda</a>
            <a href="/">Eastern Uganda</a>
          </div>
        </div>
        <hr className='text-gray-300 my-16' />
        <div className="flex items-center justify-center flex-col md:flex-row gap-2">
          <a href="#" className='font-semibold text-sm'>Legal</a>
          <div className="bg-gray-600 w-0.5 h-2 "></div>
          <a href="#" className='font-semibold text-sm'>Accessibilty: Partially compliant</a>
          <div className="bg-gray-600 w-0.5 h-2 "></div>
          <a href="#" className='font-semibold text-sm'>Cookies</a>
          <div className="bg-gray-600 w-0.5 h-2 "></div>
          <p className='font-semibold text-sm'>© TotalEnergies 2025</p>
        </div>
      </footer>
    </div>
  )
}
