import InfoProduct from '@/components/pages/product-detail/InfoProduct'
import ProductSlider from '@/components/pages/product-detail/ProductSlider'
import ProductThumb from '@/components/pages/product-detail/ProductThumb'
import { wixClientServer } from '@/lib/wixClientServer'
import { products } from '@wix/stores'

import { notFound } from 'next/navigation'
import React from 'react'

const PageProductDetail = async ({ params }: { params: { slug: string } }) => {
  const wixClient = await wixClientServer()

  const products = await wixClient.products
    .queryProducts()
    .eq('slug', params.slug)
    .find()

  if (!products.items[0]) {
    return notFound()
  }

  const product = products.items[0]

  return (
    <div className='container-3xl py-3 md:py-8 relative '>
      <div className='grid md:grid-cols-2 2xl:grid-cols-3'>
        <div className='2xl:col-span-2 '>
          <div className='block md:hidden'>
            <ProductSlider productInfo={product as products.Product} />
          </div>
          <div className='hidden md:block'>
            <ProductThumb productInfo={product as products.Product} />
          </div>
        </div>
        <div className='2xl:col-span-1'>
          <InfoProduct productInfo={product as products.Product} />
        </div>
      </div>
    </div>
  )
}

export default PageProductDetail
