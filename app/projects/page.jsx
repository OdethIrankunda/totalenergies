import Footer from '@/components/footer'
import Header from '@/components/header'
import ProjectsHero from '@/components/projects-hero'
import React from 'react'

export default function page() {
  return (
    <div>
      <Header/>
      <ProjectsHero/>
      <div className=" flex flex-col gap-4 bg-white p-8 md:px-16 text-gray-800">
        <p>Located in Buliisa and Nwoya districts in the Lake Albert region, the Tilenga Project operated by TotalEnergies EP Uganda covers three (03) Production Licenses (PLs) from Contract Area-1 (Jobi-Rii, Gunya and Ngiri) and three (03) PLs from License Area-2 (Kasamene-Wahrindi, Kigogole-Ngara and Nsoga)</p>
        <p>The name of <span className='font-semibold'>Tilenga</span> is a derivative of the 2 local names for the Uganda Kob. TIL in Luo and ENGAbi in Lugungu.</p>
        <p>The Tilenga Project is very important for TotalEnergies as it is completely in line with our strategy of only approving new projects if they are low-cost and low emissions. In particular, the design of the facilities incorporates several measures to limit greenhouse gas emissions, including the extraction of Liquefied Petroleum Gas for use in regional markets as a substitute for burning biomass, and the solarization of the EACOP pipeline. </p>
        <p>Moreover, the associated gas produced from Tilenga Project will be used to meet the heating and power requirements for the Project from start-up, and in case of inadequate gas as the field matures, electricity will be imported from the National Grid which is predominantly powered by renewable energy sources (hydro-electric power).</p>
        <p>During a ceremony held in Kampala, in the presence of Yoweri Museveni, President of the Republic of Uganda, Philip Mpango, Vice-President of the United Republic of Tanzania, Patrick Pouyanné, Chairman and CEO of TotalEnergies, and representatives of the China National Offshore Oil Corporation (CNOOC), the Uganda National Oil Company (UNOC) and the Tanzania Petroleum Development Corporation (TPDC), the Lake Albert Development Project partners announced the <a href="#" className='font-semibold'>final investment decision</a> and the launch of this major project representing a total investment of approximately <span className='font-semibold'>$10 billion.</span></p>
        
      </div>
      <Footer/>
    </div>
  )
}

