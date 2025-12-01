import React from 'react'

export default function HeroComponent() {
  return (
    <div className='hero-bg  rounded-2xl lg:rounded-[50px] overflow-hidden relative'>
        <div className='h-[500px] lg:h-[650px] w-full  bg-[#00000093] rounded-2xl lg:rounded-4xl p-4 lg:p-10'>
             {/* left content */}

            <div className='text-white mb-10 lg:mb-0 flex flex-col lg:mt-24  gap-y-5 py-6 lg:py-0 justify-center h-[77%] lg:h-[55%] max-w-2xl'>
                <span className='uppercase text-xl lg:text-2xl pl-14 mt-14  lg:pl-0  lg:mt-0' >Sale up to 20% off</span>
                <h1 className='font-extrabold  text-[35px] lg:text-6xl  pl-3 lg:pl-0 '>Apple Watch Ultra 2</h1>
                <p className='lg:text-xl text-xl lg:pl-0 pl-3'>The most rugged and capable Apple Watch pushes the limits again.<br/> Featuring the all-new S9 SiP.</p>
            </div>
            <div className='flex gap-5 w-full lg:w-[23%] pl-3 lg:pl-0'>
                <button className='bg-orange-500 w-1/2 text-xl text-white lg:px-6 px-2 py-3 rounded-full cursor-pointer' >Shop Now</button>
                <button className=' text-black w-1/2 text-xl px-2 lg:px-3 py-3 bg-white rounded-full  cursor-pointer' >Learn More</button>
            </div> 
            {/* close left content */}

          <div>
            <img className=' hidden md:right-0 md:flex md:top-20 absolute lg:top-6 lg:right-[400px] object-cover'  src="/watch2.png"  alt="none"  height={'26%'} width={'26%'} />
            <img className='  hidden lg:flex absolute -top-6 right-[80px] '  src="/watch1.png"  alt="none" height={'18%'} width={'18%'}/>
          </div>
        </div>
    </div>
  )
}
