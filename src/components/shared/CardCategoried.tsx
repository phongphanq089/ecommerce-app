'use client'
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { ButtonStyle_v1 } from '../designs/ButtonStyle'
interface PropsCart {
  src: string
  title: string
  link: string
  isVideo: boolean
}

const CardCategoried = (props: PropsCart) => {
  const { src, title, link, isVideo } = props
  return (
    <div className='w-full h-full relative group overflow-hidden'>
      <div className='wrapImgResize imgSquare'>
        {isVideo ? (
          <video autoPlay muted loop preload='metadata' playsInline>
            <source src={src} type='video/mp4' />
          </video>
        ) : (
          <img src={src} className='w-full object-cover h-full' alt='' />
        )}
      </div>
      <div className=' z-20  absolute left-3 bottom-3 p-1 '>
        <ButtonStyle_v1
          link={link}
          text={title}
          className='bg-white flex'
          icons={
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
              className='icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right relative z-10 stroke-white'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M5 12l14 0' />
              <path d='M15 16l4 -4' />
              <path d='M15 8l4 4' />
            </svg>
          }
        />
      </div>
    </div>
  )
}

export default CardCategoried
