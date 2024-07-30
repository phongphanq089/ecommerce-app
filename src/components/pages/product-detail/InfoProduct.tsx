import { Button } from '@/components/ui/button'
import React from 'react'
import PrivacyPolicy from './PrivacyPolicy'

const InfoProduct = () => {
  return (
    <div className='p-1 h-fit sticky  top-[100px]'>
      <h2 className='text-md font-medium'>Black College Skate Hoodie</h2>
      <span className='text-xl font-bold leading-none mb-2 inline-block'>
        $70,00
      </span>
      <p className='text-sm font-normal leading-6 mb-2'>
        This skate fit hoodie features a front pocket and college-inspired logo.
        100% cotton. Hoodie noir Visionnaire. Impression Puff print coeur et
        dos. Coupe oversize. 65% Coton et 35% polyester 330grs pré-lavé pour
        éviter tout rétrécissement.
      </p>

      <div className='flex flex-col'>
        <p className='text-sm font-semibold'>SIZES:</p>
        <div className='flex items-center gap-1 mb-1'>
          <ul className='flex items-center gap-2'>
            <li>
              <input
                type='radio'
                id='xxs'
                name='hosting'
                value='xxs'
                className='hidden peer'
                required
              />
              <label
                htmlFor='xxs'
                className='inline-flex items-center justify-between w-full  text-color-1 bg-color-2 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300  peer-checked:bg-black peer-checked:border-white peer-checked:text-white '
              >
                <div className='p-1 w-[50px] flex items-center justify-center'>
                  XXS
                </div>
              </label>
            </li>
            <li>
              <input
                type='radio'
                id='xs'
                name='hosting'
                value='xs'
                className='hidden peer'
                required
              />
              <label
                htmlFor='xs'
                className='inline-flex items-center justify-between w-full  text-color-1 bg-color-2 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300  peer-checked:bg-black peer-checked:border-white peer-checked:text-white '
              >
                <div className='p-1 w-[50px] flex items-center justify-center'>
                  XS
                </div>
              </label>
            </li>
            <li>
              <input
                type='radio'
                id='s'
                name='hosting'
                value='s'
                className='hidden peer'
                required
              />
              <label
                htmlFor='s'
                className='inline-flex items-center justify-between w-full  text-color-1 bg-color-2 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300  peer-checked:bg-black peer-checked:border-white peer-checked:text-white '
              >
                <div className='p-1 w-[50px] flex items-center justify-center'>
                  S
                </div>
              </label>
            </li>
            <li>
              <input
                type='radio'
                id='m'
                name='hosting'
                value='m'
                className='hidden peer'
                required
              />
              <label
                htmlFor='m'
                className='inline-flex items-center justify-between w-full  text-color-1 bg-color-2 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300  peer-checked:bg-black peer-checked:border-white peer-checked:text-white '
              >
                <div className='p-1 w-[50px] flex items-center justify-center'>
                  M
                </div>
              </label>
            </li>
            <li>
              <input
                type='radio'
                id='l'
                name='hosting'
                value='l'
                className='hidden peer'
                required
              />
              <label
                htmlFor='l'
                className='inline-flex items-center justify-between w-full  text-color-1 bg-color-2 border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300  peer-checked:bg-black peer-checked:border-white peer-checked:text-white '
              >
                <div className='p-1 w-[50px] flex items-center justify-center'>
                  L
                </div>
              </label>
            </li>
          </ul>
        </div>
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
