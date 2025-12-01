import React from 'react'
import { ChevronDown } from 'lucide-react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { FaRegCopyright } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";



export default function Contact() {
  return (
    <div>
        <div className='bg-gray-100 mx-14 rounded-2xl relative pt-8 h-screen'>

            <div className='flex items-center justify-between gap-1  bg-black px-3 rounded-md h-[51px] mx-[578px]  text-white'>
                <img className='object-cover' src="/water.png" alt="none" height={80} width={40} />
                <p className='flex items-center gap-1'>Features<ChevronDown /></p>
                <p className='flex items-center gap-1'>Ressources<ChevronDown /></p>
                <p className='flex items-center gap-1'>Compagny<ChevronDown /></p>
                <button className='px-2 py-2 rounded-xl bg-white  text-xl text-gray-700'>Contact us</button>
            </div>

            <div className='flex items-center justify-between px-32 cursor-copy mt-28'>
                <div className=' py-10'>
                    <h1 className='text-7xl  flex items-center gap-2 my-4 '>Get in <TfiLayoutLineSolid /></h1>
                     <h1 className='text-7xl flex items-center gap-2 '>Touch with us</h1>
                    <p className='text-gray-500  mb-3 text-xl mt-3'>where are here to help!whether you have question about our <br /> services,needs assistance with your account
                        ,or want to <br />  provide feedback our team is ready to assist you
                    </p>
                    <div>
                        <h1 className='text-gray-500 text-xl'>Email</h1>
                        <p className='text-gray-500  mb-5 font-bold text-xl'>hello@gmail.com</p>
                    </div>
                    <div>
                        <h1 className='text-gray-500 mb-1 text-xl'>Phone</h1>
                        <p className='text-gray-500  mb-1 font-bold text-xl'>+237 655525402</p>
                    </div>
                    <p className='text-gray-500  text-xl mb-8'>available Monday to Friday 9Am - 6Pm</p>
                    <button  className='bg-black flex items-center gap-2 rounded-full px-3 py-2 text-xl text-white'>Live Chat 
                        <FaLongArrowAltRight color='black' className='border bg-white rounded-full w-[39px] p-1 h-[39px]' />
                    </button>

                </div>
                <div className='shadow bg-white rounded-2xl h-[550px] space-y-10 p-8'>

                    <div className='flex items-center gap-6 '>
                        <div className=' text-lg '>
                            <label htmlFor="" className='block my-2'>FirstName</label>
                            <input type="text" className='px-4 py-3 border border-gray-100 outline-none rounded-3xl bg-gray-100'  placeholder='Enter your first name'/>
                        </div>
                        <div className=' text-lg'>
                            <label htmlFor="" className='block my-2'>Last Name</label>
                            <input type="text" className='px-4 border border-gray-100 outline-none py-3 rounded-3xl bg-gray-100'  placeholder='Enter your last name'/>
                        </div>
                    </div>

                    <div className=' text-lg '>
                        <label htmlFor="" className='block my-2'>Email</label>
                        <input type="text" className=' w-full px-4 border border-gray-100 outline-none py-3 rounded-3xl bg-gray-100'  placeholder='Enter your  email'/>
                    </div>

                     <div className=' text-lg '>
                        <label htmlFor="" className='block my-2'>How can we help you ?</label>
                        <textarea className='border border-gray-200 px-3 py-4 outline-none bg-gray-100 w-full rounded-2xl h-[100px]' name="" id=""></textarea>
                    </div>
                    <button  className='bg-black shadow  float-right flex items-center gap-2 rounded-full px-3 py-3 text-xl text-white'>Sent Message
                        <FaLongArrowAltRight color='black' className='border bg-white rounded-full w-[39px] p-1 h-[39px]' />
                    </button>
                </div>
            </div>

            <div className=' flex items-center text-xl text-gray-900 justify-between mt-40 px-32'>
                <div className='space-y-8'>
                    <h1 className='font-bold text-4xl'>ShopVerse</h1>
                    <p className='leading-10'>Start  by downloading the shopverse mobile app <br />From app store ou playstore</p>
                </div>*
                <div className='space-y-5'>
                    <p>Digital  wallet management </p>
                    <p>Investment and Trading</p>
                    <p>Ease Money Transfer</p>
                </div>
                <div className='space-y-4'>
                    <p>About us </p>
                    <p>contact</p>
                    <p>Faqs</p>
                    <p>Blocs</p>
                </div>
                <div className='space-y-8'>
                    <h1>Social Media</h1>
                    <div className='flex items-center gap-3'>
                        <FaLinkedinIn color='black' size={30}  />
                        <FaInstagram  color='black' size={30} />
                        <FaXTwitter   color='black' size={30}/>
                    </div>
                </div>
            </div>
            <div className=' py-6 text-gray-400 text-sm  flex items-center justify-center gap-2.5'><FaRegCopyright />2024 ShopVerse.All rights reserved</div>
        </div>
    </div>
  )
}
