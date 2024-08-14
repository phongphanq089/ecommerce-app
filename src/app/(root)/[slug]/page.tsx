import CustomOptionsProduct from '@/components/pages/product-detail/CustomOptionsProduct'
import ProductInfo from '@/components/pages/product-detail/ProductInfo'
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

  const product = products.items[0] as products.Product

  console.log(product, 'list products')

  return (
    <div className='container-3xl py-3 md:py-8 relative '>
      <div className='grid md:grid-cols-2 xl:grid-cols-12'>
        <div className='xl:col-span-7'>
          <ProductThumb productInfo={product as products.Product} />
        </div>
        <div className='xl:col-span-5'>
          <div className='sticky top-1/2 -translate-y-1/2 h-fit'>
            <div className='flex flex-col h-fit relative'>
              <svg
                viewBox='0 0 8 113'
                preserveAspectRatio='none'
                className='!text-white absolute left-[-11px] top-[14px] w-2 h-auto'
              >
                <path
                  d='M8 0v94.72a6 6 0 0 0-2-4.51l-3.9-3.42a6 6 0 0 1-2-4.51V4A4 4 0 0 1 4 0Z'
                  fill='currentColor'
                ></path>
              </svg>
              <svg
                preserveAspectRatio='none'
                name='Shape top specs'
                viewBox='0 0 339 8'
                className='!text-white relative top-[1px] '
              >
                <path
                  d='M339 4a4 4 0 0 0-4-4H104.49a6 6 0 0 0-4.25 1.76l-4.48 4.48A6 6 0 0 1 91.51 8H339Z'
                  fill='currentColor'
                ></path>
              </svg>
              <div className='min-h-[400px] w-full bg-white relative'>
                <div className='flex flex-col items-start p-2 pb-0 uppercase'>
                  <h2 className='text-xs font-bold'>{product?.name}</h2>
                  <span className=' inline-block  rounded-xl text-sm font-bold'>
                    {product?.priceData?.price}$
                  </span>
                </div>
                <div className='p-3'>
                  <CustomOptionsProduct
                    productId={product._id!}
                    variants={product.variants}
                    productOptions={product.productOptions}
                  />
                </div>

                {product?.additionalInfoSections && (
                  <div className='p-2'>
                    <ProductInfo productInfo={product as products.Product} />
                  </div>
                )}
              </div>
              <svg
                name='Shape bottom variants'
                viewBox='0 0 343 12'
                preserveAspectRatio='none'
                className='!text-white relative top-[-1px]'
              >
                <path
                  d='M343 8a4 4 0 0 1-4 4H108.49a6 6 0 0 1-4.25-1.76l-4.48-4.48A6 6 0 0 0 95.51 4H4a4 4 0 0 1-4-4h343Z'
                  fill='currentColor'
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageProductDetail
