import CardCategoried from '@/components/shared/CardCategoried'
import { listProductsCategory1 } from '@/contents/list-product'
import React from 'react'

interface PropsType {
  product: Array<{
    src: string
    title: string
    link: string
    isVideo: boolean
  }>
}

const SectionCategoried = ({ product }: PropsType) => {
  return (
    <div className='py-4'>
      <div className='container-3xl'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          {product.map((product, index) => {
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
export default SectionCategoried
