import React from 'react'
import { productList } from '@/utils/productList'
import ProductTile from './Product_Tile'

function Products() {
  return (
    <div className='sm:px-20 px-5 pb-40 flex flex-col gap-20'>
      <div className='flex flex-col sm:gap-2 gap-4'>
        <h3 className='text-black font-garamond sm:text-4xl text-2xl font-bold w-full'>What we can offer you...</h3>
        <p className='text-black uppercase font-spartan font-light w-full text-right sm:text-base text-xs'>Click on the product to get access</p>
      </div>
      <div className='flex flex-row justify-center flex-wrap gap-14'>
        {productList.map((item, id) => {
          return (
            <ProductTile key={id} name={item.name} description={item.description} image={item.image} url={item.url} />
          )
        })}
      </div>
    </div>
  )
}

export default Products