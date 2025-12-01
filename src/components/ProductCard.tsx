import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

import { Product } from './PopularProducts'

interface ProductCardProps{
    product:Product
}

export default function ProductCard({product}:ProductCardProps){
  return (
    <div className='group relative h-[400px] w-[300px] ring ring-gray-200 rounded-[50px]  transition-all duration-300 flex flex-col items-center justify-center '>
      <img src={product.image} alt='none' className='w-[63%]' />
      <div className='flex items-center gap-2.5 mt-10'>
        <FaStar color='gold' size={20} />
        <FaStar color='gold' size={20} />
        <FaStar color='gold' size={20} />
        <FaStar color='gold' size={20} />
      </div>

       <h1 className=' mt-2.5 font-bold text-2xl'>{product.title.slice(0,10)}</h1>

      <div className=' flex gap-2 text-xl mt-2'>
            <h2 className='text-[#FF6900]'>{product.price}</h2>
            <span className='line-through text-gray-400'>{product.oldPrice}</span>
            <button className='opacity-0 translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0  absolute top-[285px] left-20 bg-orange-700 rounded-full text-white px-5 py-2 text-2xl'>Add Card</button>
      </div>

      {/* heart hover */}

      <div className='bg-[#FF6900] p-2 rounded-full absolute  right-3 top-4 flex items-center justify-between'>
            <FaHeart size={30} color='white' className='hover:scale-105 transition'/>
      </div>
    </div>
  )
}
