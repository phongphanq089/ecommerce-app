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
      <h3 className='text-xs md:text-md text-white font-semibold absolute left-3 bottom-3 md:right-5 md:top-5  z-20 w-fit md:writing-mode-vertical-lr'>
        {title}
      </h3>
      <div className='absolute bottom-5 left-4 md:right-5 z-20'>
        <ButtonStyle
          link='/products'
          text='Read more'
          className='style-light'
        />
      </div>
      <motion.div
        initial={{ filter: 'blur(0px)', opacity: 0 }}
        whileHover={{ filter: 'blur(2px)', opacity: 1 }}
        transition={{ duration: 0.35 }}
        className='w-[90%] h-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 filter-blur '
      >
        <Link
          href={link}
          title={title}
          className='w-full h-full text-center relative z-20  flex items-center justify-center'
        >
          <span className='text-lg font-bold text-white'> View</span>
        </Link>
      </motion.div>
    </div>
  )
}

export default CardCategoried
