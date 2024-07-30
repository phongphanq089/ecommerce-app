import React from 'react'
import ProductThumb from './ProductThumb'
import InfoProduct from './InfoProduct'
import ProductSlider from './ProductSlider'

const LayoutProductDetail = () => {
  return (
    <div className='grid md:grid-cols-2 2xl:grid-cols-3'>
      <div className='2xl:col-span-2 '>
        <div className='block md:hidden'>
          <ProductSlider />
        </div>
        <div className='hidden md:block'>
          <ProductThumb />
        </div>
      </div>
      <div className='2xl:col-span-1'>
        <InfoProduct />
      </div>
    </div>
  )
}

export default LayoutProductDetail
