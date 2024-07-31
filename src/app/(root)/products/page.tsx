import CardProduct from '@/components/shared/card-product'
import PaginationFilter from '@/components/pages/products/PaginationFilter'
import {
  listProductFeatures,
  listProductsCategory,
} from '@/contents/list-product'
import React from 'react'
import FilterProduct from '@/components/pages/products/FilterProduct'

const PageListProducts = () => {
  return (
    <div className='py-3 xl:py-8'>
      <div className='container-3xl'>
        <FilterProduct />
      </div>
      <div className='container-3xl'>
        <div className='flex items-center justify-between w-full mb-1 md:mb-5 flex-wrap gap-2'>
          <h2 className='text-sm md:text-lg font-semibold whitespace-nowrap'>
            ALL PRODUCT FOR YOU
          </h2>
        </div>
        <div className='grid grid-cols-2 gap-1 lg:grid-cols-3 xl:grid-cols-4 md:gap-3'>
          {listProductFeatures.map((product, index) => {
            return <CardProduct key={index} products={product} />
          })}
        </div>
        <div className='pt-6'>
          <PaginationFilter />
        </div>
      </div>
    </div>
  )
}

export default PageListProducts
