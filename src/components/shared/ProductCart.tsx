import { url } from 'inspector'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CartType {
  slug?: string
  index: number
  name?: string
  price?: number
  mediaImage: {
    image: {
      url: string
    }
  }[]
}

const ProductCart = (props: CartType) => {
  const { slug, index, name, price, mediaImage } = props
  return (
    <div className='rounded-[22px]  p-2 bg-white border-2 border-gray-400 h-full '>
      <Link
        href={'/' + slug}
        className='group  overflow-hidden  flex flex-col h-full'
      >
        <div key={index} className={`relative pt-[133%]`}>
          {mediaImage.map((image, index) => {
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
            {name}
          </h3>
        </div>
        <span className='rounded-full  px-3 mt-auto py-1 text-white flex items-center space-x-1 bg-black w-fit  text-xs font-bold dark:bg-zinc-800'>
          <span>Buy now </span>
          <span className='bg-zinc-700 rounded-full text-sm px-2 py-0 text-white '>
            {`${price}$`}
          </span>
        </span>
      </Link>
    </div>
  )
}

export default ProductCart
