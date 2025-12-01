'use client'

import React, { useEffect, useRef, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { ChevronDown, ChevronUp } from "lucide-react";
import { MessageCircleMore } from 'lucide-react';
import { BellRing } from 'lucide-react';



export default function Helpnav() {

    const [visible,setVisible]=useState(true)
    const [explore,setExplore]=useState(true)
    const [find,setFind]=useState(true)
    const [get,setGet]=useState(true)
    const [block,setBlock]=useState(false)

    const [open,setOpen]=useState(false)
    const blockRef=useRef<HTMLDivElement>(null)
    const [shot,setShot]=useState(false)
    const shotRef=useRef<HTMLDivElement>(null)
    


    useEffect(()=>{
        function ShotClick(e:MouseEvent){
            if(shotRef.current && e.target instanceof Node && !shotRef.current.contains(e.target)){
                setShot(false)
            }
        }
        document.addEventListener("mousedown",ShotClick)
        return ()=>document.removeEventListener("mousedown",ShotClick)
    },[])

    useEffect(()=>{
        function handleClick(e:MouseEvent){
            if(blockRef.current && e.target instanceof Node && !blockRef.current.contains(e.target)){
                setOpen(false)
            }
        }
        document.addEventListener("mousedown",handleClick)
        return()=> document.removeEventListener("mousedown",handleClick)

    },[])
  return (
    <div className='h-[70px] px-10 mt-6 flex items-center mb-40 justify-between'>

        {/* logo */}
        <div className=' flex items-center gap-14'>
            <h1 className='font-extrabold text-3xl '>ShopVerse</h1>
            <div className='px-3 flex  gap-5 items-center py-2 bg-gray-100 rounded-full'>
                <input type="text" className=' relative w-[370px] px-3.5 text-gray-900 text-lg'  placeholder='what are you looking for?' />  
                <div className=' flex items-center cursor-pointer gap-5'>

                    <div ref={shotRef} className='relative'>
                        
                            <div  onClick={()=>{setVisible(p=>!p);setShot(s=>!s)}} className='relative flex items-center text-gray-700 gap-1 text-xl font-semibold justify-between'>
                                <p>Shots</p>
                                {visible?(<ChevronDown />):(<ChevronUp/>)}
                            </div>

                        {shot && ( <div className='text-xl px-5 py-6 rounded-xl shadow absolute z-30 bg-white top-[45px] -right-30 w-[250px]'>
                            <div className=' text-gray-600  px-6 py-5  hover:bg-gray-100 hover:rounded-xl font-bold'>Shot</div>
                            <div className=' text-gray-600  px-6 py-5 hover:bg-gray-100 hover:rounded-xl'>Designers</div>
                            <div className=' text-gray-600  px-6 py-5 hover:bg-gray-100 hover:rounded-xl'>Services</div>
                        </div> )}
                    </div>
                    <CiSearch className='bg-[#D75300] relative  px-2 py-2 rounded-full' color='white' size={60} />
                </div>
            </div>
        </div>

       {/* elements */}
      <div className='' >
        <ul className='flex items-center gap-10 text-xl text-gray-700 font-bold'>
            <li onClick={()=>setExplore(prev=>!prev)} className=' cursor-pointer flex items-center gap-2'>Explore {explore?(<ChevronDown />):(<ChevronUp/>)}</li>
            <li onClick={()=>setFind(prev=>!prev)} className='flex cursor-pointer  items-center gap-2'>Find Talent {find?(<ChevronDown />):(<ChevronUp/>)}</li>
            <li onClick={()=>setGet(prev=>!prev)} className='flex cursor-pointer  items-center gap-2'>Get Hired{get?(<ChevronDown />):(<ChevronUp/>)}</li>
            <li onClick={()=>setBlock(prev=>!prev)} className='flex cursor-pointer  items-center gap-2'>Blog {block?(<ChevronDown />):(<ChevronUp/>)}</li>
        </ul>
      </div>

      {/* icons  */}
      <div className='flex items-center gap-10'>

        <div ref={blockRef} className=' relative'>

            <div onClick={()=>setOpen(prev=>!prev)} className='relative ' >
                <MessageCircleMore className=' hover:text-gray-500 hover:cursor-pointer'  size={30} />
           </div>
           {open && (
            <div className='absolute shadow z-50 bg-white rounded-xl space-y-9 top-12 -right-20 w-[600px] flex flex-col items-center justify-center'>
                <div  className='mt-8 text-2xl font-bold'>Your Message</div>
                <hr className='text-gray-200  w-full ' />
                <div className='text-2xl'>you have no Message</div>
                <hr className='text-gray-200  w-full ' />
                <button className=' mb-8 bg-pink-400 text-2xl text-white py-4 px-4 rounded-3xl' >view all your Message</button>
            </div>
           )}
            
        </div>
    
        <BellRing className='cursor-pointer' size={30} />
        <div className=' h-[61px] w-[61px] flex items-center justify-center rounded-full bg-gray-400 text-white text-2xl'>R</div>
      </div>
    </div>
  )
}
