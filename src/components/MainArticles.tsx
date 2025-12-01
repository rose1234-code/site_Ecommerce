import React from 'react'

export default function MainArticles() {
  return (
    <div className='flex items-center mt-10 px-12 justify-between w-full mb-40'>

        {/* first section */}
       <div className=' bg-gray-100 w-[45%] relative  p-8 rounded-2xl cursor-pointer group'>
            <h1 className='text-3xl  text-center font-bold'>Nike, Adidas</h1>
            <span className='text-xl mt-4 text- flex flex-col items-center '>MIN 40% OFF</span>
            <img  className='ml-32 relative' src="/mainchoes/shoes.png"  alt=" none" />
            <button className=' opacity-10 translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 absolute top-[273px] left-84 bg-orange-700 rounded-full text-white px-5 py-2 text-2xl'>Shop Now</button>
       </div>


        {/* second section */}
       
        <div className=' bg-gray-100 w-[45%] relative p-8 rounded-2xl group'>
            <h1 className='text-3xl  text-center font-bold'>PlayStation 5</h1>
            <span className='text-xl mt-4 text- flex flex-col items-center '>MIN 25% OFF</span>
            <img className=' ml-42 relative' src="/mainchoes/playstation.png"  alt=" none" width={450} />
            <button className='opacity-0 translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0  absolute top-[285px] left-84 bg-orange-700 rounded-full text-white px-5 py-2 text-2xl'>Shop Now</button>
       </div>
    </div>
  )
}
