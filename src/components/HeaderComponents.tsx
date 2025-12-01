import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

type HeaderComponentsProps = {
    title:string,
    href:string
}

export default function HeaderComponents({title,href}:HeaderComponentsProps) {
  return (
    <div>
        <div className='flex justify-between items-center'>
            <h1 className=' text-xl lg:text-3xl font-semibold text-[#030303f2]'>{title}</h1>
            <Link href="#"  className=' text-orange-600  lg:text-md underline gap-2 flex items-center'>{href}
                <FaLongArrowAltRight size={30} color='#FF6900' />
            </Link>
        </div>
    </div>
  )
}
