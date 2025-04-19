import CustomCarousel from '@/components/carousel'
import Footer from '@/components/footer'
import Header from '@/components/header'
import KeyFigures from '@/components/keyfigures'
import Products from '@/components/products'
import Projects from '@/components/projects'
import React from 'react'

export default function Page() {
  return (
    <div>
      <Header/>
      <CustomCarousel/>
      <Products/>
      <Projects/>
      <KeyFigures/>
      <Footer/>
    </div>
  )
}
