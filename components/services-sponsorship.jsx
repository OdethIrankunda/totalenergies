import React from 'react'

export default function ServicesSponsorship() {
  return (
    <div>
      <div className="p-4 md:px-16 bg-gray-100">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="">
            <img src="/images/afcon.webp" className="rounded-2xl" alt="" />
          </div>
          <div className="flex flex-col gap-2 text-gray-600 ">
            <h5 className='font-semibold'>AFCON Sponsorship</h5>
            <p>Football is a universal language, synonymous with conviviality, enthusiasm, solidarity and, of course, energy.</p>
            <p><span className='font-semibold'>Football Together</span> is the desire to reveal this art of celebration and share it with all football lovers in Africa and beyond.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

