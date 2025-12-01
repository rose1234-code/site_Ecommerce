import Helpnav from '@/components/Helpnav'
import Image from 'next/image'
import React from 'react'
import { ListChevronsDownUp,Bookmark,MessageCircle ,Heart ,Twitter,Instagram,MessageSquareWarning,Download  } from 'lucide-react';
import { FaFacebook,FaPinterest  } from "react-icons/fa";


import Link from 'next/link';

export default function page() {



  const lists=[
    {
      name:"For designers",
      href:"/designers"
    },
    {
      name:" Inspiration ",
      href:"/ Inspiration"
    },
    {
      name:"For designers",
      href:"/"
    },
    {
      name:" Advertising",
      href:"/Advertising"
    },
    {
      name:" Blog",
      href:"/Blog"
    },
    {
      name:"About",
      href:"About"
    },
    {
      name:"careers",
      href:"/careers"
    },
    {
      name:"For support",
      href:"/support"
    },
  ]

  return (
    <div>
       
      <Helpnav/>

      <h1 className='text-3xl font-bold px-40 mb-9'>Contact us Page</h1>

      <div className='px-40 flex items-center  justify-between'>
        <div className='flex items-center  gap-3.5'>
          <div className='w-[100px] flex items-center shadow h-[100px] rounded-full '>
            <Image className='h-full w-full rounded-full object-cover' src="/girl.jpg" alt="none"  width={100} height={100}/>
          </div>
          <p className='text-xl font-semibold'>Shuvo Ahamed <span className='text-[#bc774d]'>Available for work</span> <span className='text-gray-400'>Follow</span></p>
        </div>

        <div className='flex  items-center gap-10'>
          <Heart   className='border border-gray-500  px-2 py-2  w-[45px] h-[45px] rounded-full'/>
          <Bookmark   className='border border-gray-500  px-2 py-2  w-[45px] h-[45px] rounded-full'/>
          <button className='px-6 py-2 rounded-3xl text-2xl bg-gray-900 text-white'>Get in touch</button>
        </div>
      </div>

      <div className='px-40 mt-6 flex  my-10'>
        <div className='w-[99%] h-[90%]'>
          <Image className='h-full w-full object-cover' src="/just.png" alt="none" width={1000} height={1000} />
        </div>
        <div className='relative  top-10 -right-20'>
          <div className='space-y-6 mt-10  absolute'>
            <div>
              <div className='relative'>
                <MessageCircle  className='border relative border-gray-500  px-2 py-2  w-[45px] h-[45px] rounded-full'/>
                <span className='absolute left-7 flex-1 text-xl -top-3 w-[30px] h-[30px] border border-gray-200 bg-white flex items-center justify-center rounded-full'>2</span>
              </div>
            </div>
            <Download  className='border border-gray-500  px-2 py-2  w-[45px] h-[45px] rounded-full'/>
             <ListChevronsDownUp className='border border-gray-500  px-2 py-2  w-[45px] h-[45px] rounded-full'/>
          </div>
        </div>
      </div>


      <div className=' w-[40%] ml-[560px] mt-32'>
        <Image className='object-contain h-full w-full' src="/wait.png" alt='none' height={100} width={700}/>
      </div>

      <div className='w-full flex items-center justify-between px-32 mt-32'>
        <hr className='text-gray-300  w-[43%] ' />
        <div className='w-[150px] h-[150px] shadow rounded-full'>
          <Image className=' h-full w-full rounded-full object-cover' src="/girl.jpg" alt="none"  width={150} height={150}/>
        </div>
        <hr className='text-gray-300  w-[43%] ' />
      </div>
      <div className='flex items-center justify-center mt-3'>
        <button className='px-6 py-2  rounded-3xl text-2xl bg-gray-900 text-white'>Get in touch</button>
      </div>

      <div className='px-28  flex items-center justify-between my-28'>
        <div className=' text-2xl font-bold'>More by Shuvo Ahamed</div>
        <div className=' text-2xl'>View profile</div>
      </div>

      <div className='flex items-center justify-center my-32 gap-6 relative'>

        <div className='rounded-md h-[39px] w-[35px] flex items-center justify-center   bg-gray-100 relative shadow'>
          <div className='rounded-md text-lg font-bold text-gray-400  top-0.5 bottom-0.5 bg-white shadow absolute px-2.5 py-1'>L</div>
        </div>
        <div className='rounded-md h-[39px] w-[35px] flex items-center justify-center   bg-gray-100 relative shadow'>
          <div className='rounded-md text-lg font-bold text-gray-400  top-0.5 bottom-0.5 bg-white shadow absolute px-2.5 py-1'>F</div>
        </div>
        <div className='text-gray-400'>Like</div>

        <div className='flex items-center gap-3 text-gray-500 absolute right-16'>
           <MessageSquareWarning />
           <p>Report</p>
        </div>
      </div>

      <div className='flex items-center px-22 my-20 justify-between'>
        <div>
          <h1 className='font-extrabold text-3xl '>ShopVerse</h1>
        </div>
        <div className='flex items-center gap-10 text-lg '>
          {
            lists.map((list,index)=>(
              <Link key={index} href={list.href}>{list.name}</Link>
            )
            )
          }
        </div>
        <div className='flex items-center gap-6'>
          <Twitter />
          <FaFacebook />
          <Instagram />
          <FaPinterest />
        </div>
      </div>


      <div className='flex items-center py-16 text-gray-400 justify-between px-22'>
        <div className='space-x-6'>
          <span>© 2025 Dribbble</span>
          <span>Terms</span>
          <span>privacy</span>
          <span>Cookies</span>
        </div>
        <div className='space-x-6'>
          <span>Jobs</span>
          <span>Designers</span>
          <span>Freelancers</span>
          <span>Tags</span>
          <span>Places</span>
          <span>Resources</span>
        </div>
      </div>

    </div> 
  )
}
