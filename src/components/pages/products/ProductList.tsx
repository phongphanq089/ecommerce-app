import { NextImageResizeCouple } from '@/components/ui/ImageResize'
import { wixClientServer } from '@/lib/wixClientServer'
import { Product } from '@/types/product'
import { products } from '@wix/stores'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PaginationFilter from './PaginationFilter'

const PRODUCT_PER_PAGE = 10
const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string
  limit?: number
  searchParams?: any
}) => {
  const wixClient = await wixClientServer()

  const productQuery = wixClient.products
    .queryProducts()
    .startsWith('name', searchParams?.name || '')
    .eq('collectionIds', categoryId)
    .hasSome(
      'productType',
      searchParams?.type ? [searchParams.type] : ['physical', 'digital']
    )
    .gt('priceData.price', searchParams?.min || 0)
    .lt('priceData.price', searchParams?.max || 999999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(
      searchParams?.page
        ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
        : 0
    )

  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(' ')

    if (sortType === 'asc') {
      productQuery.ascending(sortBy)
    }
    if (sortType === 'desc') {
      productQuery.descending(sortBy)
    }
  }

  const respone = await productQuery.find()

  return (
    <>
      <div className='grid grid-cols-2 gap-1 lg:grid-cols-4 xl:grid-cols-5 md:gap-1'>
        {respone?.items?.map((product: products.Product, index) => {
          return (
            <div className='p-1 h-full' key={index}>
              <div className='rounded-[22px]  p-2 bg-white border-2 border-gray-400 h-full '>
                <Link
                  href={'/' + product.slug}
                  className='group  overflow-hidden  flex flex-col h-full'
                >
                  <div key={index} className={`relative pt-[133%]`}>
                    {product.media?.items?.map((image, index) => {
                      return (
                        <React.Fragment key={index}>
                          {index === 0 && (
                            <Image
                              src={image?.image?.url || '/image.png'}
                              alt={'startcrow'}
                              fill
                              priority={true}
                              className={`h-auto object-cover group-hover:opacity-0`}
                            />
                          )}
                          {index === 1 && (
                            <Image
                              src={image?.image?.url || '/image.png'}
                              alt={'startcrow'}
                              fill
                              priority={true}
                              className={`h-auto object-cover opacity-0 group-hover:opacity-100`}
                            />
                          )}
                        </React.Fragment>
                      )
                    })}
                  </div>

                  <div className='relative bg-white flex flex-col'>
                    <h3 className='leading-none text-[18px] text-black mt-4 mb-2 dark:text-neutral-200'>
                      {product.name}
                    </h3>
                  </div>
                  <span className='rounded-full  px-3 mt-auto py-1 text-white flex items-center space-x-1 bg-black w-fit  text-xs font-bold dark:bg-zinc-800'>
                    <span>Buy now </span>
                    <span className='bg-zinc-700 rounded-full text-sm px-2 py-0 text-white '>
                      {`${product.priceData?.price}$`}
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
      <div className='pt-6'>
        {searchParams?.categorie || searchParams?.name ? (
          <PaginationFilter
            currentPage={respone.currentPage || 0}
            hasPrev={respone.hasPrev()}
            hasNext={respone.hasNext()}
            totalPages={respone.totalPages || 0}
            totalCount={respone.totalCount || 0}
            limit={respone.pageSize || 0}
          />
        ) : null}
      </div>
    </>
  )
}

export default ProductList
