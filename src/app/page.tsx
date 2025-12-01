import HeroComponent from '@/components/HeroComponent'
import MainArticles from '@/components/MainArticles'
import Navbar from '@/components/Navbar'
import { PopularProducts } from '@/components/PopularProducts'
import TrendingCategorie from '@/components/TrendingCategorie'
import React from 'react'

export default function page() {
  return (
    <div>
     <Navbar/>

     <div className=' p-4 lg:px-14'>
      <HeroComponent/>
     </div>

     <div>
      <TrendingCategorie/>
     </div>

     <div>
      <MainArticles/>
     </div>

     <div>
      <PopularProducts/>
     </div>
     
    </div>
  )
}
