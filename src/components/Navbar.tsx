'use client'


import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { LuHeart } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";
import { CiMenuBurger } from "react-icons/ci";
import { ModeToggle } from './ModeToggle';
import { useTheme } from 'next-themes';

export default function Navbar() {

    const theme=useTheme()

    const links=[
        {
            name:'Home',
            href:'/'
        },
        {
            name:'Shop',
            href:'/shop'
        },
        {
            name:'Categories',
            href:'/categories'
        },
        {
            name:'Help',
            href:'/contact'
        }
    ]

    const [scrolled,setScrolled]=useState(false)

    useEffect(()=>{
        const onscroll =()=>{
            setScrolled(window.scrollY>50)
        };
        window.addEventListener("scroll",onscroll)
        return ()=>window.addEventListener("scroll",onscroll)
    },[])


  return (
    <>
        <div className={`  h-[70px] px-4 lg:px-14 flex transition duration-300 ease-in-out fixed z-50 ${scrolled? ' w-[60%]  top-6 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-xl shadow-xl border border-white/20 rounded-ful rounded-full ring ring-gray-400':'w-full bg-white'}  backdrop-blur-md  items-center justify-between `}>
             
           <div className='flex items-center gap-3'>
                <div className=' lg:hidden'>
                    <CiMenuBurger  size={21}/>
                </div>
                <h1 className='font-extrabold text-2xl lg:text-3xl '>ShopVerse</h1>
                <ModeToggle />
            </div>
            <div className='hidden lg:flex gap-8 text-xl'>
                {
                    links.map(link=>(<Link key={link.name} href={link.href}>{link.name}</Link>))
                }
            </div>

           <div className='flex gap-4 items-baseline-last'>
                <div className=' hidden px-3 lg:flex  gap-4 items-center py-2 bg-gray-400 rounded-full'>
                    <CiSearch size={25} />
                    <input type="text" className='outline-none'  placeholder='search for "phones" ' />   
                </div>
                <div className='flex gap-0.5 '>
                    <LuHeart className='relative'  size={30}/>
                    <span className='  absolute flex-1 right-14 lg:right-24 top-8 lg:top-6 w-[19px] h-[19px] text-lg flex items-center justify-center rounded-full bg-red-500 text-white'>1</span>
                </div>
               <div className=' flex gap-0.5'>
                 <FiShoppingBag  className='relative' size={30}/>
                 <span className='  absolute  right-[7px] lg:right-[45px] top-8 lg:top-6 w-[21px] h-[19px] text-lg flex items-center justify-center flex-1 rounded-full bg-red-500 text-white'>1</span>
               </div>
           </div>
           
        </div>

        {/* input just on mobile */}
           
        <div className='mx-4 flex px-3  mb-6 lg:hidden gap-4 items-center py-2 bg-gray-200 rounded-md'>
            
            <CiSearch size={25} />
            <input type="text" className='outline-none'  placeholder='search for "phones" ' />   
        </div>

    </>
    ) 
}
