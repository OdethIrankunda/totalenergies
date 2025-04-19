import React from 'react'


export default function KeyFigures() {
  const cards = [
    {
      number:" over 1,180",
      description:"PAPs supported with Business Management and Vocational Skills training",
      span:"and provided with starter kits"
    },
    {
      number:" 718,900,000USD",
      description:"worth of procurements awarded to",
      span:"Ugandan Companies"
    },
    {
      number:" Over 10,000",
      description:"Ugandans employed on the  ",
      span:"Tilenga project"
    },
    {
      number:" Over 300",
      description:"Scholarships for students at   ",
      span:"O'Level & A'Level"
    },
    
    {
      number:" 250 HA",
      description:"of land growing over 180,000 trees under the",
      span:"ROOTs & Grow A Tree Everywhere campaigns"
    },
    {
      number:" 190,000",
      description:"bopd (at peak) to be produced by the ",
      span:"Tilenga project"
    },
    
  ]
  return (
    <div>
      <div className="bg-white text-black p-8 md:p-16">
        <h2 className='text-4xl py-4'>Key Figures </h2>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
          {
            cards.map((card) =>{
              return(
                <div className="bg-gray-100  flex flex-col items-center gap-2 rounded-2xl pt-4 relative p-4">
                  <h2 className='text-blue-500 text-5xl px-4 font-light'>{card.number}</h2>
            
            <p className=' text-gray-600 p-4 '>{card.description} <span className='font-semibold'>{card.span}</span></p>
            <div className="h-4 w-full bg-blue-600 rounded-b-2xl absolute bottom-0"></div>
            </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
