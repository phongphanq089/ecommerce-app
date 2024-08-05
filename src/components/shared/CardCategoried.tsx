'use client'
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import ButtonStyle from '../designs/ButtonStyle'
import Link from 'next/link'
import { motion } from 'framer-motion'

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
      <Link
        href={link}
        title={title}
        className=' z-20  absolute left-3 bottom-3 p-1 bg-black'
      >
        <h3 className='text-xs md:text-md text-white font-semibold w-fit'>
          {title}
        </h3>
      </Link>
    </div>
  )
}

export default CardCategoried
