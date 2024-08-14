'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { products } from '@wix/stores'
import DOMPurify from 'isomorphic-dompurify'
import React from 'react'

const ProductInfo = ({ productInfo }: { productInfo: products.Product }) => {
  return (
    <div>
      {productInfo?.additionalInfoSections?.map((item, index) => {
        return (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div className='flex items-center justify-between cursor-pointer hover:bg-color-3'>
                <h3 className='uppercase px-1'>{item.title}</h3>
                <span className='p-1 cursor-pointer'>[+]</span>
              </div>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[1200px]'>
              <DialogHeader>
                <DialogTitle className='text-[24px]'>{item.title}</DialogTitle>
                <div
                  className='showTextDetail'
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(item?.description as string),
                  }}
                ></div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )
      })}
    </div>
  )
}

export default ProductInfo
