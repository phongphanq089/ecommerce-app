import CardCategoried from '@/components/shared/CardCategoried'
import { listProductsCategory } from '@/contents/list-product'
import React from 'react'

const ListProductCategoried = () => {
  return (
    <div className='py-4 md:py-8'>
      <div className='container-3xl'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          {listProductsCategory.map((product, index) => {
            return (
              <CardCategoried
                key={index}
                src={product.src}
                title={product.title}
                link={product.link}
                isVideo={product.isVideo}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ListProductCategoried
