import { NextImageResize } from '@/components/ui/ImageResize'
import SparklesText from '@/components/ui/sparkles-text'
import Link from 'next/link'
import React from 'react'

const GetContact = () => {
  return (
    <div className='py-8'>
      <div className='container-3xl'>
        <div className='grid grid-cols-12'>
          <div className='col-span-2'>
            <SparklesText text='SHOP' className='text-md' />
            <p>COME VISIT MY BRAND STORES</p>
            <p>Shop our clothing</p>
            <p>Store every day</p>
          </div>
          <div className='col-span-6'>
            <NextImageResize
              src={'/images/banner-store.webp'}
              alt='startcrow'
            />
          </div>
          <div className='col-span-4'>
            <div className='h-full justify-between'>
              <div className='p-2'>
                <p>
                  Ready to elevate your wardrobe with some rock ’n’ roll chic?
                  Swing by any of my ALIX Brand Stores, where my stylists can’t
                  wait to show you around.{' '}
                </p>
                <p>EU Available Mon-Fri 9am-6.00pm GMT</p>
                <p>+44 (0) 20 7190 8000</p>
                <p>Email: info@startcrow.com</p>
              </div>
              <div className='p-2'>
                <Link
                  href={'/contact'}
                  className='flex items-center gap-2 border-b border-black w-fit'
                >
                  GET IN TOUCH{' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M17 7l-10 10' />
                    <path d='M8 7l9 0l0 9' />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetContact
