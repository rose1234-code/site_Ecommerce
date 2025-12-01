import React from 'react'
import HeaderComponents from './HeaderComponents';

export default function TrendingCategorie() {
    interface TrendingCategoriesProps{
        id:number;
        name:string;
        imageUrl:string;

    }

    const lists:TrendingCategoriesProps []=[
        {   id:1,
            imageUrl:"/phone.png",
            name:'Mobiles'
        },
        {
           id:2,
            imageUrl:"/laptop.png",
            name:'LapTops'
        },
        {
            id:3,
            imageUrl:"/casque.png",
            name:'Headphones'
        },
        {
            id:4,
            imageUrl:"/tv.png",
            name:'Monitors & TVs'
        },
        {
           id:5,
            imageUrl:"/phoneround.png",
            name:'Speakers'
        },
    ]
  return (
    <div className='mt-5 px-5 lg:px-10'>
      <HeaderComponents title='Trending Categories' href='Show More'/>
      <div className=' mb-7  px-2 lg:px-0 lg:flex items-center gap-5 w-full justify-between mt-10' >
        {
            lists.map((list)=>(
                <div key={list.id} className=' lg:mb-0 flex items-center flex-col '>
                 <img className=' mb-6 lg:mb-7 h-[490px] lg:h-40 w-full object-cover cursor-pointer'  src={list.imageUrl} alt="none" />
                 <h1 className='text-xl font-bold'>{list.name}</h1>
                </div>
            ))
        }
      </div>
    </div>
  )
}
