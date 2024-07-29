import React from 'react'
import ProductThumb from './ProductThumb'
import InfoProduct from './InfoProduct'

const LayoutProductDetail = () => {
  return (
    <div className='grid grid-cols-3'>
      <div className='col-span-2'>
        <ProductThumb />
      </div>
      <div className='col-span-1'>
        <InfoProduct />
      </div>
    </div>
  )
}

export default LayoutProductDetail
