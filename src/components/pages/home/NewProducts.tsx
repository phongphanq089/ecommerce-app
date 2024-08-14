/* eslint-disable @next/next/no-img-element */
import {
  ButtonStyle_v1,
  ButtonStyle_v3,
} from '@/components/designs/ButtonStyle'
import ProductCart from '@/components/shared/ProductCart'
import SparklesText from '@/components/ui/sparkles-text'
import SvgIcon from '@/components/ui/svg-icon'
import { wixClientServer } from '@/lib/wixClientServer'
import { collections } from '@wix/stores'
import React from 'react'

interface PropsType {
  title: string
  categoryId: string
  limit: number
}

const NewProducts = async (props: PropsType) => {
  const { title, categoryId, limit } = props

  const myWixClient = await wixClientServer()

  const cats = await myWixClient.collections
    .queryCollections()
    .eq('_id', categoryId)
    .find()

  const { items } = await myWixClient.products
    .queryProducts()
    .eq('collectionIds', categoryId)
    .limit(limit)
    .find()

  const colection = cats.items[0] as collections.Collection

  return (
    <div className='py-8'>
      <div className='flex items-center gap-4 px-4 mb-3'>
        <SparklesText text={title} className='text-md' />
        <ButtonStyle_v1
          link={`/products-list?categorie=${cats.items[0].slug}`}
          text='All product'
          className='bg-white flex'
          icons={<SvgIcon icon='arrow-right' />}
        />
      </div>
      <div className='grid grid-cols-12 gap-2'>
        <div className='h-fit sticky top-[100px] col-span-5'>
          <div className='realtive'>
            {colection.media?.items?.map((colect, index) => {
              return (
                <React.Fragment key={index}>
                  {index === 0 && (
                    <div className='wrapImgResize imgSquare'>
                      <img
                        src={colect.image?.url as string}
                        className='w-full object-cover h-full'
                        alt=''
                      />
                    </div>
                  )}
                </React.Fragment>
              )
            })}

            <div className=' z-20 absolute right-3 top-3 bg-black '>
              <ButtonStyle_v3
                link={colection.name as string}
                text={title}
                className='bg-white flex'
                icons={<SvgIcon icon='arrow-right' />}
              />
            </div>
          </div>
        </div>

        <div className='px-1 col-span-7'>
          <div className='grid grid-cols-2 gap-1 '>
            {items?.map((item, index) => {
              return (
                <div className='px-1 h-full' key={index}>
                  <ProductCart
                    name={item?.name as string | undefined}
                    slug={item?.slug}
                    mediaImage={item.media?.items as []}
                    index={index}
                    price={item?.priceData?.price as number | undefined}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewProducts
