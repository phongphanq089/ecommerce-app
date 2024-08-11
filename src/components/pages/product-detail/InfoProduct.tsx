import { Button } from '@/components/ui/button'
import React from 'react'
import PrivacyPolicy from './PrivacyPolicy'
import Description from '@/components/shared/Description'
import CustomOptionsProduct from './CustomOptionsProduct'
import { products } from '@wix/stores'

const InfoProduct = ({ productInfo }: { productInfo: products.Product }) => {
  return (
    <div className='p-1 h-fit sticky top-[120px]'>
      <h2 className='text-md font-medium'>{productInfo.name}</h2>
      <span className='text-xl font-bold leading-none mb-2 inline-block'>
        {`${productInfo.priceData?.price}$`}
      </span>

      <Description text={productInfo.description} />

      <div className='flex flex-col'>
        <p className='text-sm font-semibold'>SIZES:</p>
        <CustomOptionsProduct
          productId={productInfo._id!}
          variants={productInfo.variants}
          productOptions={productInfo.productOptions}
        />

        <span className='border-b border-black inline-block w-fit font-semibold text-[18px]'>
          Size help
        </span>

        <Button className='px-1 my-3'>ADD TO CART</Button>
      </div>

      <PrivacyPolicy />
    </div>
  )
}

export default InfoProduct
