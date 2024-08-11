import CardProduct from '@/components/shared/card-product'
import PaginationFilter from '@/components/pages/products/PaginationFilter'
import { listProductFeatures } from '@/contents/list-product'
import React from 'react'
import FilterProduct from '@/components/pages/products/FilterProduct'
import { wixClientServer } from '@/lib/wixClientServer'
import ProductList from '@/components/pages/products/ProductList'
import { collections } from '@wix/stores'

interface SearchParams {
  searchParams: {
    categorie: string
  }
}

const PageListProducts = async ({ searchParams }: SearchParams) => {
  const wixClient = await wixClientServer()

  const categorie = await wixClient.collections.queryCollections().find()

  const allProduct = await wixClient.collections.getCollectionBySlug(
    searchParams.categorie || 'all-products'
  )

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

        {/* {listProductFeatures.map((product, index) => {
            return <CardProduct key={index} products={product} />
          })} */}
        <ProductList
          categoryId={
            allProduct.collection?._id || '00000000-000000-000000-000000000001'
          }
          searchParams={searchParams}
        />
      </div>
    </div>
  )
}

export default PageListProducts
