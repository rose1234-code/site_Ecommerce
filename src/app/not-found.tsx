'use client'

import Result from '@/components/Result'
import React, { useState } from 'react'
import { Search } from 'lucide-react';
import Link from 'next/link';
import { House } from 'lucide-react';
import { ScrollText } from 'lucide-react';
import { BookImage } from 'lucide-react';
import { BookOpenCheck } from 'lucide-react';


export default function NotFound() {

  const [inputBg, setInputBg] = useState('#ffffff') // couleur appliquée à l'input
  return (
  
    <div className='flex flex-col h-screen bg-gray-50 '>
      <Result  onColorSelect={(color) => setInputBg(color)}/>
      <div className='flex relative space-y-5 h-screen flex-col items-center justify-center'>
        <h1 className='text-center text-orange-600 font-bold text-6xl'>404 Not Found</h1>
        <p className='text-2xl font-semibold  text-gray-500'>Whoops ! That page does not  exist</p>
        <div className='flex items-center justify-between  mt-3.5 w-[40%] '>
          <div className='flex bg-white items-center  w-[85%] px-2   py-3  gap-2 border border-gray-200 rounded-md'>
            <Search />
            <input  style={{ backgroundColor: inputBg }} className='w-full outline-none' type="text" placeholder='e.g ,components' />
          </div>
          <input className='px-4 py-3 rounded-md border bg-gray-500 text-white gap-3.5' type="submit" value='submit' />
        </div>


        <div className='flex items-center justify-between  w-[69%] mt-9'>
          <div className='shadow px-20 py-6 rounded-lg space-y-6 flex flex-col items-center '>
            <House  size={35} color='gray' className='rounded-md bg-gray-100 px-1.5 py-1.5' />
            <Link className='text-2xl' href="/home">Homepage</Link>
          </div>
          <div className='shadow px-20 py-6 rounded-lg space-y-6 flex flex-col items-center '>
            <BookImage  size={35} color='orange' className='rounded-md bg-gray-200 px-1.5 py-1.5' />
            <Link className='text-2xl' href="/home">Library</Link>
          </div>
          <div className='shadow px-20 py-6 rounded-lg space-y-6 flex flex-col items-center '>
            <BookOpenCheck size={35} color='#D0BCFF' className='rounded-md bg-[#eae4fa] px-1.5 py-1.5' />
            <Link className='text-2xl' href="/home">Knoledge center</Link>
          </div>
          <div className='shadow px-20 py-6 rounded-lg space-y-6 flex flex-col items-center '>
            <ScrollText size={35} color='gray' className='rounded-md bg-green-100 px-1.5 py-1.5' />
            <Link className='text-2xl' href="/home">Blog</Link>
          </div>
        </div>
      </div>

      
    </div>
  )
}
