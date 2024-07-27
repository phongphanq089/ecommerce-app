import ButtonStyle from '@/components/designs/ButtonStyle'
import CardProduct from '@/components/shared/card-product'
import { listProductFeatures } from '@/contents/list-product'
import React from 'react'

const FeaturedProducts = () => {
  return (
    <div>
      <div className='container-3xl'>
        <div className='flex items-center justify-between w-full mb-1 md:mb-5 flex-wrap gap-2'>
          <h2 className='text-sm md:text-lg font-semibold whitespace-nowrap'>
            FEATURED PRODUCT
          </h2>
          <ButtonStyle link='/products' text='All product' />
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
          {listProductFeatures.map((product, index) => {
            return <CardProduct key={index} products={product} />
          })}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts
