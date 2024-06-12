import { Card } from '@/components/ui/card'
import { listProductFeatures } from '@/contents/list-product'
import Image from 'next/image'
import React from 'react'

const ProductFeatures = () => {
  return (
    <div className='container-xl py-8'>
      <div className='grid grid-cols-3 gap-3'>
        <div>
          <Card className='w-full'>
            <Image
              src={listProductFeatures[0].image}
              alt={listProductFeatures[0].title}
              width={400}
              height={400}
            />
            <h3>{listProductFeatures[0].title}</h3>
          </Card>
        </div>
        <div className='col-span-2'>
          <div className='grid grid-cols-3 w-full'>
            {listProductFeatures?.map((item, index) => {
              if (index === 0) return
              return (
                <Card key={index} className='w-full'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={400}
                  />
                  <h3>{item.title}</h3>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductFeatures
