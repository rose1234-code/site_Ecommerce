'use client'

import React, { useEffect, useRef, useState } from 'react'
import { MonitorDot } from 'lucide-react';
import { Tablet } from 'lucide-react';
import { LaptopMinimal } from 'lucide-react';
import { SwatchBook } from 'lucide-react';
import { Undo2 } from 'lucide-react';


// notifier au parent qu'une couleur a te choisi tout en typant la props
  interface ResultProps {
    onColorSelect: (color: string) => void
  }
export default function Result({ onColorSelect }: ResultProps) {

  const [visible,setVisible]=useState(false)
  const containerRef=useRef<HTMLDivElement>(null)
  // for change the color of element
  const [selectedColor, setSelectedColor] = useState('#ffffff')

  const colors = [
    '#1E3A8A','#2563EB','#60A5FA','#93C5FD',
    '#0EA5A4','#06B6D4','#34D399','#10B981',
    '#F97316','#FB923C','#FDE68A','#F59E0B',
    '#EF4444','#FCA5A5','#9CA3AF','#374151'
  ];

  // open and close the element il somebody click inside de current field
  useEffect(()=>{
    function handleOutside(e:MouseEvent) {
      if(containerRef.current && e.target instanceof Node && !containerRef.current.contains(e.target) ){
        setVisible(false)
      }
   }
   document.addEventListener("mousedown",handleOutside)
   return () =>document.removeEventListener("mousedown",handleOutside)
  },[])


  const handleSelect = (color: string) => {
    setSelectedColor(color)
    setVisible(false)
    onColorSelect(color) // on informe le parent
  }
  
  return (
    <div  className='flex items-center justify-between py-3 border border-gray-200 px-20'>
      <div >
        <button className='px-3 flex rounded-md items-center gap-2 py-2  text-white bg-gray-600'><Undo2 />Go Back</button>
      </div>
      <div className=' flex items-center gap-8'>
        <MonitorDot />
        <LaptopMinimal />
        <Tablet />
      </div>
      <div className=' flex items-center gap-8'>
        <select name="" id="" className='border bg-white px-2 py-2  border-gray-200 rounded-md'>
            <option value="" className=''>Inter</option>
            <option value="">bold</option>
            <option value="">time new roman</option>
        </select>

        <div ref={containerRef} className='relative' >

            <div onClick={()=>setVisible(prev=>!prev)}  role="button"   className=' flex  relative items-center gap-2 px-3 py-2 border border-gray-200 rounded-md '>

              <SwatchBook />
              <div className='  rounded-md h-[21px] bg-orange-600 w-[25px]'></div>  

            </div>

          {
            visible && (
              <div className=' grid grid-cols-4 px-3 py-2 shadow gap-3 absolute top-[63px] -left-[110px]'>
                {colors.map((color,index)=>(
                  <button key={index} onClick={() => handleSelect(color)}  style={{backgroundColor:color}} className='w-9 h-9 rounded-md'></button>
                ))}
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
