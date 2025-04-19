import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Products from '@/components/products'
import ServicesHero from '@/components/services-hero'
import ServicesProducts from '@/components/services-product'
import ServicesSponsorship from '@/components/services-sponsorship'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col gap-2 bg-white'>
      <Header/>
      <ServicesHero/>
      <ServicesProducts/>
      <ServicesSponsorship/>
      <Footer/>
    </div>
  )
}
