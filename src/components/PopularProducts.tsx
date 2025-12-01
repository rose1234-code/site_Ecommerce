'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HeaderComponents from './HeaderComponents'
import ProductCard from './ProductCard'


export interface Product{
    id:string,
    title:string,
    des:string,
    price:number,
    oldPrice:number,
    rating:number,
    image:string,
    brand:string,
    isNew:boolean,
    category:string

}



export const PopularProducts = () => {

    const [products, setProducts] = useState<Product[]>([])

    // recuperons les donnees de l'api avec la bibrairie axios
    const fetchProducts = async() => {
        await axios.get('https://fakestoreapiserver.reactbd.org/api/walmartproducts?page=1&perPage=20 ').then(result => {
            console.log(result?.data)
            setProducts(result?.data?.data)
        }).catch(error=>console.log(error))
    }

    // utilisons useEffect pour eviter que les donnees se repetes lors de l'affichage
    useEffect(() => {
         fetchProducts();     
    }, [])
    console.log(products?.length)

  return (
    <div className=' px-14 border'>
        <HeaderComponents title='Popular Product' href='Show More'/>

        <div className='flex  flex-wrap items-center gap-5 justify-between'>
            {
                products.map(product=> <ProductCard key={product.id} product={product} />)
            }
        </div>
    </div>
  )
} 
 